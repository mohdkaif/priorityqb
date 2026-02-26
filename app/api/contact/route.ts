import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const NAME_REGEX = /^[A-Za-z\s]+$/u;
// Match CJK/Cyrillic (avoid \p{} for broad compatibility)
const NAME_NO_CJK = /[\u0400-\u04FF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF]/u;
const PHONE_REGEX = /^\+?[0-9]{10}$/u;
const MESSAGE_REGEX = /^[A-Za-z0-9\s.,!?]+$/u;

function validate(body: { name?: string; email?: string; phone?: string; message?: string }) {
  const errors: Record<string, string> = {};

  if (!body.name || typeof body.name !== 'string') {
    errors.name = 'Name is required.';
  } else if (body.name.length > 255) {
    errors.name = 'Name must not exceed 255 characters.';
  } else if (!NAME_REGEX.test(body.name)) {
    errors.name = 'The name must only contain English letters and spaces.';
  } else if (NAME_NO_CJK.test(body.name)) {
    errors.name = 'The name must not contain Chinese, Japanese, or Russian characters.';
  }

  if (!body.email || typeof body.email !== 'string') {
    errors.email = 'Email is required.';
  } else if (body.email.length > 255) {
    errors.email = 'Email must not exceed 255 characters.';
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      errors.email = 'The email must be a valid email address.';
    }
  }

  if (!body.phone || typeof body.phone !== 'string') {
    errors.phone = 'Phone is required.';
  } else if (!PHONE_REGEX.test(body.phone)) {
    errors.phone = 'The phone number format is invalid.';
  }

  if (!body.message || typeof body.message !== 'string') {
    errors.message = 'Message is required.';
  } else if (body.message.length > 1000) {
    errors.message = 'Message must not exceed 1000 characters.';
  } else if (!MESSAGE_REGEX.test(body.message)) {
    errors.message = 'The message must only contain English letters, numbers, and basic punctuation.';
  } else if (NAME_NO_CJK.test(body.message)) {
    errors.message = 'The message must not contain Chinese, Japanese, or Russian characters.';
  }

  return errors;
}

function contactEmailHtml(data: { name: string; email: string; phone: string; message: string }) {
  return `
<!DOCTYPE html>
<html>
<head>
  <title>Contact Form Submission</title>
</head>
<body>
  <h1>New Contact Message</h1>
  <p><strong>Name:</strong> ${data.name}</p>
  <p><strong>Email:</strong> ${data.email}</p>
  <p><strong>Phone:</strong> ${data.phone}</p>
  <p><strong>Message:</strong></p>
  <p>${data.message}</p>
</body>
</html>
  `.trim();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const errors = validate(body);

    if (Object.keys(errors).length > 0) {
      const firstError = Object.values(errors)[0];
      return NextResponse.json(
        { success: false, message: firstError },
        { status: 422 }
      );
    }

    const { name, email, phone, message } = body as {
      name: string;
      email: string;
      phone: string;
      message: string;
    };

    const toEmail = process.env.CONTACT_EMAIL || process.env.MAIL_FROM_ADDRESS || 'your-email@example.com';
    const host = process.env.MAIL_HOST || 'localhost';
    const port = parseInt(process.env.MAIL_PORT || '1025', 10);
    const user = process.env.MAIL_USERNAME || undefined;
    const pass = process.env.MAIL_PASSWORD || undefined;
    const fromAddress = process.env.MAIL_FROM_ADDRESS || 'noreply@example.com';
    const fromName = process.env.MAIL_FROM_NAME || 'Priority QB Services';

    // In development, optionally skip real send and log to console (set MAIL_DEV_SKIP_SEND=true in .env)
    const isDevSkipSend = process.env.NODE_ENV === 'development' && process.env.MAIL_DEV_SKIP_SEND === 'true';
    if (isDevSkipSend) {
      console.log('[Contact form – dev skip send]', { name, email, phone, message });
      return NextResponse.json({
        success: true,
        message: 'Thank you for contacting us! We will get back to you soon.',
      });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: user && pass ? { user, pass } : undefined,
      ...(port === 587 && { tls: { rejectUnauthorized: true } }),
    });

    await transporter.sendMail({
      from: `"${fromName}" <${fromAddress}>`,
      to: toEmail,
      subject: 'New Contact Form Submission',
      html: contactEmailHtml({ name, email, phone, message }),
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
    });
  } catch (err: unknown) {
    const nodeErr = err as { code?: string; response?: string };
    console.error('Contact form error:', err);

    // SMTP auth failed – credentials wrong or app password required (e.g. Gmail)
    if (nodeErr?.code === 'EAUTH') {
      return NextResponse.json(
        {
          success: false,
          message: 'Email service is not configured correctly. Please try again later or contact the site administrator.',
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
