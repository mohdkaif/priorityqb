import Link from 'next/link';
import styles from './home.module.css';

const SERVICES = [
  {
    href: '/services',
    icon: 'fa-cogs',
    title: 'QuickBooks Setup',
    text: 'Expert setup and customization for your business needs.',
  },
  {
    href: '/quickbooks',
    icon: 'fa-book',
    title: 'Bookkeeping',
    text: 'Accurate and timely bookkeeping services.',
  },
  {
    href: '/payroll',
    icon: 'fa-money-check-alt',
    title: 'Payroll Management',
    text: 'Seamless payroll integration and management.',
  },
  {
    href: '/support',
    icon: 'fa-tools',
    title: 'Technical Support',
    text: 'Expert troubleshooting and support for QuickBooks.',
  },
  {
    href: '/financial',
    icon: 'fa-chart-line',
    title: 'Financial Reporting',
    text: 'Comprehensive financial reporting and analysis.',
  },
  {
    href: '/pricing',
    icon: 'fa-tags',
    title: 'Pricing Plans',
    text: 'Clear annual plans for Pro, Premier, Enterprise, and Online.',
  },
];

const TESTIMONIALS = [
  {
    quote: 'Priority QB Services transformed our financial management. Highly recommended!',
    name: 'John Doe',
  },
  {
    quote: 'Their team is professional, efficient, and always available for support.',
    name: 'Jane Smith',
  },
  {
    quote: "The best QuickBooks service provider we've ever worked with!",
    name: 'Mike Johnson',
  },
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="siteContainer">
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.heroEyebrow}>
                <i className="fas fa-bolt" /> QuickBooks specialists
              </p>
              <h1>Simplify your finances with Priority QB</h1>
              <p className={styles.heroLead}>
                Simplifying your financial management with QuickBooks solutions —
                setup, bookkeeping, payroll, support, and reporting.
              </p>
              <div className={styles.heroActions}>
                <Link href="/services" className="btn btnAccent">
                  Explore Services
                </Link>
                <Link href="/contact" className="btn btnGhost">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className={styles.heroPanel}>
              <div className={styles.heroStats}>
                <div className={styles.heroStat}>
                  <strong>500+</strong>
                  <span>Happy Clients</span>
                </div>
                <div className={styles.heroStat}>
                  <strong>10+</strong>
                  <span>Years Experience</span>
                </div>
                <div className={styles.heroStat}>
                  <strong>99%</strong>
                  <span>Satisfaction</span>
                </div>
                <div className={styles.heroStat}>
                  <strong>24/7</strong>
                  <span>Support Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="siteContainer">
          <div className="sectionHead">
            <p className="sectionEyebrow">What we offer</p>
            <h2>Our Services</h2>
            <p>
              Expert QuickBooks setup, bookkeeping, payroll, and support tailored
              to your business — each on its own dedicated page.
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {SERVICES.map((s) => (
              <Link key={s.href} href={s.href} className={styles.serviceLink}>
                <div className="featureCard">
                  <div className="featureIcon">
                    <i className={`fas ${s.icon}`} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span>
                    Learn more <i className="fas fa-arrow-right" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={`section ${styles.testimonials}`}>
        <div className="siteContainer">
          <div className="sectionHead">
            <p className="sectionEyebrow">Testimonials</p>
            <h2>What Our Clients Say</h2>
            <p>Trusted by businesses for QuickBooks setup, bookkeeping, and support.</p>
          </div>
          <div className={styles.testimonialGrid}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className={styles.testimonialCard}>
                <p>&ldquo;{t.quote}&rdquo;</p>
                <h4>{t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className="siteContainer">
          <h2>Ready to take control of your finances?</h2>
          <p>Get in touch today — or browse our pricing plans and pick what fits.</p>
          <div className={styles.heroActions} style={{ justifyContent: 'center' }}>
            <Link href="/contact" className="btn btnAccent">
              Contact Us
            </Link>
            <Link href="/pricing" className="btn btnGhost">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
