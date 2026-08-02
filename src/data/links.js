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
   links (or remove the entry) before going live.   ───────────── */

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
    url: 'https://www.instagram.com/roronoa_adib',
    icon: 'instagram',
    description: '',
    image: '',
    featured: false,
  },
  {
    id: 'facebook',
    category: 'Socials',
    title: 'Facebook',
    url: 'https://www.facebook.com/najmos.salahin',
    icon: 'facebook',
    description: '',
    image: '',
    featured: false,
  },
  {
    id: 'x',
    category: 'Socials',
    title: 'X',
    url: 'https://x.com/najmus_sal',
    icon: 'x',
    description: '',
    image: '',
    featured: false,
  },
  {
    id: 'discord',
    category: 'Socials',
    title: 'Discord',
    url: 'https://discord.com/users/sukkimura.',
    icon: 'discord',
    description: '',
    image: '',
    featured: false,
  },
  {
    id: 'telegram',
    category: 'Socials',
    title: 'Telegram',
    url: 'https://t.me/najmossalahin',
    icon: 'telegram',
    description: '',
    image: '',
    featured: false,
  },
  {
    id: 'reddit',
    category: 'Socials',
    title: 'Reddit',
    url: 'https://www.reddit.com/user/PirateSanji_1353/',
    icon: 'reddit',
    description: '',
    image: '',
    featured: false,
  },
  {
    id: 'twitch',
    category: 'Socials',
    title: 'Twitch',
    url: 'https://www.twitch.tv/nauscent_soul/',
    icon: 'twitch',
    description: '',
    image: '',
    featured: false,
  },
  {
    id: 'pinterest',
    category: 'Socials',
    title: 'Pinterest',
    url: 'https://jp.pinterest.com/najmussalahinadib/',
    icon: 'pinterest',
    description: '',
    image: '',
    featured: false,
  },
  {
    id: 'spotify-profile',
    category: 'Socials',
    title: 'Spotify — profile',
    url: 'https://open.spotify.com/user/vd04twrk09mp6hmvb9ree5dt2',
    icon: 'spotify',
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
    url: 'https://portfolio-j6c4.onrender.com/',
    icon: 'website',
    description: 'Projects, writing, and experiments.',
    image: '',
    featured: false,
  },
  {
    id: 'github',
    category: 'Content & Work',
    title: 'GitHub — main',
    url: 'https://github.com/NajmosSalahin/',
    icon: 'github',
    description: 'Projects, experiments, and open-source bits.',
    image: '',
    featured: false,
  },
  {
    id: 'github-typing',
    category: 'Content & Work',
    title: 'GitHub — typing & toys',
    url: 'https://github.com/ChouCho-P/',
    icon: 'github',
    description: 'The account behind the typing stats.',
    image: '',
    featured: false,
  },
  {
    id: 'patreon',
    category: 'Content & Work',
    title: 'Patreon',
    url: 'https://www.patreon.com/c/Najmos_Salahin',
    icon: 'patreon',
    description: 'Support the work, get extras.',
    image: '',
    featured: false,
  },
  {
    id: 'linkedin',
    category: 'Content & Work',
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/md-najmos-salahin-185106371/',
    icon: 'linkedin',
    description: 'Professional history and such.',
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
