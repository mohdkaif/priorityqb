import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import './globals.css';
import Layout from '@/components/Layout';
import ExternalAssets from '@/components/ExternalAssets';

export const metadata: Metadata = {
  title: 'Uniqonic Revolutions',
  description: 'Manage your Accounting & Bookkeeping with Ease. Technical Support, Payroll, Bookkeeping & Accounting.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <ExternalAssets />
        <Layout>{children}</Layout>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
