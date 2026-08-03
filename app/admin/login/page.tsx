import { Suspense } from 'react';
import AdminLoginPage from './page-client';

export const metadata = { title: 'Admin Login' };

export default function Page() {
  return (
    <Suspense fallback={<div style={{ padding: '3rem', textAlign: 'center' }}>Loading…</div>}>
      <AdminLoginPage />
    </Suspense>
  );
}
