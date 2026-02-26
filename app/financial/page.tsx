import styles from '../services.module.css';

export const metadata = {
  title: 'Financial Reporting - Priority QB Services',
};

export default function FinancialPage() {
  return (
    <main>
      <section className={styles.overviewSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            Financial Reporting & Analysis in QuickBooks
          </h2>
          <div className={styles.sectionTitleLine} />
          <p className={styles.sectionSubtitle}>
            Accurate financial reporting is essential for making informed
            business decisions. At Priority QB Services, we help businesses
            maximize the power of QuickBooks by providing expert financial
            reporting and analysis services. Our solutions ensure that you have
            clear, accurate, and actionable insights to drive your business
            forward.
          </p>

          <div className={styles.servicesGridInner}>
            <div className={`${styles.serviceCard} text-center`}>
              <i className={`fas fa-file-invoice ${styles.serviceIcon}`} />
              <h3>Custom Financial Reports</h3>
              <p>
                We generate and customize financial reports, including profit
                & loss statements, balance sheets, cash flow statements, and
                more.
              </p>
            </div>
            <div className={`${styles.serviceCard} text-center`}>
              <i className={`fas fa-chart-line ${styles.serviceIcon}`} />
              <h3>Performance Analysis</h3>
              <p>
                Get deep insights into your company&apos;s financial health with
                trend analysis, budget comparisons, and forecasting.
              </p>
            </div>
            <div className={`${styles.serviceCard} text-center`}>
              <i className={`fas fa-tachometer-alt ${styles.serviceIcon}`} />
              <h3>KPI Tracking & Dashboards</h3>
              <p>
                We set up key performance indicators (KPIs) and interactive
                dashboards to help you monitor critical business metrics in
                real time.
              </p>
            </div>
            <div className={`${styles.serviceCard} text-center`}>
              <i className={`fas fa-coins ${styles.serviceIcon}`} />
              <h3>Cash Flow Management</h3>
              <p>
                Understand your cash flow better with detailed reports that
                help you plan for future expenses and investments.
              </p>
            </div>
            <div className={`${styles.serviceCard} text-center`}>
              <i className={`fas fa-check-double ${styles.serviceIcon}`} />
              <h3>Audit-Ready Financials</h3>
              <p>
                We ensure your books are accurate, organized, and compliant
                with financial regulations, making audits and tax filings
                hassle-free.
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
            financial reporting and analysis needs:
          </p>
          <div>
            <ul className={styles.whyChooseList}>
                <li>
                  <i className="fas fa-check" />
                  <strong>QuickBooks Expertise:</strong> We specialize in
                  leveraging QuickBooks to generate powerful financial insights.
                </li>
                <li>
                  <i className="fas fa-check" />
                  <strong>Data-Driven Decision Making:</strong> Our reports help
                  you make informed business decisions with confidence.
                </li>
                <li>
                  <i className="fas fa-check" />
                  <strong>Customized Solutions:</strong> We tailor financial
                  reports to your business needs for better clarity and
                  efficiency.
                </li>
                <li>
                  <i className="fas fa-check" />
                  <strong>Error-Free & Compliant Reporting:</strong> Minimize
                  reporting errors and maintain compliance with financial
                  standards.
                </li>
              </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
