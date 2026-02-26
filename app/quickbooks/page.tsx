import styles from '../services.module.css';

export const metadata = {
  title: 'Bookkeeping - Priority QB Services',
};

export default function QuickbooksPage() {
  return (
    <main>
      <section className={styles.overviewSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            Bookkeeping & Accounting
          </h2>
          <div className={styles.sectionTitleLine} />
          <p className={styles.sectionSubtitle}>
            At Priority QB Services, we offer comprehensive bookkeeping and
            accounting services tailored to your business needs. Our team of
            experts ensures that your financial records are accurate,
            up-to-date, and compliant with all regulations.
          </p>

          <div className={styles.servicesGridInner}>
            <div className={`${styles.serviceCard} text-center`}>
              <i className={`fas fa-book ${styles.serviceIcon}`} />
              <h3>Daily, Weekly, or Monthly Bookkeeping</h3>
              <p>
                We provide flexible bookkeeping services to suit your business
                needs, ensuring your financial records are always up-to-date.
              </p>
            </div>
            <div className={`${styles.serviceCard} text-center`}>
              <i className={`fas fa-file-alt ${styles.serviceIcon}`} />
              <h3>Financial Statement Preparation</h3>
              <p>
                We prepare accurate financial statements, including balance
                sheets, income statements, and cash flow statements.
              </p>
            </div>
            <div className={`${styles.serviceCard} text-center`}>
              <i className={`fas fa-hand-holding-usd ${styles.serviceIcon}`} />
              <h3>Accounts Payable & Receivable Management</h3>
              <p>
                We manage your accounts payable and receivable to ensure
                timely payments and healthy cash flow.
              </p>
            </div>
            <div className={`${styles.serviceCard} text-center`}>
              <i className={`fas fa-university ${styles.serviceIcon}`} />
              <h3>Bank & Credit Card Reconciliation</h3>
              <p>
                We reconcile your bank and credit card statements to ensure
                accuracy and identify discrepancies.
              </p>
            </div>
            <div className={`${styles.serviceCard} text-center`}>
              <i className={`fas fa-file-invoice-dollar ${styles.serviceIcon}`} />
              <h3>Tax Preparation & Filing Support</h3>
              <p>
                We provide expert support for tax preparation and filing,
                ensuring compliance with all regulations.
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
            bookkeeping and accounting needs:
          </p>
          <div>
            <ul className={styles.whyChooseList}>
                <li>
                  <i className="fas fa-check" />
                  <strong>Expert Bookkeepers:</strong> Our team specializes in
                  accurate and efficient bookkeeping.
                </li>
                <li>
                  <i className="fas fa-check" />
                  <strong>Customized Solutions:</strong> We tailor our services
                  to fit your business needs.
                </li>
                <li>
                  <i className="fas fa-check" />
                  <strong>Compliance Assurance:</strong> We ensure your
                  financial records are compliant with all regulations.
                </li>
                <li>
                  <i className="fas fa-check" />
                  <strong>Time-Saving:</strong> Let us handle the numbers so you
                  can focus on growing your business.
                </li>
              </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
