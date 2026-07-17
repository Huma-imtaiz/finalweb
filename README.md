# Huma Imtiaz — Portfolio

AI Automation Specialist & Data Science Engineer portfolio site.
Built with React + Vite + Tailwind CSS + Framer Motion.

## Features

- Light mode: powder pink & white
- Dark mode: pink & black (toggle in the navbar, persisted in `localStorage`)
- Animated hero (floating blobs, rising sparkles, shimmering gradient text)
- Scroll-reveal animations throughout (Framer Motion `whileInView`)
- Full site content: About, Services, Results, Experience, Projects, Skills,
  Education, Certifications, Why Work With Me, Industries, Process,
  Testimonials, FAQ, Contact form, Footer
- SEO: meta title/description/keywords, Open Graph, Twitter card, and
  JSON-LD structured data in `index.html`

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploy on Vercel

1. Go to https://vercel.com/new and import the GitHub repo.
2. Framework preset: **Vite** (auto-detected).
3. Build command: `npm run build` — Output directory: `dist` (both auto-detected).
4. Click **Deploy**.

No environment variables are required — the contact form opens the visitor's
email client with a pre-filled message (`mailto:`) rather than calling a backend.

## Customizing

- Colors: `tailwind.config.js` → `theme.extend.colors.blush` (light/pink accent)
  and `inkrose` (dark backgrounds).
- Content: each section lives in its own file under `src/components/`.
- SEO meta tags: `index.html`.
