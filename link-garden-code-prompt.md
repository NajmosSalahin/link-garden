# Link Garden — a personal link hub

Build me a personal "link garden" — a single-page, mobile-first link-in-bio site (like Linktree, Beacons, and Carrd) built in React. It should hold every kind of link I share — socials, shops/marketplaces, content/work, and contact — on one fast, beautiful page that looks good wherever it gets shared.

Take the best of each reference site rather than copying one:
- **Carrd's polish** — real typography, an intentional palette, restrained motion, nothing that looks like a generic template
- **Linktree's clarity** — instantly scannable, mobile-first, one obvious action per link
- **Beacons' richness** — links grouped into labeled sections, with cards that can carry an image or description, not just bare text buttons

## Tech stack
- React + Vite
- Tailwind CSS
- Framer Motion for animation
- `react-icons` — the `si` (Simple Icons) set for brand/platform logos, `lucide-react` for generic UI icons
- Static site, no backend — should deploy cleanly to Vercel, Netlify, or GitHub Pages

## Aesthetic direction: naturalist's field journal

Not a bright "boutique plant shop" look — think an old herbarium or botanical field journal: deep, quiet, a little scholarly, with one warm metallic accent instead of the usual pastel-garden palette.

- **Palette** — a deep ink-green, almost-black background (~#16211C), a slightly lifted panel green (~#1E2E27) for cards, warm parchment text (~#EDE6D6), and one accent: aged brass/gold (~#B8925A). Reserve a second accent, a deep wine (~#7A3B4C), only for the featured card. Nothing pastel, nothing purple-to-blue.
- **Type** — an editorial serif with some age to it for the name and headings (e.g. Newsreader or Libre Caslon Display), a quiet clean sans for body copy (e.g. Karla or Public Sans), and a monospace set in spaced small caps for category labels (e.g. Space Mono) — like a specimen tag.
- **Signature element** — treat each category section like an index entry in a field journal: a thin brass hairline rule, one small consistent botanical line-mark (a single reused glyph, not scattered clip-art leaves), and the category name in spaced small-caps mono. This is the one place the "garden" idea shows up explicitly — keep everything else quiet around it.
- **Shape** — mostly clean rectangles with a small, consistent corner radius (not sharp zero-radius, not heavy rounded-pill either) and a fine 1px brass-toned border, like a plate frame. The avatar gets a thin circular or oval brass ring rather than a plain flat crop.
- **Motion** — restrained: a staggered fade/rise on page load, a soft lift on hover, nothing else stacked on top. Respect `prefers-reduced-motion`.

Build this as a token system (CSS variables for the five colors, the three font roles) in one place, so the palette and type can be swapped later without touching component code. If you deviate from the hex values above, note why in a comment.

## Page structure
1. **Header** — avatar (with the brass ring), name, one-line bio/tagline, optional location
2. **Social row** — compact, icon-only row of core socials near the top
3. **Featured link** — one larger card, shown only when a link has `featured: true` in the data, using the wine accent, for whatever's currently worth highlighting (a launch, a video, a sale)
4. **Category sections** — generated dynamically from whatever categories exist in the data file (don't hardcode sections), defaulting to: Socials, Shop & Marketplaces, Content & Work, Contact & More
5. **Footer** — small, quiet credit line

Every link renders as a considered card (icon + title + optional one-line description + optional thumbnail) — not a plain bordered `<a>` tag.

## Data-driven content
Keep all content in one file, `src/data/links.js`, as an array like:

```js
{
  id: 'instagram',
  category: 'Socials',
  title: 'Instagram',
  url: 'https://instagram.com/yourname',
  icon: 'instagram',
  description: '',
  image: '',
  featured: false,
}
```

Populate it with realistic placeholder entries across all four categories (Instagram/TikTok/YouTube/X for socials; Etsy/Gumroad/Shopify for shop; portfolio site/Substack for content; email/Cal.com for contact), so the site is fully visible and testable right away. Comment clearly where I should swap in my real links.

## Requirements
- Mobile-first (~375px wide) up through a centered desktop layout (max-width ~480–560px) — don't stretch content edge-to-edge on large screens
- Copy-to-clipboard on the email/contact link, with a small confirmation state
- Proper `<title>`, meta description, Open Graph + Twitter Card tags with a preview image, and a favicon, so it looks good when the link itself gets shared
- Semantic HTML, alt text, `aria-label`s on icon-only links, visible focus states, sufficient color contrast against the dark background
- Sensible component split (`ProfileHeader`, `SocialRow`, `FeaturedCard`, `CategorySection`, `LinkCard`, `Footer`), with the data file as the only thing I should need to touch for day-to-day updates
- A short README covering how to add/edit/reorder links and how to deploy

## Nice-to-have if there's time
- Light theme variant (swap the token values — parchment background, ink-green text) toggled by a small switch
- A `MediaEmbedCard` variant that can hold a YouTube or Spotify embed, as an example of a richer link block
- A simple local click counter per link (no backend — just to get a rough sense of what's getting clicked)

Start by scaffolding the project and the data file, then build the components, then polish animation and the token system last. If anything about the categories or platforms is unclear, use good judgment and note assumptions in comments rather than stopping to ask.
