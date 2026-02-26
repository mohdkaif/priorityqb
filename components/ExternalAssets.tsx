'use client';

import { useEffect } from 'react';

const STYLES = [
  'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
];

const BOOTSTRAP_JS = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js';

export default function ExternalAssets() {
  useEffect(() => {
    // Ensure stylesheets are loaded (fallback if metadata/head links don't apply)
    STYLES.forEach((href) => {
      const exists = document.querySelector(`link[href="${href}"]`);
      if (!exists) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    });

    // Ensure Bootstrap JS is loaded (fallback if Script component doesn't run)
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
