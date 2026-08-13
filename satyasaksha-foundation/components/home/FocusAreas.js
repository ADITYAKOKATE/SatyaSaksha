'use client';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import styles from './FocusAreas.module.css';
import focusAreasData from '@/data/focus-areas.json';

export default function FocusAreas() {
  useReveal();

  return (
    <section className="section" id="focus-areas">
      <div className="container">
        
        <div className="section-header reveal">
          <p className="label">What We Do</p>
          <div className="divider-gold"></div>
          <h2 className="heading-xl">Our Areas of Work</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: 'var(--space-4) auto 0' }}>
            Ten interconnected domains — each a critical pillar of our mission for a more just, compassionate and sustainable world.
          </p>
        </div>

        <div className={styles.grid}>
          {focusAreasData.map((area, i) => (
            <Link 
              href={area.link} 
              key={area.id} 
              className={`reveal reveal-delay-${(i % 5) + 1} ${styles.card}`}
            >
              <div className={styles.cardInner}>
                {/* Default State */}
                <div className={styles.defaultState}>
                  <span className={styles.icon}>{area.icon}</span>
                  <h3 className={styles.title}>{area.title}</h3>
                  <div className={styles.line}></div>
                  <p className={styles.desc}>{area.description}</p>
                </div>

                {/* Hover State Background Fill */}
                <div 
                  className={styles.hoverFill} 
                  style={{ backgroundColor: area.color }}
                ></div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
