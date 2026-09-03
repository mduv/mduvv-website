# Mohan Duvvuri — Personal Website

Portfolio site for [mohanduvvuri.com](https://mohanduvvuri.com).

I'm a software engineer specializing in AI-powered full-stack and mobile applications. I've built production LLM pipelines, RAG systems, real-time voice agents, and iOS apps — including **FrontIQ** (AI voice automation at Toga Software) and **Hoopli**, a live App Store NBA trivia game with subscription monetization and real-time analytics.

This site is the public home for that work: who I am, where I've been, what I've shipped, and how to reach me.

## What's on the site

- **Home** — Intro with an animated typewriter tagline, about section, skills, education at UC Santa Cruz, and interests outside of code
- **Timeline** — Career journey from UCSC through Techvox and Toga Software
- **Projects** — Pinned work from GitHub, including PodPix, Hoopli, systems coursework, and this site
- **Contact** — Email, phone, social links, and a message form

## Design

Modern, minimal layout inspired by clean developer portfolios — but with its own identity:

- **Sora** headings + **Inter** body text
- Off-white / charcoal palette with deep blue accents
- Scroll animations and a fixed "Let's talk" call-to-action
- Mobile-friendly hamburger navigation

## Tech stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve production build
```

## Updating content

All copy and lists live in typed data files under `src/data/` — edit these instead of hunting through components:

| File | Content |
|------|---------|
| `site.ts` | Name, bio, stats, contact info, typewriter phrases, social links |
| `experience.ts` | Timeline roles and bullet points |
| `projects.ts` | Featured project cards |
| `skills.ts` | Skill categories |
| `education.ts` | UCSC education spotlight |
| `interests.ts` | Hobbies (volleyball, etc.) |

## Deploy

The site is meant to deploy on **Vercel**, with `mohanduvvuri.com` pointed via **Cloudflare DNS**.

Full steps: [DEPLOYMENT.md](./DEPLOYMENT.md)

## Links

- Portfolio: [mohanduvvuri.com](https://mohanduvvuri.com)
- GitHub: [github.com/mduv](https://github.com/mduv)
- Email: mohandas.duvvuri@gmail.com
