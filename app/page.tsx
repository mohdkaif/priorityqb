'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './home.module.css';

const SLIDES = [
  { src: '/img/slider/carousel-1.jpg', title: 'Manage your Accounting & Bookkeeping with Ease' },
  { src: '/img/slider/carousel-2.jpg', title: 'Manage your Accounting & Bookkeeping with Ease' },
  { src: '/img/slider/carousel-3.jpg', title: 'Manage your Accounting & Bookkeeping with Ease' },
];

const PARTNERSHIPS = [
  '/img/Partnerships/Intuit Quickbooks.png',
  '/img/Partnerships/bill.png',
  '/img/Partnerships/Intuit Proconnect.png',
  '/img/Partnerships/stripe.png',
  '/img/Partnerships/square.png',
  '/img/Partnerships/shopify.png',
  '/img/Partnerships/paypal.png',
];

const TESTIMONIALS = [
  { name: 'Client One', message: 'Uniqonic Revolutions provided excellent bookkeeping support. Highly professional and responsive.' },
  { name: 'Client Two', message: 'Their technical support team resolved our QuickBooks issues quickly. Great service!' },
  { name: 'Client Three', message: 'We rely on them for payroll and accounting. Cost-effective and reliable.' },
];

export default function HomePage() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* Hero Carousel */}
      <section className={styles.hero}>
        <div className={styles.carousel}>
          {SLIDES.map((item, i) => (
            <div
              key={i}
              className={styles.carouselSlide}
              style={{ opacity: slide === i ? 1 : 0 }}
            >
              <img src={item.src} alt="" />
              <div className={styles.carouselCaption}>
                <h1>{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.carouselDots}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              className={slide === i ? styles.dotActive : ''}
              onClick={() => setSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Facts - 4 cards */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.factsGrid}>
            <Link href="/bookkeeping-and-accounting" className={styles.factCard}>
              <img src="/img/Bookkeeping.png" alt="Bookkeeping & Accounting" />
              <h5>Bookkeeping & Accounting</h5>
            </Link>
            <div className={styles.factCard}>
              <img src="/img/Remote-Staffing.png" alt="Remote-Staffing" />
              <h5>Remote-Staffing</h5>
            </div>
            <div className={styles.factCard}>
              <img src="/img/Qualified-Experienced-Staff.png" alt="Qualified Experienced Staff" />
              <h5>Qualified Experienced Staff</h5>
            </div>
            <Link href="/payroll-service" className={styles.factCard}>
              <img src="/img/Payroll Service.png" alt="Payroll Service" />
              <h5>Payroll Service</h5>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do - 3 services */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h6 className={styles.sectionLabel}>WHAT WE DO</h6>
            <h2>We have a dedicated team of professionals to provide cost effective accounting solutions.</h2>
          </div>
          <div className={styles.servicesGrid}>
            <Link href="/technical-support" className={styles.serviceCard}>
              <img src="/img/john-schnobrich-FlPc9_VocJ4-unsplash.jpg" alt="Technical Support" />
              <h4>Technical Support</h4>
            </Link>
            <Link href="/payroll-service" className={styles.serviceCard}>
              <img src="/img/Payroll Service.jpg" alt="Payroll Service" />
              <h4>Payroll Service</h4>
            </Link>
            <Link href="/bookkeeping-and-accounting" className={styles.serviceCard}>
              <img src="/img/Bookkeeping & Accounting.jpg" alt="Bookkeeping & Accounting" />
              <h4>Bookkeeping & Accounting</h4>
            </Link>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h6 className={styles.sectionLabel}>SOFTWARE</h6>
            <h2>Certifications - Affiliations - Partnerships</h2>
          </div>
          <div className={styles.partnershipsGrid}>
            {PARTNERSHIPS.map((src, i) => (
              <div key={i} className={styles.partnerCard}>
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHead}>
            <h6 className={styles.sectionLabel}>Testimonial</h6>
            <h2>What Our Clients Say!</h2>
          </div>
          <div className={styles.testimonialsGrid}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <h5>{t.name}</h5>
                <p>{t.message}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
