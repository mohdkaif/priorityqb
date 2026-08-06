import Link from 'next/link';
import PageHero from '@/components/PageHero';
import EnquireButton from '@/components/EnquireButton';
import styles from '../services.module.css';

export const metadata = {
  title: 'QuickBooks Setup - Priority QB Services',
};

const CARDS = [
  {
    icon: 'fa-cogs',
    title: 'Initial Setup & Configuration',
    text: 'We handle the complete setup of QuickBooks, including company file creation, chart of accounts setup, and preferences configuration.',
  },
  {
    icon: 'fa-tools',
    title: 'Customization for Your Business',
    text: 'We customize QuickBooks to match your business workflows, including custom fields, templates, and reports.',
  },
  {
    icon: 'fa-database',
    title: 'Data Migration',
    text: 'We assist in migrating your existing financial data to QuickBooks, ensuring accuracy and consistency.',
  },
  {
    icon: 'fa-users',
    title: 'User Training & Support',
    text: 'We provide training sessions to help your team get the most out of QuickBooks and offer ongoing support for any issues.',
  },
  {
    icon: 'fa-link',
    title: 'Integration with Other Tools',
    text: 'We integrate QuickBooks with third-party applications like CRM, payroll, and inventory management systems for seamless operations.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="QuickBooks Setup and Customization"
        description="Setting up QuickBooks correctly is crucial for maximizing its potential. We tailor setup and customization to your business needs."
      />
      <section className={styles.wrap}>
        <div className={styles.inner}>
          <div className={styles.mediaStrip}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
              alt="Business analytics dashboard for QuickBooks setup"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
              alt="Team collaborating on accounting workflows"
            />
          </div>
          <div className={styles.head}>
            <p className={styles.eyebrow}>What&apos;s included</p>
            <h2>How we set you up for success</h2>
            <p>
              From initial configuration to advanced customization, we ensure your
              QuickBooks software is optimized for efficiency and productivity.
            </p>
          </div>
          <div className={styles.grid}>
            {CARDS.map((c) => (
              <div key={c.title} className={styles.card}>
                <div className={styles.icon}>
                  <i className={`fas ${c.icon}`} />
                </div>
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
            <p>Here&apos;s why businesses trust Priority QB Services for QuickBooks setup and customization.</p>
          </div>
          <ul className={styles.whyList}>
            <li>
              <i className="fas fa-check-circle" />
              <span>
                <strong>QuickBooks Experts:</strong> Our team has extensive experience in QuickBooks setup and customization.
              </span>
            </li>
            <li>
              <i className="fas fa-check-circle" />
              <span>
                <strong>Tailored Solutions:</strong> We customize QuickBooks to fit your unique business needs.
              </span>
            </li>
            <li>
              <i className="fas fa-check-circle" />
              <span>
                <strong>Efficient Data Migration:</strong> We ensure a smooth transition of your data to QuickBooks.
              </span>
            </li>
            <li>
              <i className="fas fa-check-circle" />
              <span>
                <strong>Ongoing Support:</strong> We provide training and support to help you make the most of QuickBooks.
              </span>
            </li>
          </ul>
          <div className={styles.ctaRow}>
            <EnquireButton label="Get a quote" />
            <Link href="/pricing" className="btn btnOutline">
              View pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
