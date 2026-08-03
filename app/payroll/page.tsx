import Link from 'next/link';
import PageHero from '@/components/PageHero';
import styles from '../services.module.css';

export const metadata = { title: 'Payroll - Priority QB Services' };

const CARDS = [
  { icon: 'fa-cogs', title: 'Seamless Payroll Setup', text: 'We help you set up payroll in QuickBooks, ensuring proper tax configurations, employee classifications, and direct deposit setup.' },
  { icon: 'fa-robot', title: 'Automated Payroll Processing', text: 'Say goodbye to manual calculations! We automate payroll, reducing errors and saving you time.' },
  { icon: 'fa-file-invoice-dollar', title: 'Tax Compliance & Filing', text: 'We ensure payroll tax calculations, filings, and payments are accurate and on time, keeping you compliant with IRS and state regulations.' },
  { icon: 'fa-hand-holding-heart', title: 'Employee Benefits & Deductions', text: 'We configure employee benefits, retirement contributions, and deductions to reflect correctly in payroll reports.' },
  { icon: 'fa-tools', title: 'Payroll Troubleshooting & Support', text: 'Experiencing payroll issues in QuickBooks? Our experts provide ongoing support and troubleshooting to resolve errors quickly.' },
];

export default function PayrollPage() {
  return (
    <>
      <PageHero eyebrow="Payroll" title="Payroll Integration & Management" description="We make payroll simple and stress-free — integrating and managing payroll within QuickBooks with accuracy and compliance." />
      <section className={styles.wrap}>
        <div className={styles.inner}>
          <div className={styles.head}>
            <p className={styles.eyebrow}>Capabilities</p>
            <h2>Payroll that runs smoothly</h2>
            <p>Managing payroll can be time-consuming and complex. We specialize in integrating and managing payroll within QuickBooks for your business.</p>
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
            <p>Here&apos;s why businesses trust Priority QB Services for payroll.</p>
          </div>
          <ul className={styles.whyList}>
            <li><i className="fas fa-check-circle" /><span><strong>QuickBooks Experts:</strong> We specialize in QuickBooks payroll integration and optimization.</span></li>
            <li><i className="fas fa-check-circle" /><span><strong>Time-Saving Solutions:</strong> We handle the complexities so you can focus on running your business.</span></li>
            <li><i className="fas fa-check-circle" /><span><strong>Error-Free Payroll Processing:</strong> Minimize mistakes and ensure your employees are paid accurately and on time.</span></li>
            <li><i className="fas fa-check-circle" /><span><strong>Customized Payroll Management:</strong> We tailor payroll solutions to fit your business needs.</span></li>
          </ul>
          <div className={styles.ctaRow}>
            <Link href="/contact" className="btn btnPrimary">Start payroll setup</Link>
            <Link href="/support" className="btn btnOutline">Get support</Link>
          </div>
        </div>
      </section>
    </>
  );
}
