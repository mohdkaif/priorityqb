import Link from 'next/link';

export const metadata = { title: 'Security - Uniqonic Revolutions' };

export default function SecurityPage() {
  return (
    <>
      <div className="pageHeader">
        <h1>Security</h1>
      </div>
      <section style={{ padding: '2rem 0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: 'var(--primary)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Compliance with Legal Obligations</h2>
            <p style={{ color: 'var(--text)', lineHeight: 1.7 }}>
              We may disclose your Information where we are legally required to do so in order to comply with applicable laws, governmental requests, judicial proceedings, court orders, or legal processes, such as in response to a court order or a subpoena (including in response to requests from public authorities in order to meet national security or law enforcement requirements).
            </p>
          </div>
          <div style={{ marginBottom: '2rem', background: 'var(--surface-2)', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
            <h2 style={{ color: 'var(--primary)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Third Party Websites</h2>
            <p style={{ color: 'var(--text)', lineHeight: 1.7 }}>
              We are not responsible for the safety of any Information that you share with third party providers who feature or advertise, but are not affiliated with, our services. The platform may feature links to third party websites or social media channels. We cannot guarantee the safety and privacy of data you provide to any third parties.
            </p>
          </div>
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ color: 'var(--primary)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>How Do We Keep Your Information Safe?</h2>
            <p style={{ color: 'var(--text)', lineHeight: 1.7 }}>
              We have implemented appropriate technical and organisational security measures designed to protect the security of any Information we process. We store your personal data on secure servers. However, we cannot guarantee that the Internet itself is 100% secure. Transmission of personal Information is therefore at your own risk.
            </p>
          </div>
          <div style={{ marginBottom: '2rem', background: 'var(--surface-2)', padding: '1.5rem', borderRadius: 'var(--radius)' }}>
            <h2 style={{ color: 'var(--primary)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Your Consent &amp; Privacy Rights</h2>
            <p style={{ color: 'var(--text)', lineHeight: 1.7 }}>
              You may withdraw consent at any time by emailing <Link href="mailto:care@uniqonicrevolutions.com">care@uniqonicrevolutions.com</Link>. You have the right to access, correct, or request erasure of your Information. To exercise any of your rights, contact us via <Link href="mailto:care@uniqonicrevolutions.com">care@uniqonicrevolutions.com</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
