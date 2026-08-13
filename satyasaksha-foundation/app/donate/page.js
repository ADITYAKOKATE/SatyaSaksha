'use client';
import { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { useRouter, useSearchParams } from 'next/navigation';
import styles from './page.module.css';

export default function DonatePage() {
  useReveal();
  const searchParams = useSearchParams();
  const preselectedAmount = searchParams.get('amount');
  
  const [amount, setAmount] = useState(preselectedAmount || '1000');
  const [customAmount, setCustomAmount] = useState('');
  
  const handlePresetClick = (val) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setAmount('custom');
  };

  return (
    <div className={styles.pageWrap}>
      
      <section className={styles.hero}>
        <div className={styles.heroBg} style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=2500&auto=format&fit=crop")' }}></div>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className="heading-hero reveal">Make a Donation</h1>
          <p className={`reveal reveal-delay-1 ${styles.heroSub}`}>
            Your contribution directly funds on-ground conservation, rural education, and animal welfare.
          </p>
        </div>
      </section>

      <section className={`section ${styles.donateSection}`}>
        <div className={`container ${styles.grid}`}>
          
          {/* Info Side */}
          <div className={`reveal ${styles.infoCol}`}>
            <h2 className="heading-lg" style={{ marginBottom: 'var(--space-6)' }}>Why Donate?</h2>
            <p className="text-muted" style={{ marginBottom: 'var(--space-6)' }}>
              Satyasaksha Foundation operates on a model of absolute transparency. 100% of public donations are routed directly to field projects, while administrative costs are covered by our founding board.
            </p>
            <ul className={styles.impactList}>
              <li><strong>₹500</strong> provides books for a rural student for a year.</li>
              <li><strong>₹1,500</strong> feeds a rescued animal for a month.</li>
              <li><strong>₹5,000</strong> plants and maintains 100 native trees.</li>
              <li><strong>₹10,000</strong> funds a medical camp for an entire village.</li>
            </ul>
            <p className={styles.taxNote}>
              * All donations are eligible for tax exemption under Section 80G of the Income Tax Act.
            </p>
          </div>

          {/* Form Side */}
          <div className={`reveal reveal-delay-2 ${styles.formCol}`}>
            <div className={styles.formCard}>
              <h3 className="heading-md" style={{ marginBottom: 'var(--space-6)', textAlign: 'center' }}>Choose Your Impact</h3>
              
              <div className={styles.amountGrid}>
                {['500', '1000', '2500', '5000'].map((preset) => (
                  <button 
                    key={preset}
                    className={`${styles.amountBtn} ${amount === preset ? styles.active : ''}`}
                    onClick={() => handlePresetClick(preset)}
                  >
                    ₹{preset}
                  </button>
                ))}
              </div>

              <div className={styles.customAmount}>
                <label>Or enter custom amount:</label>
                <div className={styles.inputWrap}>
                  <span className={styles.currency}>₹</span>
                  <input 
                    type="number" 
                    placeholder="Enter amount" 
                    value={customAmount}
                    onChange={handleCustomChange}
                  />
                </div>
              </div>

              <form className={styles.detailsForm} onSubmit={(e) => {
                e.preventDefault();
                alert(`Proceeding to payment gateway for ₹${amount === 'custom' ? customAmount : amount}`);
              }}>
                <div className={styles.formGroup}>
                  <label>Full Name</label>
                  <input type="text" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Email Address</label>
                  <input type="email" required />
                </div>
                <div className={styles.formGroup}>
                  <label>PAN Number (For Tax Receipt)</label>
                  <input type="text" />
                </div>
                
                <button type="submit" className="btn btn--gold" style={{ width: '100%', marginTop: 'var(--space-4)' }}>
                  Proceed to Payment
                </button>
              </form>

              <div className={styles.secureNote}>
                🔒 Secure 256-bit SSL Encrypted Payment
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
