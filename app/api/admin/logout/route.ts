import { NextResponse } from 'next/server';
import { COOKIE_NAME, sessionCookieOptions } from '@/lib/admin-auth';

export async function POST() {
  const res = NextResponse.json({ success: true, message: 'Logged out.' });
  res.cookies.set(COOKIE_NAME, '', { ...sessionCookieOptions(0), maxAge: 0 });
  return res;
}
