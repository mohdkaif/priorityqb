'use client';

import { useEffect } from 'react';

const FONT_AWESOME =
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
const BOOTSTRAP_JS =
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';

/** Minimal modal CSS so Bootstrap JS modal works without Bootstrap CSS */
const MODAL_CSS = `
.modal { position: fixed; top: 0; left: 0; z-index: 1055; display: none; width: 100%; height: 100%; overflow-x: hidden; overflow-y: auto; outline: 0; }
.modal.show { display: block; }
.modal.fade .modal-dialog { transition: transform .3s ease-out; transform: translate(0,-50px); }
.modal.show .modal-dialog { transform: none; }
.modal-dialog { position: relative; width: auto; margin: 1.75rem auto; max-width: 500px; pointer-events: none; }
.modal-dialog-centered { display: flex; align-items: center; min-height: calc(100% - 3.5rem); }
.modal-content { position: relative; display: flex; flex-direction: column; width: 100%; pointer-events: auto; background: #fff; border-radius: 14px; box-shadow: 0 18px 40px rgba(6,38,54,.2); outline: 0; }
.modal-header { display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; background: #2c6df0; color: #fff; border-radius: 14px 14px 0 0; }
.modal-title { margin: 0; font-size: 1.15rem; font-weight: 700; }
.modal-body { padding: 1.25rem; }
.modal-footer { display: flex; justify-content: flex-end; padding: 1rem 1.25rem; border-top: 1px solid #e5e7eb; }
.btn-close { box-sizing: content-box; width: 1em; height: 1em; padding: .25em; color: #fff; background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat; border: 0; border-radius: .25rem; opacity: .85; cursor: pointer; }
.btn-close-white { filter: none; }
.modal-backdrop { position: fixed; inset: 0; z-index: 1050; background: rgba(15,23,42,.5); }
.modal-backdrop.fade { opacity: 0; }
.modal-backdrop.show { opacity: 1; }
body .btn-primary { background: #2c6df0 !important; border: none !important; color: #fff !important; font-weight: 700 !important; padding: .75rem 1.5rem !important; border-radius: 8px !important; cursor: pointer; min-height: 44px; }
`;

export default function ExternalAssets() {
  useEffect(() => {
    if (!document.querySelector(`link[href="${FONT_AWESOME}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = FONT_AWESOME;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }

    if (!document.getElementById('pq-modal-css')) {
      const style = document.createElement('style');
      style.id = 'pq-modal-css';
      style.textContent = MODAL_CSS;
      document.head.appendChild(style);
    }

    const scriptExists = document.querySelector(`script[src="${BOOTSTRAP_JS}"]`);
    if (!scriptExists && typeof (window as unknown as { bootstrap?: unknown }).bootstrap === 'undefined') {
      const script = document.createElement('script');
      script.src = BOOTSTRAP_JS;
      script.crossOrigin = 'anonymous';
      script.async = false;
      document.body.appendChild(script);
    }
  }, []);

  return null;
}
