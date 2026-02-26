'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div className="promo-banner">
        Get Live Expert Assisted FREE for 30 days.{' '}
        <a href="#" data-bs-toggle="modal" data-bs-target="#contactModal">
          Buy now
        </a>
      </div>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: '#2c3e50' }}
      >
        <div className="container">
          <Link className="navbar-brand" href="/">
            Priority QB Services
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/#services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/#pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/#contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
