import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="siteFooter">
      <div className="siteContainer">
        <div className="footerGrid">
          <div>
            <div className="footerBrand">Priority QB Services</div>
            <p className="footerMuted">
              Simplifying financial management with expert QuickBooks setup,
              bookkeeping, payroll, and support.
            </p>
          </div>
          <div className="footerCol">
            <h4>Services</h4>
            <Link href="/services">QuickBooks Setup</Link>
            <Link href="/quickbooks">Bookkeeping</Link>
            <Link href="/payroll">Payroll</Link>
            <Link href="/support">Technical Support</Link>
            <Link href="/financial">Financial Reporting</Link>
          </div>
          <div className="footerCol">
            <h4>Company</h4>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
            <a href="#" data-bs-toggle="modal" data-bs-target="#contactModal">
              Request a quote
            </a>
          </div>
        </div>
        <div className="footerBottom">
          <span>© {year} Priority QB Services. All rights reserved.</span>
          <Link href="/admin/login">Admin</Link>
        </div>
      </div>
    </footer>
  );
}
