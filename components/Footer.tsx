'use client';

export default function Footer() {
  return (
    <>
    <section className="cta">
      <div className="container">
        <h2>Take Control of Your Business Finances</h2>
        <p>
          Contact us today to optimize your QuickBooks financial reporting and
          analysis!
        </p>
        <button
          className="cta-button"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#contactModal"
        >
          Get Started Now
        </button>
      </div>
    </section>
    <footer className="footer bg-dark text-white text-center py-3">
      <div className="container">
        <p>© {new Date().getFullYear()} Priority QB Services. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
}
