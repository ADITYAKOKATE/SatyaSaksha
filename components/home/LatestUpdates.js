'use client';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import styles from './LatestUpdates.module.css';
import newsData from '@/data/news.json';
import galleryData from '@/data/gallery.json';

export default function LatestUpdates() {
  useReveal();

  return (
    <section className="section" id="latest-updates">
      <div className="container">
        
        <div className={styles.grid}>
          
          {/* Left Column: Latest News */}
          <div className={styles.newsCol}>
            <div className={`reveal ${styles.headerWrap}`}>
              <p className="label">News & Updates</p>
              <div className="divider-gold" style={{ margin: 'var(--space-4) 0', marginLeft: '0' }}></div>
              <h2 className="heading-lg">Latest Stories</h2>
            </div>

            <div className={styles.newsList}>
              {newsData.map((news, i) => (
                <Link href={news.link} key={news.id} className={`reveal reveal-delay-${i+1} ${styles.newsCard}`}>
                  <div className={styles.newsImage} style={{ backgroundImage: `url(${news.image})` }}></div>
                  <div className={styles.newsContent}>
                    <div className={styles.newsMeta}>
                      <span className={styles.newsCategory}>{news.category}</span>
                      <span className={styles.newsDate}>{news.date}</span>
                    </div>
                    <h3 className={styles.newsTitle}>{news.title}</h3>
                    <p className={styles.newsExcerpt}>{news.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className={`reveal reveal-delay-3 ${styles.actionWrap}`}>
              <Link href="/news" className="btn btn--outline">
                Read All News
              </Link>
            </div>
          </div>

          {/* Right Column: Gallery Preview */}
          <div className={styles.galleryCol}>
            <div className={`reveal ${styles.headerWrap}`}>
              <p className="label">In Pictures</p>
              <div className="divider-gold" style={{ margin: 'var(--space-4) 0', marginLeft: '0' }}></div>
              <h2 className="heading-lg">Gallery Preview</h2>
            </div>

            <div className={styles.galleryGrid}>
              {galleryData.map((item, i) => (
                <Link href="/gallery" key={item.id} className={`reveal reveal-delay-${(i%2)+1} ${styles.galleryItem}`}>
                  <div className={styles.galleryImage} style={{ backgroundImage: `url(${item.image})` }}></div>
                  <div className={styles.galleryOverlay}>
                    <span>{item.caption}</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className={`reveal reveal-delay-3 ${styles.actionWrap}`}>
              <Link href="/gallery" className="btn btn--outline">
                View Full Gallery
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
