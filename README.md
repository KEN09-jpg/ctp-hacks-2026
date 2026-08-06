# CTP Hacks 2026 — Website

The official website for **CTP Hacks 2026**, CUNY Tech Prep's learning-first hackathon for CTP fellows. Built with React, TypeScript, Vite, and Tailwind CSS as a static, informational site — no backend, no accounts, no data collection.

## Getting started

```bash
npm install
npm run dev      # start the local dev server
npm run build     # type-check and produce a production build in dist/
npm run preview   # preview the production build locally
```

Requires Node.js 18+.

## Project structure

```
src/
  components/     One component per section (Nav, Hero, About, Schedule, ...)
  data/
    content.ts    Single source of truth for schedule, sponsors, nav links,
                   and event copy — edit this file to update the site
  hooks/
    useReducedMotion.ts
  index.css       Tailwind layers + global styles (focus states, reduced motion)
  App.tsx         Composes all sections
public/
  favicon.svg
```

## Updating content

Almost everything a future organizer would need to change lives in
`src/data/content.ts`:

- **Schedule** — edit the `schedule` array (time, title, and a `line` color
  for the timeline marker).
- **Sponsors / logos** — add entries to `poweredBy`, `sponsors2026`, or
  `pastSponsors`. Each entry is `{ name, logoSrc?, href? }`. Until a real
  logo file is supplied, the site renders a clean text placeholder instead
  of inventing a logo — drop an image into `public/` and set `logoSrc` to
  wire it up.
- **Event details** — `eventDays` (Level Up Day / Hack Day) and
  `hackDayExperience` (mentorship, pitching, prizes, food, fun).
- **Get Involved CTA** — `getInvolvedCta.href` currently points to
  `https://bit.ly/SponsorCTPHacks`.
- **Contact email** — `contact.email`.

No component code needs to change for routine content updates.

## Design system

- **Type:** Space Grotesk (display), Inter (body), IBM Plex Mono (times,
  labels, data) — loaded via Google Fonts in `index.html`.
- **Color tokens:** defined in `tailwind.config.ts` under `colors.line`
  (violet / amber / teal "line" colors used across the schedule, cards, and
  hero, echoing NYC transit-line signage) plus `ink` / `canvas` neutrals.
- **Motion:** scroll reveals via `src/components/Reveal.tsx`
  (IntersectionObserver), ambient hero animation via CSS. All animation is
  disabled when the OS-level `prefers-reduced-motion` setting is on (see
  `src/index.css` and `useReducedMotion.ts`).

## Accessibility

Semantic landmarks (`header`, `nav`, `main`, `footer`), a skip-to-content
link, visible focus rings, alt text on meaningful images, and no
information conveyed by color alone (icons and text labels always pair
with color).

## Security notes

This is a static site with no forms, accounts, or backend calls, so there
is nothing to authenticate and nothing to leak. If a form or analytics
script is added later:

- Keep any API keys server-side / in environment variables — never in
  frontend code.
- Add server-side validation and rate limiting to any new form endpoint.
- Update the `Content-Security-Policy` meta tag in `index.html` to allow
  only the specific new origins required.

## Deployment

Any static host works (Vercel, Netlify, GitHub Pages, S3 + CloudFront).
Build with `npm run build` and deploy the contents of `dist/`. Serve over
HTTPS and set the security headers your host supports (HSTS,
`X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`) in addition to
the CSP already in `index.html`.
