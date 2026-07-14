# Deadline Buddy — Landing Page

A modern, animated React + Vite landing page for Deadline Buddy, a student
deadline & assignment tracker. Built with Tailwind CSS and Framer Motion.

## Stack

- React 18 + Vite 5
- Tailwind CSS (custom purple/lavender design tokens)
- Framer Motion (scroll reveals, hover, floating icons)
- lucide-react (icon set)

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    Navbar.jsx           Sticky nav, blurs on scroll, mobile menu
    Hero.jsx              Headline, CTAs, dashboard mockup, floating icons
    TrustSection.jsx      Stat cards (tasks managed, satisfaction, etc.)
    Features.jsx          6 feature cards
    HowItWorks.jsx        4-step timeline with connecting arrows
    DashboardPreview.jsx  Large app mockup (sidebar + widgets)
    Testimonials.jsx      3 student testimonial cards
    Pricing.jsx           Free / Pro / Campus plans
    FAQ.jsx                Accordion FAQ
    CTA.jsx                Closing call-to-action band
    Footer.jsx             Links + newsletter signup
  App.jsx
  index.css               Tailwind directives + custom utilities
  main.jsx
tailwind.config.js         Color palette, shadows, keyframes
```

## Design tokens

| Token | Value |
|---|---|
| Primary | `#7C3AED` |
| Secondary | `#A78BFA` |
| Accent | `#C4B5FD` |
| Background | `#FAFAFC` |
| Success | `#22C55E` |
| Warning | `#F59E0B` |
| Danger | `#EF4444` |
| Text primary | `#111827` |
| Text secondary | `#6B7280` |

Fonts: **Sora** (display/headings) + **Inter** (body), loaded via Google Fonts
in `index.html`.

## Notes

- All animations respect `prefers-reduced-motion`.
- The dashboard mockups are static illustrative data — wire them up to real
  data by replacing the arrays at the top of `Hero.jsx` and
  `DashboardPreview.jsx`.
- Newsletter form in the footer is local-state only (no backend wired up).
