'use client';
import { useReveal } from '@/hooks/useReveal';
import Link from 'next/link';
import styles from './page.module.css';
import newsData from '@/data/news.json';

// Adding a few more items for the dedicated news page
const allNews = [
  ...newsData,
  {
    id: "news-3",
    title: "Annual Fundraising Gala Exceeds Target",
    date: "June 15, 2026",
    category: "Foundation",
    excerpt: "Thanks to our generous donors, the annual gala raised over ₹50 Lakhs, which will go directly towards building two new rural schools.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
    link: "/news/annual-gala-success"
  },
  {
    id: "news-4",
    title: "New Partnership with Global Wildlife Trust",
    date: "May 02, 2026",
    category: "Wildlife",
    excerpt: "Satyasaksha Foundation has signed a monumental MoU with the Global Wildlife Trust to share research and resources for elephant conservation.",
    image: "https://images.unsplash.com/photo-1614027167389-014c2780c102?q=80&w=800&auto=format&fit=crop",
    link: "/news/wildlife-trust-partnership"
  }
];

export default function NewsPage() {
  useReveal();

  return (
    <div className={styles.pageWrap}>
      
      {/* Page Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1584907600572-0402b85e0503?q=80&w=2500&auto=format&fit=crop")' }}></div>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className="heading-hero reveal">News & Updates</h1>
          <p className={`reveal reveal-delay-1 ${styles.heroSub}`}>
            Stay informed about our latest initiatives, milestones, and stories from the field.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className={`section ${styles.featuredSection}`}>
        <div className="container">
          <div className="section-header reveal">
            <p className="label">Featured Story</p>
            <div className="divider-gold"></div>
          </div>
          
          <Link href={allNews[0].link} className={`reveal ${styles.featuredCard}`}>
            <div className={styles.featuredImage} style={{ backgroundImage: `url(${allNews[0].image})` }}></div>
            <div className={styles.featuredContent}>
              <div className={styles.meta}>
                <span className={styles.category}>{allNews[0].category}</span>
                <span className={styles.date}>{allNews[0].date}</span>
              </div>
              <h2 className={styles.featuredTitle}>{allNews[0].title}</h2>
              <p className={styles.featuredExcerpt}>{allNews[0].excerpt}</p>
              <span className={styles.readMore}>Read Full Story <span>→</span></span>
            </div>
          </Link>
        </div>
      </section>

      {/* News Grid */}
      <section className={`section ${styles.gridSection}`}>
        <div className="container">
          <div className="section-header reveal">
            <h2 className="heading-lg">Latest Articles</h2>
            <div className="divider-gold"></div>
          </div>

          <div className={styles.grid}>
            {allNews.slice(1).map((news, i) => (
              <Link href={news.link} key={news.id} className={`reveal reveal-delay-${(i % 3) + 1} ${styles.card}`}>
                <div className={styles.imageWrap}>
                  <div className={styles.image} style={{ backgroundImage: `url(${news.image})` }}></div>
                </div>
                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span className={styles.category}>{news.category}</span>
                    <span className={styles.date}>{news.date}</span>
                  </div>
                  <h3 className={styles.title}>{news.title}</h3>
                  <p className={styles.excerpt}>{news.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
