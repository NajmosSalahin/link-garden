# Link Garden

A personal link-in-bio page — socials, shop, work, and contact on one quiet,
mobile-first page. Built with React + Vite + Tailwind CSS + Framer Motion, styled
as a naturalist's field journal (ink-green field, parchment text, aged brass).

## Quick start

```bash
npm install
npm run dev      # local dev at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

Deploys as a static site to Vercel, Netlify, or GitHub Pages with no config.

## Day-to-day updates

Everything you edit lives in **`src/data/links.js`**. One link looks like:

```js
{
  id: 'instagram',             // unique; used for click counts
  category: 'Socials',         // section it appears under
  title: 'Instagram',          // card title
  url: 'https://instagram.com/yourname',
  icon: 'instagram',           // must exist in src/icons.js
  description: '',             // optional one-line description
  image: '',                   // optional thumbnail URL
  featured: false,             // true → wine "Featured" card at top
  embed: { type: 'youtube', src: 'https://www.youtube-nocookie.com/embed/...' },
                               // optional; turns the card into a media embed
}
```

- **Add a link** — copy an object, change the fields. If the icon isn't in
  `src/icons.js`, add a line there (`react-icons/si` for brands, `lucide-react`
  for generic icons).
- **Reorder** — move objects up/down within their category. Category order is
  fixed in `src/App.jsx` (`CATEGORY_ORDER`); categories with no links are hidden.
- **Feature a link** — set `featured: true` on exactly one.
- **Change name/bio** — edit the `profile` object at the top of `src/App.jsx`.
- **Email** — a `mailto:` link copies the address to the clipboard instead of
  navigating.

## Theme

All colors and fonts are tokens in `src/index.css` (one `:root` block for dark,
one `[data-theme="light"]` block). Change a value there and the whole site
follows. The light theme is toggled by the moon/sun button; choice is saved to
localStorage and applied before first paint to avoid a flash.

## Click counts

Every link keeps a rough click count in `localStorage` (`link-garden:clicks`),
shown subtly on the card. No backend, cleared with site data.

## Live Monkeytype stats

The Monkeytype card shows your real personal bests, refreshed automatically:

1. Create an ApeKey at `monkeytype.com/settings` ("ape key" section) and activate it.
2. Store it as a repo secret: `gh secret set MONKEYTYPE_APE_KEY`
3. `.github/workflows/update-stats.yml` (daily cron, also runnable manually from the
   Actions tab) calls the Monkeytype API and commits `public/stats.json` — but only
   when the numbers actually change, so it doesn't churn deploys.
4. The card fetches `/stats.json` on load and renders `Best 15s · 60 wpm · 98.7% acc`
   with a refresh button. If the fetch fails it quietly shows just the description.

The card's `stats: true` flag lives in `src/data/links.js`. To change the cadence,
edit the cron in the workflow (see crontab.guru).

## Sharing & social preview

`index.html` ships `<title>`, meta description, Open Graph and Twitter Card
tags pointing at `/og-image.png`. The image is generated from an inline SVG:

```bash
npm run og-image   # regenerates public/og-image.png (1200×630)
```

Update the `og:url` value once you know your real domain.

## Customization notes

- **Icons** — brand logos via `react-icons/si` (e.g. `SiEtsy`); generic UI icons
  via `lucide-react`. The Cal.com icon is `SiCaldotcom` in Simple Icons.
- **Motion** — a staggered fade/rise on load and a soft hover lift; everything
  is disabled under `prefers-reduced-motion`.
- **Accessibility** — icon-only links carry `aria-label`s, focus is visible
  (brass outline), and text pairs clear WCAG AA contrast in both themes.
