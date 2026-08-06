'use client';

import { useEffect, useState } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  onEnquire: () => void;
};

export default function WelcomePopup({ open, onClose, onEnquire }: Props) {
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="pqOverlay" onClick={onClose} role="presentation">
      <div
        className="pqWelcome"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-title"
      >
        <button type="button" className="pqModalClose" onClick={onClose} aria-label="Close">
          ✕
        </button>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/priority-qb-logo.png"
            alt="Priority QB"
            width={64}
            height={64}
            style={{ borderRadius: 14, boxShadow: '0 8px 20px rgba(44,109,240,0.25)' }}
          />
        </div>
        <h2 id="welcome-title">Welcome to Priority QB</h2>
        <p>
          Expert QuickBooks setup, bookkeeping, payroll, and support — tailored for
          growing businesses. Tell us what you need and we&apos;ll guide you.
        </p>
        <div className="pqWelcomeActions">
          <button type="button" className="pqLinkBtn" onClick={onClose}>
            Browse the site
          </button>
          <button
            type="button"
            className="btn btnAccent"
            onClick={() => {
              onClose();
              onEnquire();
            }}
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export function useWelcomeOnce() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    try {
      if (sessionStorage.getItem('pq_welcome_seen')) return;
      const t = setTimeout(() => setOpen(true), 1200);
      return () => clearTimeout(t);
    } catch {
      /* ignore */
    }
  }, []);
  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem('pq_welcome_seen', '1');
    } catch {
      /* ignore */
    }
  };
  return { open, close };
}
