import { motion, useReducedMotion } from 'framer-motion'
import links from './data/links'
import ProfileHeader from './components/ProfileHeader'
import SocialRow from './components/SocialRow'
import FeaturedCard from './components/FeaturedCard'
import CategorySection from './components/CategorySection'
import ThemeToggle from './components/ThemeToggle'
import Footer from './components/Footer'

/* ── The only thing you need for day-to-day updates. ── */
const profile = {
  name: 'Najmus Salahin',
  bio: 'Designer & maker of small, useful things. Routes, code, and quiet weekends in Dhaka.',
  location: 'Dhaka, Bangladesh',
}

const CATEGORY_ORDER = ['Socials', 'Shop & Marketplaces', 'Content & Work', 'Contact & More']

export default function App() {
  const reduced = useReducedMotion()

  const featured = links.find((l) => l.featured)
  const byCategory = new Map()
  for (const link of links) {
    if (link.featured) continue
    const list = byCategory.get(link.category) ?? []
    list.push(link)
    byCategory.set(link.category, list)
  }
  const sections = CATEGORY_ORDER.filter((name) => byCategory.has(name))

  const container = {
    hidden: {},
    show: reduced
      ? { transition: { staggerChildren: 0 } }
      : { transition: { staggerChildren: 0.07, delayChildren: 0.06 } },
  }
  const item = {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 14 },
    show: reduced
      ? { opacity: 1, transition: { duration: 0 } }
      : { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <main className="mx-auto w-full max-w-[560px] px-5 pb-14 pt-9 md:pt-14">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-9"
      >
        <motion.div variants={item} className="relative flex flex-col gap-8">
          <div className="absolute right-0 top-0 z-10">
            <ThemeToggle />
          </div>
          <ProfileHeader profile={profile} />
        </motion.div>

        <motion.div variants={item}>
          <SocialRow links={byCategory.get('Socials') ?? []} />
        </motion.div>

        {featured && (
          <motion.div variants={item}>
            <FeaturedCard link={featured} />
          </motion.div>
        )}

        {sections.map((name) => (
          <motion.div key={name} variants={item}>
            <CategorySection name={name} links={byCategory.get(name)} />
          </motion.div>
        ))}

        <motion.div variants={item}>
          <Footer name={profile.name} />
        </motion.div>
      </motion.div>
    </main>
  )
}
