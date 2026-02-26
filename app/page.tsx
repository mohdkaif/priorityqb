import Link from 'next/link';
import styles from './home.module.css';

export default function HomePage() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="container">
          <h1>Welcome to Priority QB Services</h1>
          <p>Simplifying your financial management with QuickBooks solutions.</p>
          <a href="#services" className="btn btn-light">
            Explore Services
          </a>
        </div>
      </section>

      <section id="services" className={`container my-5 ${styles.section}`}>
        <h2 className="text-center mb-4">Our Services</h2>
        <div className={styles.sectionTitleLine} />
        <p className={styles.sectionTitleSub}>
          Expert QuickBooks setup, bookkeeping, payroll, and support tailored to your business.
        </p>
        <div className={styles.servicesGrid}>
          <Link href="/services" className="text-decoration-none">
            <div className={styles.serviceCard}>
              <i className="fas fa-cogs" />
              <h3>QuickBooks Setup</h3>
              <p>Expert setup and customization for your business needs.</p>
            </div>
          </Link>
          <Link href="/quickbooks" className="text-decoration-none">
            <div className={styles.serviceCard}>
              <i className="fas fa-book" />
              <h3>Bookkeeping</h3>
              <p>Accurate and timely bookkeeping services.</p>
            </div>
          </Link>
          <Link href="/payroll" className="text-decoration-none">
            <div className={styles.serviceCard}>
              <i className="fas fa-money-check-alt" />
              <h3>Payroll Management</h3>
              <p>Seamless payroll integration and management.</p>
            </div>
          </Link>
          <Link href="/support" className="text-decoration-none">
            <div className={styles.serviceCard}>
              <i className="fas fa-tools" />
              <h3>Technical Support</h3>
              <p>Expert troubleshooting and support for QuickBooks.</p>
            </div>
          </Link>
          <Link href="/financial" className="text-decoration-none">
            <div className={styles.serviceCard}>
              <i className="fas fa-chart-line" />
              <h3>Financial Reporting</h3>
              <p>Comprehensive financial reporting and analysis.</p>
            </div>
          </Link>
        </div>
      </section>

      <section id="pricing" className={`container my-5 ${styles.section}`}>
        <h2 className="text-center mb-2">Our Pricing</h2>
        <div className={styles.sectionTitleLine} />
        <p className={styles.sectionTitleSub}>
          Simple annual pricing. Choose the plan that fits your business.
        </p>
        <div className={styles.pricingGrid}>
          <div className={styles.pricingCard}>
            <h3>QuickBooks Pro</h3>
            <div className={styles.originalPrice}>$843.70/year</div>
            <div className={styles.price}>$649/year</div>
            <div className={styles.discount}>Perfect for small businesses.</div>
            <button
              className="cta-button"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
            >
              Choose Plan
            </button>
          </div>
          <div className={styles.pricingCard}>
            <h3>QuickBooks Premier</h3>
            <div className={styles.originalPrice}>$1,233.70/year</div>
            <div className={styles.price}>$949/year</div>
            <div className={styles.discount}>Ideal for industry-specific needs.</div>
            <button
              className="cta-button"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
            >
              Choose Plan
            </button>
          </div>
          <div className={styles.pricingCard}>
            <h3>QuickBooks Enterprise</h3>
            <div className={styles.originalPrice}>$1,298.70/year</div>
            <div className={styles.price}>$999/year</div>
            <div className={styles.discount}>For growing businesses.</div>
            <button
              className="cta-button"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
            >
              Choose Plan
            </button>
          </div>
          <div className={styles.pricingCard}>
            <h3>QuickBooks Online</h3>
            <div className={styles.originalPrice}>$516.10/year</div>
            <div className={styles.price}>$397/year</div>
            <div className={styles.discount}>Cloud-based accounting.</div>
            <button
              className="cta-button"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
            >
              Choose Plan
            </button>
          </div>
        </div>
      </section>

      <section className={styles.testimonialSection}>
        <div className="container">
          <h2 className="text-center mb-2">What Our Clients Say</h2>
          <div className={styles.sectionTitleLine} />
          <p className={styles.sectionTitleSub}>
            Trusted by businesses for QuickBooks setup, bookkeeping, and support.
          </p>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <span className={styles.testimonialIcon} aria-hidden><i className="fas fa-user" /></span>
              <p>
                &quot;Priority QB Services transformed our financial management.
                Highly recommended!&quot;
              </p>
              <h4>John Doe</h4>
            </div>
            <div className={styles.testimonialCard}>
              <span className={styles.testimonialIcon} aria-hidden><i className="fas fa-user" /></span>
              <p>
                &quot;Their team is professional, efficient, and always available
                for support.&quot;
              </p>
              <h4>Jane Smith</h4>
            </div>
            <div className={styles.testimonialCard}>
              <span className={styles.testimonialIcon} aria-hidden><i className="fas fa-user" /></span>
              <p>
                &quot;The best QuickBooks service provider we&apos;ve ever worked
                with!&quot;
              </p>
              <h4>Mike Johnson</h4>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.statisticsSection}>
        <div className="container">
          <h2>Our Achievements</h2>
          <div className={styles.sectionTitleLine} />
          <div className={styles.statsGrid}>
            <div className={styles.statisticItem}>
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>
            <div className={styles.statisticItem}>
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>
            <div className={styles.statisticItem}>
              <h3>99%</h3>
              <p>Customer Satisfaction</p>
            </div>
            <div className={styles.statisticItem}>
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.contactSection}>
        <div className="container">
          <h2>Contact Us</h2>
          <p>Ready to simplify your accounting? Get in touch with us today!</p>
          <button
            className="cta-button"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#contactModal"
          >
            Contact Us Now
          </button>
        </div>
      </section>
    </>
  );
}
