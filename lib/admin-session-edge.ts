/**
 * Edge-safe session helpers (Web Crypto) for middleware.
 * Node API routes use lib/admin-auth.ts (same cookie format).
 */

const COOKIE_NAME = 'admin_session';

const ADMIN_EMAILS = ['admin@uniqonic.com', 'manager@uniqonic.com'];

function secret() {
  return process.env.ADMIN_SESSION_SECRET || 'uniqonic-admin-session-change-me';
}

async function sign(payload: string): Promise<string> {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(payload));
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export type EdgeSession = { email: string; name: string; exp: number };

export async function parseSessionTokenEdge(
  token: string | undefined | null
): Promise<EdgeSession | null> {
  if (!token || !token.includes('.')) return null;
  const [payload, sig] = token.split('.');
  if (!payload || !sig) return null;

  const expected = await sign(payload);
  if (sig.length !== expected.length || sig !== expected) return null;

  try {
    let b64 = payload.replace(/-/g, '+').replace(/_/g, '/');
    while (b64.length % 4) b64 += '=';
    const json = atob(b64);
    const data = JSON.parse(json) as EdgeSession;
    if (!data?.email || !data?.exp || Date.now() > data.exp) return null;
    if (!ADMIN_EMAILS.includes(data.email)) return null;
    return data;
  } catch {
    return null;
  }
}

export { COOKIE_NAME };
