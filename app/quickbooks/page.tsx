import Link from 'next/link';
import PageHero from '@/components/PageHero';
import styles from '../services.module.css';

export const metadata = { title: 'Bookkeeping - Priority QB Services' };

const CARDS = [
  { icon: 'fa-book', title: 'Daily, Weekly, or Monthly Bookkeeping', text: 'We provide flexible bookkeeping services to suit your business needs, ensuring your financial records are always up-to-date.' },
  { icon: 'fa-file-alt', title: 'Financial Statement Preparation', text: 'We prepare accurate financial statements, including balance sheets, income statements, and cash flow statements.' },
  { icon: 'fa-hand-holding-usd', title: 'Accounts Payable & Receivable Management', text: 'We manage your accounts payable and receivable to ensure timely payments and healthy cash flow.' },
  { icon: 'fa-university', title: 'Bank & Credit Card Reconciliation', text: 'We reconcile your bank and credit card statements to ensure accuracy and identify discrepancies.' },
  { icon: 'fa-file-invoice-dollar', title: 'Tax Preparation & Filing Support', text: 'We provide expert support for tax preparation and filing, ensuring compliance with all regulations.' },
];

export default function QuickbooksPage() {
  return (
    <>
      <PageHero eyebrow="Bookkeeping" title="Bookkeeping & Accounting" description="Comprehensive bookkeeping and accounting tailored to your business — accurate, up-to-date, and compliant." />
      <section className={styles.wrap}>
        <div className={styles.inner}>
          <div className={styles.head}>
            <p className={styles.eyebrow}>Services</p>
            <h2>Keep your books in shape</h2>
            <p>Our team of experts ensures that your financial records are accurate, up-to-date, and compliant with all regulations.</p>
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
            <p>Here&apos;s why businesses trust Priority QB Services for bookkeeping and accounting.</p>
          </div>
          <ul className={styles.whyList}>
            <li><i className="fas fa-check-circle" /><span><strong>Expert Bookkeepers:</strong> Our team specializes in accurate and efficient bookkeeping.</span></li>
            <li><i className="fas fa-check-circle" /><span><strong>Customized Solutions:</strong> We tailor our services to fit your business needs.</span></li>
            <li><i className="fas fa-check-circle" /><span><strong>Compliance Assurance:</strong> We ensure your financial records are compliant with all regulations.</span></li>
            <li><i className="fas fa-check-circle" /><span><strong>Time-Saving:</strong> Let us handle the numbers so you can focus on growing your business.</span></li>
          </ul>
          <div className={styles.ctaRow}>
            <Link href="/contact" className="btn btnPrimary">Talk to us</Link>
            <Link href="/services" className="btn btnOutline">QB Setup</Link>
          </div>
        </div>
      </section>
    </>
  );
}
