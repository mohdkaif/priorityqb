import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import styles from '../services.module.css';

export const metadata = { title: 'Contact - Priority QB Services' };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about your books"
        description="Ready to simplify your accounting? Send a message and we’ll get back to you soon."
      />
      <section className={styles.wrap}>
        <div className={styles.inner}>
          <div className={styles.contactWrap}>
            <div className={styles.contactIntro}>
              <h2>Contact Us</h2>
              <p>Tell us about your QuickBooks needs — setup, bookkeeping, payroll, or support.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
