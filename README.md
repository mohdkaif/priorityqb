# Priority QB Services

Next.js website for Priority QB Services — QuickBooks setup, bookkeeping, payroll, support, and financial reporting.

## Setup

```bash
npm install
cp .env.example .env.local
# Edit .env.local with your mail and CONTACT_EMAIL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Mail (contact form)

Contact form submissions are sent via SMTP. Configure in `.env.local`:

- `MAIL_HOST` – SMTP host (e.g. `smtp.mailtrap.io`, `smtp.gmail.com`)
- `MAIL_PORT` – e.g. `587` or `465`
- `MAIL_USERNAME` / `MAIL_PASSWORD` – SMTP auth (if required)
- `MAIL_FROM_ADDRESS` / `MAIL_FROM_NAME` – Sender of the notification email
- `CONTACT_EMAIL` – Address that receives contact form submissions (defaults to `MAIL_FROM_ADDRESS` if not set)

For local testing you can use [Mailpit](https://github.com/axllent/mailpit) or [Mailtrap](https://mailtrap.io) and set `MAIL_HOST` / `MAIL_PORT` accordingly.

## Scripts

- `npm run dev` – Development server
- `npm run build` – Production build
- `npm run start` – Run production server

## Pages

- `/` – Home (services, pricing, testimonials, contact)
- `/services` – QuickBooks setup and customization
- `/quickbooks` – Bookkeeping & accounting
- `/payroll` – Payroll integration & management
- `/support` – Technical support
- `/financial` – Financial reporting & analysis

Contact modal is available site-wide; submissions are validated and emailed via the `/api/contact` route.
