'use client';
import { useReveal } from '@/hooks/useReveal';
import Link from 'next/link';
import styles from './page.module.css';
import projectsData from '@/data/projects.json';

// Adding a few more mock projects for a robust grid
const allProjects = [
  ...projectsData,
  {
    id: "project-medical-camps",
    title: "Rural Health & Medical Camps",
    category: "Healthcare",
    description: "Providing free diagnosis, medicines, and specialized care to remote villages with limited healthcare access.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1600&auto=format&fit=crop",
    status: "Active",
    link: "/projects/medical-camps"
  },
  {
    id: "project-youth-sports",
    title: "Youth Sports Academy",
    category: "Sports",
    description: "Nurturing young talent in rural areas through professional coaching and state-of-the-art facilities.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1600&auto=format&fit=crop",
    status: "Planning",
    link: "/projects/youth-sports"
  },
  {
    id: "project-clean-water",
    title: "Clean Water Initiative",
    category: "Agriculture & Water",
    description: "Installing solar-powered water purification systems in drought-affected agricultural communities.",
    image: "https://images.unsplash.com/photo-1541703623-868bf0662d55?q=80&w=1600&auto=format&fit=crop",
    status: "Completed Phase 2",
    link: "/projects/clean-water"
  }
];

export default function ProjectsPage() {
  useReveal();

  return (
    <div className={styles.pageWrap}>
      
      {/* Page Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2500&auto=format&fit=crop")' }}></div>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className="heading-hero reveal">Our Projects</h1>
          <p className={`reveal reveal-delay-1 ${styles.heroSub}`}>
            Discover the tangible impact we are making across the country through dedicated, community-driven initiatives.
          </p>
        </div>
      </section>

      <section className={`section ${styles.projectsSection}`}>
        <div className="container">
          
          <div className={styles.filterBar}>
            <button className={`${styles.filterBtn} ${styles.active}`}>All</button>
            <button className={styles.filterBtn}>Wildlife</button>
            <button className={styles.filterBtn}>Education</button>
            <button className={styles.filterBtn}>Healthcare</button>
            <button className={styles.filterBtn}>Empowerment</button>
          </div>

          <div className={styles.grid}>
            {allProjects.map((project, i) => (
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
                    Read Full Case Study <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section section-dark text-center">
        <div className="container">
          <p className="label reveal">Support Our Work</p>
          <h2 className="heading-xl reveal">Fund a Project Directly</h2>
          <p className="text-muted reveal" style={{ maxWidth: '600px', margin: 'var(--space-4) auto var(--space-8)' }}>
            100% of your targeted donation goes directly to the field operations of the specific project you choose to support.
          </p>
          <div className="reveal">
            <Link href="/donate" className="btn btn--gold btn--lg">Donate to a Project</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
