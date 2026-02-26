'use client';

const PLACEHOLDER_PLANS = [
  { name: 'Bookkeeping', duration: 'Monthly', price: 'Contact for pricing', img: '/img/book.jpg' },
  { name: 'Payroll', duration: 'As needed', price: 'Contact for pricing', img: '/img/payroll.jpg' },
  { name: 'Technical Support', duration: 'As needed', price: 'Contact for pricing', img: '/img/support.jpg' },
];

export default function PricingPage() {
  return (
    <>
      <div className="pageHeader">
        <h1>Pricing</h1>
      </div>
      <section style={{ padding: '2rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: 1000, margin: '0 auto' }}>
            {PLACEHOLDER_PLANS.map((plan, i) => (
              <div key={i} style={{ background: 'var(--surface)', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)', textAlign: 'center' }}>
                <img src={plan.img} alt="" style={{ width: '100%', height: 180, objectFit: 'cover' }} />
                <div style={{ padding: '1.25rem' }}>
                  <h6 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.5rem' }}>{plan.name}</h6>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '0.25rem' }}>{plan.duration}</p>
                  <p style={{ fontWeight: 600, marginBottom: '1rem' }}>{plan.price}</p>
                  <button type="button" className="btnPrimary" data-bs-toggle="modal" data-bs-target="#contactModal">Contact Us</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
