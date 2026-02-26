# Troubleshooting 500 errors (main.js, react-refresh.js, _app.js, _error.js)

## What the error means

Your browser is requesting **old Next.js chunk names** from the Pages Router:

- `main.js`, `react-refresh.js`, `_app.js`, `_error.js`

This project uses the **App Router**, which uses different chunk names (e.g. `main-app.js`, `app/page.js`). So either:

1. **Wrong URL or port** – You're loading the app from a server/port that isn't this Next.js app (e.g. old PHP server or another app on 3000).
2. **Stale cache** – The browser or a service worker is using an old HTML that points to those old chunk URLs; when the server doesn't have them, it may return 500.
3. **Wrong server in production** – If deployed on Apache/PHP, requests to `/_next/static/...` might be handled by PHP and return 500.

## Fixes

### 1. Use the correct URL and port

- Run: `npm run dev` (dev server is set to port **3000**).
- Open: **http://localhost:3000** (not 3001, 3002, or another host).
- If port 3000 is in use, stop the other process or use the port Next.js prints in the terminal.

### 2. Clear cache and rebuild

```bash
# Stop the dev server (Ctrl+C), then:
rm -rf .next
npm run dev
```

In the browser:

- Hard refresh: **Cmd+Shift+R** (Mac) or **Ctrl+Shift+R** (Windows/Linux).
- Or clear site data for localhost: DevTools → Application → Storage → Clear site data.

### 3. If you're deploying (Apache / PHP / cPanel)

Next.js must serve the app and its static files. Do **not** send `/_next/*` or `/_next/static/*` to PHP.

- **Recommended:** Run `npm run build` and `npm run start` on a Node host (e.g. Vercel, Node server).
- If you must use Apache, add rules so `/_next` is served as static files or proxied to the Next.js server; never route it to a PHP script.

Once the correct server is used and cache is cleared, the 500s on those script URLs should stop.
