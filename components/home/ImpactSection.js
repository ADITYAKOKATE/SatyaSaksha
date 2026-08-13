'use client';
import { useState, useEffect, useRef } from 'react';
import { useReveal } from '@/hooks/useReveal';
import styles from './ImpactSection.module.css';
import impactData from '@/data/impact-stats.json';

// Simple counter component that animates when in view
function Counter({ targetValue, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * targetValue));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(targetValue);
            }
          };
          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [targetValue, duration, hasAnimated]);

  return <span ref={elementRef}>{count.toLocaleString()}</span>;
}

export default function ImpactSection() {
  useReveal();

  return (
    <section className={`section ${styles.section}`} id="impact">
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div className={`section-header reveal ${styles.headerOverride}`}>
          <p className="label">Our Reach</p>
          <div className="divider-gold"></div>
          <h2 className="heading-xl">Every Action, Every Life</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: 'var(--space-4) auto 0', color: 'rgba(255,255,255,0.6)' }}>
            Figures will be updated with verified data from the Foundation.
          </p>
        </div>

        <div className={styles.grid}>
          {impactData.map((stat, i) => (
            <div key={stat.id} className={`reveal reveal-delay-${(i % 4) + 1} ${styles.statCard}`}>
              <div className={styles.icon}>{stat.icon}</div>
              <div className={styles.line}></div>
              <div className={styles.numberWrap}>
                {stat.prefix}<Counter targetValue={stat.value} />{stat.suffix}
              </div>
              <p className={styles.label}>{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
