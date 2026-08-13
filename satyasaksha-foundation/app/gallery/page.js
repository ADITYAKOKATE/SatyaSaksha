'use client';
import { useReveal } from '@/hooks/useReveal';
import styles from './page.module.css';
import galleryData from '@/data/gallery.json';

// Adding a few more images for the full gallery grid
const fullGallery = [
  ...galleryData,
  { id: "gal-5", image: "https://images.unsplash.com/photo-1542840410-3092f99611a3?q=80&w=1200&auto=format&fit=crop", caption: "Rural Health Checkup" },
  { id: "gal-6", image: "https://images.unsplash.com/photo-1504267498721-a4f6eb8b16c5?q=80&w=1200&auto=format&fit=crop", caption: "Community Clean-up Drive" },
  { id: "gal-7", image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1200&auto=format&fit=crop", caption: "Nature Walk & Awareness" },
  { id: "gal-8", image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=1200&auto=format&fit=crop", caption: "Tree Plantation Camp" }
];

export default function GalleryPage() {
  useReveal();

  return (
    <div className={styles.pageWrap}>
      
      {/* Page Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2500&auto=format&fit=crop")' }}></div>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className="heading-hero reveal">In Pictures</h1>
          <p className={`reveal reveal-delay-1 ${styles.heroSub}`}>
            A visual journey of our efforts, our people, and the beautiful planet we are fighting to protect.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className={`section ${styles.gallerySection}`}>
        <div className="container">
          
          <div className={styles.filterBar}>
            <button className={`${styles.filterBtn} ${styles.active}`}>All Photos</button>
            <button className={styles.filterBtn}>Wildlife</button>
            <button className={styles.filterBtn}>Community</button>
            <button className={styles.filterBtn}>Events</button>
          </div>

          <div className={styles.grid}>
            {fullGallery.map((item, i) => (
              <div key={item.id} className={`reveal reveal-delay-${(i % 4) + 1} ${styles.item}`}>
                <div className={styles.image} style={{ backgroundImage: `url(${item.image})` }}></div>
                <div className={styles.overlay}>
                  <span>{item.caption}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
