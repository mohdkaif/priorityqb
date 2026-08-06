import Link from 'next/link';
import PageHero from '@/components/PageHero';
import EnquireButton from '@/components/EnquireButton';
import styles from '../services.module.css';

export const metadata = { title: 'Technical Support - Priority QB Services' };

const CARDS = [
  { icon: 'fa-download', title: 'QuickBooks Installation & Setup', text: 'We provide expert assistance with QuickBooks installation and setup to ensure your software is ready to use.' },
  { icon: 'fa-tools', title: 'Software Troubleshooting & Error Resolution', text: 'We diagnose and resolve software glitches and errors to keep your QuickBooks running smoothly.' },
  { icon: 'fa-database', title: 'Data Backup & Recovery', text: 'We ensure your data is securely backed up and can be recovered in case of any loss or corruption.' },
  { icon: 'fa-link', title: 'Integration with Third-Party Applications', text: 'We help integrate QuickBooks with other software and applications for seamless data flow.' },
  { icon: 'fa-headset', title: '24/7 Customer Support', text: 'Our team is available round the clock to assist you with any QuickBooks-related issues.' },
];

export default function SupportPage() {
  return (
    <>
      <PageHero eyebrow="Support" title="Technical Support" description="Help with software glitches, installation problems, and advanced QuickBooks features — whenever you need it." />
      <section className={styles.wrap}>
        <div className={styles.inner}>
          <div className={styles.head}>
            <p className={styles.eyebrow}>Support desk</p>
            <h2>We&apos;ve got you covered</h2>
            <p>Our technical support team is here to help with all your QuickBooks-related issues, from install to recovery.</p>
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
            <p>Here&apos;s why businesses trust Priority QB Services for technical support.</p>
          </div>
          <ul className={styles.whyList}>
            <li><i className="fas fa-check-circle" /><span><strong>Expert Technicians:</strong> Our team specializes in QuickBooks troubleshooting and support.</span></li>
            <li><i className="fas fa-check-circle" /><span><strong>Fast & Reliable:</strong> We provide quick and efficient solutions to minimize downtime.</span></li>
            <li><i className="fas fa-check-circle" /><span><strong>24/7 Availability:</strong> Our support team is available round the clock to assist you.</span></li>
            <li><i className="fas fa-check-circle" /><span><strong>Proactive Solutions:</strong> We help prevent issues before they arise with proactive monitoring and support.</span></li>
          </ul>
          <div className={styles.ctaRow}>
            <EnquireButton label="Request support" />
            <Link href="/financial" className="btn btnOutline">Financial reporting</Link>
          </div>
        </div>
      </section>
    </>
  );
}
