import { createHmac, timingSafeEqual } from 'crypto';
import { cookies } from 'next/headers';

/** Hardcoded admin accounts (no database). Change these for production. */
export const ADMIN_USERS = [
  { email: 'admin@uniqonic.com', password: 'Admin@123', name: 'Admin' },
  { email: 'manager@uniqonic.com', password: 'Manager@123', name: 'Manager' },
] as const;

const COOKIE_NAME = 'admin_session';
const SESSION_DAYS = 7;

function secret() {
  return process.env.ADMIN_SESSION_SECRET || 'uniqonic-admin-session-change-me';
}

function sign(payload: string) {
  return createHmac('sha256', secret()).update(payload).digest('hex');
}

export type AdminSession = {
  email: string;
  name: string;
  exp: number;
};

export function verifyCredentials(email: string, password: string) {
  const user = ADMIN_USERS.find(
    (u) => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password
  );
  return user ? { email: user.email, name: user.name } : null;
}

export function createSessionToken(user: { email: string; name: string }) {
  const exp = Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000;
  const payload = Buffer.from(JSON.stringify({ email: user.email, name: user.name, exp })).toString(
    'base64url'
  );
  const sig = sign(payload);
  return `${payload}.${sig}`;
}

export function parseSessionToken(token: string | undefined | null): AdminSession | null {
  if (!token || !token.includes('.')) return null;
  const [payload, sig] = token.split('.');
  if (!payload || !sig) return null;

  const expected = sign(payload);
  try {
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  } catch {
    return null;
  }

  try {
    const data = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as AdminSession;
    if (!data?.email || !data?.exp || Date.now() > data.exp) return null;
    const allowed = ADMIN_USERS.some((u) => u.email === data.email);
    if (!allowed) return null;
    return data;
  } catch {
    return null;
  }
}

export function sessionCookieOptions(maxAgeSeconds: number) {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    maxAge: maxAgeSeconds,
  };
}

export function getAdminSession(): AdminSession | null {
  const jar = cookies();
  return parseSessionToken(jar.get(COOKIE_NAME)?.value);
}

export { COOKIE_NAME, SESSION_DAYS };
