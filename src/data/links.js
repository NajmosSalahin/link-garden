/* ─────────────────────────────────────────────────────────────
   Link Garden — your links live here. This is the only file you
   need to touch day to day.

   How to:
   • Add a link   → copy any object below, change the fields.
   • Reorder      → move the object up/down within its category.
   • Feature one  → set `featured: true` (the wine card appears
                    between the social row and the sections).
   • Icon options → see src/icons.js. Unknown keys fall back
                    to a generic link glyph.
   • Thumbnail    → set `image` to a public image URL (optional).
   • Embed        → add an `embed` object (see the video below).

   Everywhere you see "yourname" / "your..." — swap in your real
   links before going live.   ────────────────────────────────── */

const links = [
  /* ── Featured (launch, video, or sale worth highlighting) ── */
  {
    id: 'featured-shop',
    category: 'Shop & Marketplaces',
    title: 'Autumn Pressed Collection is live',
    url: 'https://etsy.com/shop/yourname',
    icon: 'etsy',
    description: 'New frames, dried this week. 10% off through Sunday.',
    image: '',
    featured: true,
  },

  /* ── Socials ── */
  {
    id: 'instagram',
    category: 'Socials',
    title: 'Instagram',
    url: 'https://instagram.com/yourname',
    icon: 'instagram',
    description: '',
    image: '',
    featured: false,
  },
  {
    id: 'tiktok',
    category: 'Socials',
    title: 'TikTok',
    url: 'https://tiktok.com/@yourname',
    icon: 'tiktok',
    description: '',
    image: '',
    featured: false,
  },
  {
    id: 'youtube',
    category: 'Socials',
    title: 'YouTube',
    url: 'https://youtube.com/@yourname',
    icon: 'youtube',
    description: '',
    image: '',
    featured: false,
  },
  {
    id: 'x',
    category: 'Socials',
    title: 'X',
    url: 'https://x.com/yourname',
    icon: 'x',
    description: '',
    image: '',
    featured: false,
  },

  /* ── Shop & Marketplaces ── */
  {
    id: 'etsy',
    category: 'Shop & Marketplaces',
    title: 'Etsy — pressed botanicals',
    url: 'https://etsy.com/shop/yourname',
    icon: 'etsy',
    description: 'Frames, cards, and specimens, pressed by hand.',
    image: '',
    featured: false,
  },
  {
    id: 'gumroad',
    category: 'Shop & Marketplaces',
    title: 'Gumroad — digital goods',
    url: 'https://yourname.gumroad.com',
    icon: 'gumroad',
    description: 'Templates, e-books, and the occasional font.',
    image: '',
    featured: false,
  },
  {
    id: 'shopify',
    category: 'Shop & Marketplaces',
    title: 'Shop — seasonal drops',
    url: 'https://yourname.myshopify.com',
    icon: 'shopify',
    description: 'Tees, totes, and prints in small runs.',
    image: '',
    featured: false,
  },

  /* ── Content & Work ── */
  {
    id: 'website',
    category: 'Content & Work',
    title: 'Website — selected work',
    url: 'https://yourname.dev',
    icon: 'website',
    description: 'Projects, writing, and experiments.',
    image: '',
    featured: false,
  },
  {
    id: 'substack',
    category: 'Content & Work',
    title: 'Substack — Field Notes',
    url: 'https://yourname.substack.com',
    icon: 'substack',
    description: 'A monthly letter on making things slowly.',
    image: '',
    featured: false,
  },
  {
    id: 'video',
    category: 'Content & Work',
    title: 'A walk through the arboretum',
    url: 'https://youtu.be/aqz-KE-bpKQ',
    icon: 'youtube',
    description: 'A short film on the autumn shift. Watch it here.',
    image: '',
    featured: false,
    /* Swap in your own embed URL (YouTube). */
    embed: {
      type: 'youtube',
      src: 'https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ',
    },
  },
  {
    id: 'spotify',
    category: 'Content & Work',
    title: 'Lo-fi beats — on repeat',
    url: 'https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS',
    icon: 'spotify',
    description: 'The playlist behind the long work sessions.',
    image: '',
    featured: false,
    /* `spotify: true` renders the "Now listening" plate card instead of
       an embed — SWAP the playlist URL above for your own link. */
    spotify: true,
  },

  {
    id: 'monkeytype',
    category: 'Content & Work',
    title: 'Monkeytype — typing stats',
    url: 'https://monkeytype.com/profile/ChouCho_P',
    icon: 'monkeytype',
    description: 'Live personal bests, refreshed daily from the API.',
    image: '',
    featured: false,
    /* `stats: true` renders the live stats row (see public/stats.json,
       kept fresh by the .github/workflows/update-stats.yml cron). */
    stats: true,
  },

  /* ── Contact & More ── */
  {
    id: 'email',
    category: 'Contact & More',
    title: 'Email — hello@yourname.com',
    url: 'mailto:hello@yourname.com',
    icon: 'email',
    description: 'Tap to copy the address.',
    image: '',
    featured: false,
  },
  {
    id: 'cal',
    category: 'Contact & More',
    title: 'Cal.com — book a call',
    url: 'https://cal.com/yourname',
    icon: 'calcom',
    description: 'Thirty quiet minutes, any subject.',
    image: '',
    featured: false,
  },
]

export default links
