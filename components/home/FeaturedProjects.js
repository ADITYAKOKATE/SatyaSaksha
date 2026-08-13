'use client';
import Link from 'next/link';
import { useReveal } from '@/hooks/useReveal';
import styles from './FeaturedProjects.module.css';
import projectsData from '@/data/projects.json';

export default function FeaturedProjects() {
  useReveal();

  return (
    <section className="section" id="featured-projects" style={{ backgroundColor: 'var(--ivory-deep)' }}>
      <div className="container">
        
        <div className="section-header reveal">
          <p className="label">Our Initiatives</p>
          <div className="divider-gold"></div>
          <h2 className="heading-xl">Featured Projects</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: 'var(--space-4) auto 0' }}>
            Real action on the ground. Discover how we are turning our mission into measurable impact across the country.
          </p>
        </div>

        <div className={styles.grid}>
          {projectsData.map((project, i) => (
            <div key={project.id} className={`reveal reveal-delay-${(i % 3) + 1} ${styles.card}`}>
              <div className={styles.imageWrap}>
                <div 
                  className={styles.image} 
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className={styles.statusBadge}>{project.status}</div>
              </div>
              <div className={styles.content}>
                <p className={styles.category}>{project.category}</p>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.description}</p>
                <Link href={project.link} className={styles.link}>
                  Read More <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className={`reveal reveal-delay-3 ${styles.actionWrap}`}>
          <Link href="/projects" className="btn btn--outline btn--lg">
            View All Projects
          </Link>
        </div>

      </div>
    </section>
  );
}
