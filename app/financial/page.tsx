import Link from 'next/link';
import PageHero from '@/components/PageHero';
import styles from '../services.module.css';

export const metadata = { title: 'Financial Reporting - Priority QB Services' };

const CARDS = [
  { icon: 'fa-file-invoice', title: 'Custom Financial Reports', text: 'We generate and customize financial reports, including profit & loss statements, balance sheets, cash flow statements, and more.' },
  { icon: 'fa-chart-line', title: 'Performance Analysis', text: "Get deep insights into your company's financial health with trend analysis, budget comparisons, and forecasting." },
  { icon: 'fa-tachometer-alt', title: 'KPI Tracking & Dashboards', text: 'We set up key performance indicators (KPIs) and interactive dashboards to help you monitor critical business metrics in real time.' },
  { icon: 'fa-coins', title: 'Cash Flow Management', text: 'Understand your cash flow better with detailed reports that help you plan for future expenses and investments.' },
  { icon: 'fa-check-double', title: 'Audit-Ready Financials', text: 'We ensure your books are accurate, organized, and compliant with financial regulations, making audits and tax filings hassle-free.' },
];

export default function FinancialPage() {
  return (
    <>
      <PageHero eyebrow="Reporting" title="Financial Reporting & Analysis" description="Clear, accurate, and actionable insights from QuickBooks so you can drive your business forward." />
      <section className={styles.wrap}>
        <div className={styles.inner}>
          <div className={styles.head}>
            <p className={styles.eyebrow}>Insights</p>
            <h2>Reports that drive decisions</h2>
            <p>Accurate financial reporting is essential for making informed business decisions. We help you maximize the power of QuickBooks.</p>
          </div>
          <div className={styles.grid}>
            {CARDS.map((c) => (
              <div key={c.title} className={styles.card}>
                <div className={styles.icon}><i className={`fas ${c.icon}`} /></div>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.wrapAlt}>
        <div className={styles.inner}>
          <div className={styles.head}>
            <p className={styles.eyebrow}>Why us</p>
            <h2>Why Choose Us?</h2>
            <p>Here&apos;s why businesses trust Priority QB Services for financial reporting and analysis.</p>
          </div>
          <ul className={styles.whyList}>
            <li><i className="fas fa-check-circle" /><span><strong>QuickBooks Expertise:</strong> We specialize in leveraging QuickBooks to generate powerful financial insights.</span></li>
            <li><i className="fas fa-check-circle" /><span><strong>Data-Driven Decision Making:</strong> Our reports help you make informed business decisions with confidence.</span></li>
            <li><i className="fas fa-check-circle" /><span><strong>Customized Solutions:</strong> We tailor financial reports to your business needs for better clarity and efficiency.</span></li>
            <li><i className="fas fa-check-circle" /><span><strong>Error-Free & Compliant Reporting:</strong> Minimize reporting errors and maintain compliance with financial standards.</span></li>
          </ul>
          <div className={styles.ctaRow}>
            <Link href="/contact" className="btn btnPrimary">Request a report consult</Link>
            <Link href="/pricing" className="btn btnOutline">See pricing</Link>
          </div>
        </div>
      </section>
    </>
  );
}
