'use client';

import Link from 'next/link';
import { useSiteUi } from './Layout';

export default function Footer() {
  const year = new Date().getFullYear();
  const { openEnquiry } = useSiteUi();

  return (
    <footer className="siteFooter">
      <div className="siteContainer">
        <div className="footerGrid">
          <div>
            <div className="footerBrand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/priority-qb-logo.png"
                alt="Priority QB"
                className="footerLogo"
                width={40}
                height={40}
              />
              <span>
                Priority <em>QB</em> Services
              </span>
            </div>
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
            <button type="button" className="footerLinkBtn" onClick={openEnquiry}>
              Request a quote
            </button>
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
