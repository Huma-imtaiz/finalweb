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

## Contact form setup

The contact form delivers submissions via [Web3Forms](https://web3forms.com):

1. Go to https://web3forms.com, enter your email, and click the confirmation
   link you receive — this gives you a free access key instantly.
2. Copy `.env.example` to `.env.local` and paste your key:
   ```
   VITE_WEB3FORMS_ACCESS_KEY=your-access-key-here
   ```
3. On Vercel, add the same variable under **Project Settings → Environment
   Variables** so the deployed site can send submissions too.

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

Add `VITE_WEB3FORMS_ACCESS_KEY` under Project Settings → Environment
Variables (see "Contact form setup" above) so submissions get delivered.

## Customizing

- Colors: `tailwind.config.js` → `theme.extend.colors.blush` (light/pink accent)
  and `inkrose` (dark backgrounds).
- Content: each section lives in its own file under `src/components/`.
- SEO meta tags: `index.html`.
