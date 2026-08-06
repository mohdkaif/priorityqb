'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { useSiteUi } from './Layout';

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'QB Setup' },
  { href: '/quickbooks', label: 'Bookkeeping' },
  { href: '/payroll', label: 'Payroll' },
  { href: '/support', label: 'Support' },
  { href: '/financial', label: 'Reporting' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { openEnquiry } = useSiteUi();

  return (
    <header className="siteHeader">
      <div className="promoBar">
        <strong>SUMMER SAVINGS</strong> — Live expert help FREE for 30 days.{' '}
        <button type="button" onClick={openEnquiry}>
          Buy now
        </button>
      </div>
      <div className="siteContainer">
        <div className="navBar">
          <Link href="/" className="brand" onClick={() => setOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/priority-qb-logo.png"
              alt="Priority QB"
              className="brandLogo"
              width={44}
              height={44}
            />
            <span className="brandText">
              Priority <em>QB</em>
            </span>
          </Link>
          <button
            type="button"
            className="navToggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <i className={`fas ${open ? 'fa-times' : 'fa-bars'}`} />
          </button>
          <nav className={`navMenu ${open ? 'open' : ''}`} aria-label="Main">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={pathname === link.href ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              className="btn btnPrimary navCta"
              onClick={() => {
                setOpen(false);
                openEnquiry();
              }}
            >
              Get started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
