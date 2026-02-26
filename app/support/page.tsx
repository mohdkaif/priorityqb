import styles from '../services.module.css';

export const metadata = {
  title: 'Support - Priority QB Services',
};

export default function SupportPage() {
  return (
    <main>
      <section className={styles.overviewSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Technical Support</h2>
          <div className={styles.sectionTitleLine} />
          <p className={styles.sectionSubtitle}>
            Our technical support team is here to help you with all your
            QuickBooks-related issues. Whether you&apos;re facing software
            glitches, installation problems, or need assistance with advanced
            features, we&apos;ve got you covered.
          </p>

          <div className={styles.servicesGridInner}>
            <div className={`${styles.serviceCard} text-center`}>
              <i className={`fas fa-download ${styles.serviceIcon}`} />
              <h3>QuickBooks Installation & Setup</h3>
              <p>
                We provide expert assistance with QuickBooks installation and
                setup to ensure your software is ready to use.
              </p>
            </div>
            <div className={`${styles.serviceCard} text-center`}>
              <i className={`fas fa-tools ${styles.serviceIcon}`} />
              <h3>Software Troubleshooting & Error Resolution</h3>
              <p>
                We diagnose and resolve software glitches and errors to keep
                your QuickBooks running smoothly.
              </p>
            </div>
            <div className={`${styles.serviceCard} text-center`}>
              <i className={`fas fa-database ${styles.serviceIcon}`} />
              <h3>Data Backup & Recovery</h3>
              <p>
                We ensure your data is securely backed up and can be recovered
                in case of any loss or corruption.
              </p>
            </div>
            <div className={`${styles.serviceCard} text-center`}>
              <i className={`fas fa-link ${styles.serviceIcon}`} />
              <h3>Integration with Third-Party Applications</h3>
              <p>
                We help integrate QuickBooks with other software and
                applications for seamless data flow.
              </p>
            </div>
            <div className={`${styles.serviceCard} text-center`}>
              <i className={`fas fa-headset ${styles.serviceIcon}`} />
              <h3>24/7 Customer Support</h3>
              <p>
                Our team is available round the clock to assist you with any
                QuickBooks-related issues.
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
            technical support needs:
          </p>
          <div>
            <ul className={styles.whyChooseList}>
                <li>
                  <i className="fas fa-check" />
                  <strong>Expert Technicians:</strong> Our team specializes in
                  QuickBooks troubleshooting and support.
                </li>
                <li>
                  <i className="fas fa-check" />
                  <strong>Fast & Reliable:</strong> We provide quick and
                  efficient solutions to minimize downtime.
                </li>
                <li>
                  <i className="fas fa-check" />
                  <strong>24/7 Availability:</strong> Our support team is
                  available round the clock to assist you.
                </li>
                <li>
                  <i className="fas fa-check" />
                  <strong>Proactive Solutions:</strong> We help prevent issues
                  before they arise with proactive monitoring and support.
                </li>
              </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
