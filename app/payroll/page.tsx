import styles from '../services.module.css';

export const metadata = {
  title: 'Payroll - Priority QB Services',
};

export default function PayrollPage() {
  return (
    <main>
      <section className={styles.overviewSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            Payroll Integration & Management
          </h2>
          <div className={styles.sectionTitleLine} />
          <p className={styles.sectionSubtitle}>
            Managing payroll can be time-consuming and complex, but with
            Priority QB Services, we make it simple and stress-free. Our team
            specializes in integrating and managing payroll within QuickBooks,
            ensuring accuracy, compliance, and efficiency for your business.
          </p>

          <div className={styles.servicesGridInner}>
            <div className={`${styles.serviceCard} text-center`}>
              <i className={`fas fa-cogs ${styles.serviceIcon}`} />
              <h3>Seamless Payroll Setup</h3>
              <p>
                We help you set up payroll in QuickBooks, ensuring proper tax
                configurations, employee classifications, and direct deposit
                setup.
              </p>
            </div>
            <div className={`${styles.serviceCard} text-center`}>
              <i className={`fas fa-robot ${styles.serviceIcon}`} />
              <h3>Automated Payroll Processing</h3>
              <p>
                Say goodbye to manual calculations! We automate payroll,
                reducing errors and saving you time.
              </p>
            </div>
            <div className={`${styles.serviceCard} text-center`}>
              <i className={`fas fa-file-invoice-dollar ${styles.serviceIcon}`} />
              <h3>Tax Compliance & Filing</h3>
              <p>
                We ensure payroll tax calculations, filings, and payments are
                accurate and on time, keeping you compliant with IRS and state
                regulations.
              </p>
            </div>
            <div className={`${styles.serviceCard} text-center`}>
              <i className={`fas fa-hand-holding-heart ${styles.serviceIcon}`} />
              <h3>Employee Benefits & Deductions</h3>
              <p>
                We configure employee benefits, retirement contributions, and
                deductions to reflect correctly in payroll reports.
              </p>
            </div>
            <div className={`${styles.serviceCard} text-center`}>
              <i className={`fas fa-tools ${styles.serviceIcon}`} />
              <h3>Payroll Troubleshooting & Support</h3>
              <p>
                Experiencing payroll issues in QuickBooks? Our experts provide
                ongoing support and troubleshooting to resolve errors quickly.
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
            payroll needs:
          </p>
          <div>
            <ul className={styles.whyChooseList}>
                <li>
                  <i className="fas fa-check" />
                  <strong>QuickBooks Experts:</strong> We specialize in
                  QuickBooks payroll integration and optimization.
                </li>
                <li>
                  <i className="fas fa-check" />
                  <strong>Time-Saving Solutions:</strong> We handle the
                  complexities, so you can focus on running your business.
                </li>
                <li>
                  <i className="fas fa-check" />
                  <strong>Error-Free Payroll Processing:</strong> Minimize
                  mistakes and ensure your employees are paid accurately and on
                  time.
                </li>
                <li>
                  <i className="fas fa-check" />
                  <strong>Customized Payroll Management:</strong> We tailor
                  payroll solutions to fit your business needs.
                </li>
              </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
