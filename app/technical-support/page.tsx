import Link from 'next/link';
import styles from '../service.module.css';

export const metadata = { title: 'Technical Support - Uniqonic Revolutions' };

const SECTIONS = [
  {
    title: 'Track income & expenses',
    subtitle: 'Where your money is going?',
    points: [
      'Connect your bank and credit card to automatically download transactions.',
      'Easily import previous financial data from Excel and other programs.',
      'Organize everything in one place with Customer, Vendor, and Employee Centers.',
    ],
    img: '/img/technical/income.png',
  },
  {
    title: 'Invoicing',
    subtitle: 'Look professional and get paid faster',
    points: [
      'Create professional estimates, invoices, and payment receipts.',
      'Invoice for services, goods, and for billable time and expenses.',
      'Accept payments right from your invoices and send automatic reminders.',
      'Get real-time visibility of invoice statuses.',
    ],
    img: '/img/technical/invoice.png',
  },
  {
    title: 'Run reports',
    subtitle: 'Better decisions with smart insights',
    points: [
      'Stay ready for tax time with reliable reports.',
      'Schedule automatic reporting including profit & loss, expenses, and balance sheets.',
      'Create your own custom reports from any data set.',
    ],
    img: '/img/technical/report.png',
  },
  {
    title: 'Track sales tax',
    subtitle: 'Stay on top of sales tax',
    points: [
      'Define which customers and products are taxable.',
      'Track sales tax automatically throughout the month.',
      'Run sales tax liability reports so you know exactly what you owe.',
    ],
    img: '/img/technical/track.png',
  },
  {
    title: 'Manage bills & accounts payable',
    subtitle: 'Know what you owe',
    points: [
      'Clearly track bills and purchase orders in one place.',
      'Maintain cash flow and easily take action on unpaid bills.',
      'Take early pay discounts automatically.',
      'View unpaid bills from a vendor to easily manage payments.',
    ],
    img: '/img/technical/account-payble.png',
  },
];

export default function TechnicalSupportPage() {
  return (
    <>
      <div className="pageHeader">
        <h1>Technical Support</h1>
      </div>
      <section className={styles.serviceSection}>
        <div className="container">
          {SECTIONS.map((sec, i) => (
            <div key={i} className={styles.block}>
              <h3 className={styles.blockTitle}>{sec.title}</h3>
              <div className={styles.blockGrid}>
                <div>
                  <h4 className={styles.blockSubtitle}>{sec.subtitle}</h4>
                  <ul className={styles.list}>
                    {sec.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.blockImg}>
                  <img src={sec.img} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
