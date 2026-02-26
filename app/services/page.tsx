import styles from '../services.module.css';

export const metadata = {
  title: 'Services - Priority QB Services',
};

export default function ServicesPage() {
  return (
    <main>
      <section className={styles.overviewSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            QuickBooks Setup and Customization
          </h2>
          <div className={styles.sectionTitleLine} />
          <p className={styles.sectionSubtitle}>
            Setting up QuickBooks correctly is crucial for maximizing its
            potential. At Priority QB Services, we provide expert QuickBooks
            setup and customization services tailored to your business needs.
            From initial configuration to advanced customization, we ensure your
            QuickBooks software is optimized for efficiency and productivity.
          </p>

          <div className={styles.servicesGridInner}>
            <div className={`${styles.serviceCard} text-center`}>
              <i className={`fas fa-cogs ${styles.serviceIcon}`} />
              <h3>Initial Setup & Configuration</h3>
              <p>
                We handle the complete setup of QuickBooks, including company
                file creation, chart of accounts setup, and preferences
                configuration.
              </p>
            </div>
            <div className={`${styles.serviceCard} text-center`}>
              <i className={`fas fa-tools ${styles.serviceIcon}`} />
              <h3>Customization for Your Business</h3>
              <p>
                We customize QuickBooks to match your business workflows,
                including custom fields, templates, and reports.
              </p>
            </div>
            <div className={`${styles.serviceCard} text-center`}>
              <i className={`fas fa-database ${styles.serviceIcon}`} />
              <h3>Data Migration</h3>
              <p>
                We assist in migrating your existing financial data to
                QuickBooks, ensuring accuracy and consistency.
              </p>
            </div>
            <div className={`${styles.serviceCard} text-center`}>
              <i className={`fas fa-users ${styles.serviceIcon}`} />
              <h3>User Training & Support</h3>
              <p>
                We provide training sessions to help your team get the most out
                of QuickBooks and offer ongoing support for any issues.
              </p>
            </div>
            <div className={`${styles.serviceCard} text-center`}>
              <i className={`fas fa-link ${styles.serviceIcon}`} />
              <h3>Integration with Other Tools</h3>
              <p>
                We integrate QuickBooks with third-party applications like CRM,
                payroll, and inventory management systems for seamless
                operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.whyChooseSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Why Choose Us?</h2>
          <div className={styles.sectionTitleLine} />
          <p className={styles.sectionSubtitle}>
            Here&apos;s why businesses trust Priority QB Services for their
            QuickBooks setup and customization needs:
          </p>
          <div>
              <ul className={styles.whyChooseList}>
                <li>
                  <i className="fas fa-check" />
                  <strong>QuickBooks Experts:</strong> Our team has extensive
                  experience in QuickBooks setup and customization.
                </li>
                <li>
                  <i className="fas fa-check" />
                  <strong>Tailored Solutions:</strong> We customize QuickBooks to
                  fit your unique business needs.
                </li>
                <li>
                  <i className="fas fa-check" />
                  <strong>Efficient Data Migration:</strong> We ensure a smooth
                  transition of your data to QuickBooks.
                </li>
                <li>
                  <i className="fas fa-check" />
                  <strong>Ongoing Support:</strong> We provide training and
                  support to help you make the most of QuickBooks.
                </li>
              </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
