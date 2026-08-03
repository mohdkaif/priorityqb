'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

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

  return (
    <header className="siteHeader">
      <div className="promoBar">
        Get Live Expert Assisted FREE for 30 days.{' '}
        <button type="button" data-bs-toggle="modal" data-bs-target="#contactModal">
          Claim offer
        </button>
      </div>
      <div className="siteContainer">
        <div className="navBar">
          <Link href="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brandMark">PQ</span>
            <span>Priority QB Services</span>
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
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
              onClick={() => setOpen(false)}
            >
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
