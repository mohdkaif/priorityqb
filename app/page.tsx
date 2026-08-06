'use client';

import Link from 'next/link';
import styles from './home.module.css';
import { useSiteUi } from '@/components/Layout';

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

const HERO_IMG =
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80';
const SHOWCASE_IMG =
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80';

export default function HomePage() {
  const { openEnquiry } = useSiteUi();

  return (
    <>
      <section className={styles.hero}>
        <div className="siteContainer">
          <div className={styles.heroGrid}>
            <div>
              <p className={styles.heroEyebrow}>
                <i className="fas fa-bolt" /> QuickBooks specialists
              </p>
              <h1>
                Business done <span>right</span>
              </h1>
              <p className={styles.heroLead}>
                Setup, bookkeeping, payroll, and support — so you can run your
                business with confidence and clarity.
              </p>
              <div className={styles.heroActions}>
                <button type="button" className="btn btnPrimary" onClick={openEnquiry}>
                  Get started
                </button>
                <Link href="/pricing" className="btn btnGhost">
                  See plans &amp; pricing
                </Link>
              </div>
              <div className={styles.trustRow}>
                <span className={styles.stars}>★★★★★</span>
                <span>Trusted by 500+ businesses</span>
              </div>
            </div>
            <div className={styles.heroVisual}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HERO_IMG}
                alt="Business professional using financial software"
              />
              <div className={styles.floatCard}>
                <i className="fas fa-file-invoice-dollar" style={{ color: 'var(--qb-green)' }} />
                Invoices on track
              </div>
              <div className={styles.floatCard}>
                <i className="fas fa-chart-pie" style={{ color: 'var(--qb-blue)' }} />
                Cash flow clear
              </div>
              <div className={styles.floatPill}>Automate monthly snapshot</div>
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

      <section className="section" style={{ background: 'var(--surface-2)' }}>
        <div className="siteContainer">
          <div className={styles.showcase}>
            <div className={styles.showcaseImg}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={SHOWCASE_IMG}
                alt="Financial reports and bookkeeping workspace"
              />
            </div>
            <div className={styles.showcaseCopy}>
              <p className="sectionEyebrow">Built for growing teams</p>
              <h2>Books that stay clean — without the busywork</h2>
              <p>
                From chart-of-accounts setup to monthly reconciliations and payroll,
                Priority QB Services keeps your QuickBooks accurate so you can focus
                on customers, not spreadsheets.
              </p>
              <button type="button" className="btn btnAccent" onClick={openEnquiry}>
                Tell us about your business
              </button>
            </div>
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
            <button type="button" className="btn btnAccent" onClick={openEnquiry}>
              Get started
            </button>
            <Link href="/pricing" className="btn btnGhost" style={{ borderColor: '#fff', color: '#fff' }}>
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
