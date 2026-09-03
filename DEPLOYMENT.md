# Deployment Guide — mohanduvvuri.com

## Vercel Deployment

1. Push your code to GitHub (`mduv/mduvv-website`)
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click **Add New Project** and import `mduv/mduvv-website`
4. Vercel auto-detects Next.js — no build config changes needed
5. Click **Deploy**

Every push to `master` will trigger a new deployment automatically.

## Cloudflare DNS Setup

Once Vercel gives you a deployment URL:

1. Log in to Cloudflare (your dad's account)
2. Select the `mohanduvvuri.com` domain
3. Go to **DNS** → **Records**
4. Add or update these records:

| Type  | Name | Content              | Proxy    |
|-------|------|----------------------|----------|
| CNAME | `@`  | `cname.vercel-dns.com` | DNS only |
| CNAME | `www`| `cname.vercel-dns.com` | DNS only |

5. In the Vercel dashboard, go to **Settings** → **Domains**
6. Add `mohanduvvuri.com` and `www.mohanduvvuri.com`
7. Vercel will verify DNS and provision HTTPS automatically

## Updating Content

All site content lives in `src/data/`:

- `site.ts` — name, tagline, typewriter phrases, bio, stats, social links
- `projects.ts` — project cards
- `skills.ts` — skill categories
- `experience.ts` — timeline entries
- `education.ts` — UCSC education spotlight
- `interests.ts` — hobbies strip

Edit these files, push to GitHub, and Vercel redeploys automatically.

## Contact Form

The contact form currently logs submissions to the server console (stub). To enable real email delivery:

1. Sign up for [Resend](https://resend.com) or [Formspree](https://formspree.io)
2. Update `src/app/api/contact/route.ts` with your API key
3. Redeploy
