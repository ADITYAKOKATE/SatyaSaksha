import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request) {
  try {
    const rawBody = await request.text();
    const headers = request.headers;

    // 1. Identify Webhook Source (Razorpay or PayPal)
    // Razorpay uses 'x-razorpay-signature', PayPal has its own mechanism.
    const rzpSignature = headers.get('x-razorpay-signature');
    let provider = rzpSignature ? 'razorpay' : 'paypal';
    let isVerified = false;
    let eventData = null;

    // 2. Verify Webhook Signature Securly
    if (provider === 'razorpay') {
      // Scaffold for Razorpay Verification
      const secret = process.env.RAZORPAY_WEBHOOK_SECRET || 'mock_secret';
      
      const expectedSignature = crypto
        .createHmac('sha256', secret)
        .update(rawBody)
        .digest('hex');

      // In production, we compare the signatures:
      // isVerified = (expectedSignature === rzpSignature);
      isVerified = true; // Mock verification for scaffold
      eventData = JSON.parse(rawBody);

    } else if (provider === 'paypal') {
      // Scaffold for PayPal Verification
      // Uses PayPal's /v1/notifications/verify-webhook-signature API
      isVerified = true; // Mock verification for scaffold
      eventData = JSON.parse(rawBody);
    }

    if (!isVerified) {
      console.warn(`[Webhook API] Invalid signature from provider: ${provider}`);
      return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 401 });
    }

    // 3. Process the Event
    console.log(`[Webhook API] Received verified ${provider} webhook:`, eventData.event || 'unknown_event');

    if (provider === 'razorpay' && eventData.event === 'payment.captured') {
      const paymentEntity = eventData.payload.payment.entity;
      
      // Update Database Schema
      const updatePayload = {
        transactionId: paymentEntity.id,
        orderId: paymentEntity.order_id,
        paymentStatus: 'Successful',
        amountCaptured: paymentEntity.amount / 100, // Convert paise to INR
        updatedAt: new Date().toISOString()
      };

      console.log('[Webhook API] Updating Database with Success:', updatePayload);
      
      // Send Confirmation Email
      // await sendThankYouEmail({ email: paymentEntity.email, amount: updatePayload.amountCaptured });
    }

    // Acknowledge receipt to the provider
    return NextResponse.json({ received: true });

  } catch (error) {
    console.error('[Webhook API Error]', error);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}
