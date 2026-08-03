'use client';

import PageHero from '@/components/PageHero';
import styles from '../services.module.css';

const PLANS = [
  { name: 'QuickBooks Pro', original: '$843.70/year', price: '$649/year', note: 'Perfect for small businesses.' },
  { name: 'QuickBooks Premier', original: '$1,233.70/year', price: '$949/year', note: 'Ideal for industry-specific needs.' },
  { name: 'QuickBooks Enterprise', original: '$1,298.70/year', price: '$999/year', note: 'For growing businesses.' },
  { name: 'QuickBooks Online', original: '$516.10/year', price: '$397/year', note: 'Cloud-based accounting.' },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple annual pricing"
        description="Choose the plan that fits your business. Get Live Expert Assisted FREE for 30 days."
      />
      <section className={styles.wrap}>
        <div className={styles.inner}>
          <div className={styles.head}>
            <p className={styles.eyebrow}>Plans</p>
            <h2>Our Pricing</h2>
            <p>Transparent yearly rates — pick a plan and we&apos;ll get you set up.</p>
          </div>
          <div className={styles.pricingGrid}>
            {PLANS.map((plan) => (
              <div key={plan.name} className={styles.pricingCard}>
                <h3>{plan.name}</h3>
                <div className={styles.originalPrice}>{plan.original}</div>
                <div className={styles.price}>{plan.price}</div>
                <p className={styles.discount}>{plan.note}</p>
                <button
                  type="button"
                  className="btn btnPrimary"
                  data-bs-toggle="modal"
                  data-bs-target="#contactModal"
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
