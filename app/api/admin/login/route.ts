import { NextRequest, NextResponse } from 'next/server';
import {
  COOKIE_NAME,
  SESSION_DAYS,
  createSessionToken,
  sessionCookieOptions,
  verifyCredentials,
} from '@/lib/admin-auth';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = typeof body.email === 'string' ? body.email : '';
    const password = typeof body.password === 'string' ? body.password : '';

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required.' },
        { status: 400 }
      );
    }

    const user = verifyCredentials(email, password);
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Invalid email or password.' },
        { status: 401 }
      );
    }

    const token = createSessionToken(user);
    const res = NextResponse.json({
      success: true,
      message: 'Logged in successfully.',
      user: { email: user.email, name: user.name },
    });
    res.cookies.set(COOKIE_NAME, token, sessionCookieOptions(SESSION_DAYS * 24 * 60 * 60));
    return res;
  } catch (err) {
    console.error('Admin login error:', err);
    return NextResponse.json(
      { success: false, message: 'Login failed. Please try again.' },
      { status: 500 }
    );
  }
}
