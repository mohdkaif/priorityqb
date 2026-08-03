import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import Layout from '@/components/Layout';
import ExternalAssets from '@/components/ExternalAssets';

export const metadata: Metadata = {
  title: {
    default: 'Priority QB Services',
    template: '%s | Priority QB Services',
  },
  description:
    'Simplifying your financial management with QuickBooks solutions — setup, bookkeeping, payroll, support, and reporting.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome only — Bootstrap CSS is not loaded so it cannot override our theme */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <ExternalAssets />
        <Layout>{children}</Layout>
        {/* Bootstrap JS kept for contact modal only */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
