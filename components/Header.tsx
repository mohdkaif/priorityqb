'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <div className="topBar">
        <div className="container">
          <Link href="/" className="topBarLogoLink">
            <img src="/img/logo.png" alt="Uniqonic Revolutions" className="topBarLogo" />
          </Link>
          <div className="topBarRight">
            <div className="topBarItem">
              <i className="far fa-clock" />
              <div>
                <p>Opening Hour</p>
                <h6>PST 5:00am to 6:00pm</h6>
              </div>
            </div>
            <div className="topBarItem">
              <i className="far fa-envelope" />
              <div>
                <p>Email Us</p>
                <h6>care@uniqonicrevolutions.com</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="navWrap">
        <div className="container">
          <button type="button" className="navToggle" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle menu">
            MENU
          </button>
          <div className={`navMenu ${navOpen ? 'open' : ''}`}>
            <ul className="navList">
              <li><Link href="/" onClick={() => setNavOpen(false)}>Home</Link></li>
              <li className="navDropdown">
                <button type="button" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  What we do ▾
                </button>
                <div className={`navDropdownPanel ${dropdownOpen ? 'open' : ''}`}>
                  <Link href="/technical-support" onClick={() => { setDropdownOpen(false); setNavOpen(false); }}>Technical Support</Link>
                  <Link href="/payroll-service" onClick={() => { setDropdownOpen(false); setNavOpen(false); }}>Payroll Service</Link>
                  <Link href="/bookkeeping-and-accounting" onClick={() => { setDropdownOpen(false); setNavOpen(false); }}>Bookkeeping & Accounting</Link>
                </div>
              </li>
              <li><Link href="/pricing" onClick={() => setNavOpen(false)}>Pricing</Link></li>
              <li><Link href="/security" onClick={() => setNavOpen(false)}>Security</Link></li>
              <li><Link href="/contact" onClick={() => setNavOpen(false)}>Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
