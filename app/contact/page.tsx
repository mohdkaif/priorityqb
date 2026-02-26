import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  ssr: false,
  loading: () => <div style={{ minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>Loading form...</div>,
});

export const metadata = { title: 'Contact Us - Uniqonic Revolutions' };

export default function ContactPage() {
  return (
    <>
      <div className="pageHeader">
        <h1>Contact</h1>
      </div>
      <section style={{ padding: '2rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 2rem' }}>
            <h6 style={{ color: 'var(--primary)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem' }}>Contact Us</h6>
            <h2 style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', marginBottom: '1rem' }}>If You Have Any Query, Please Feel Free Contact Us</h2>
            <p><a href="mailto:care@uniqonicrevolutions.com" style={{ fontSize: '1.25rem', fontWeight: 600 }}>care@uniqonicrevolutions.com</a></p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
