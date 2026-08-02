import { motion, useReducedMotion } from 'framer-motion'
import { ICONS } from '../icons'

/* Compact icon-only row of core socials. Icon fallback: a small
   generic link glyph if the icon key isn't in the ICONS map. */
function LinkIcon({ icon, className }) {
  const Icon = ICONS[icon]
  return Icon ? <Icon className={className} aria-hidden="true" /> : null
}

export default function SocialRow({ links }) {
  const reduced = useReducedMotion()

  return (
    <nav aria-label="Social profiles" className="flex flex-wrap justify-center gap-2.5">
      {links.map((link) => (
        <motion.a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.title}
          title={link.title}
          whileHover={reduced ? undefined : { y: -2 }}
          whileTap={reduced ? undefined : { scale: 0.96 }}
          className="flex size-10 items-center justify-center rounded-plate-sm border border-brass-soft bg-panel text-brass transition-colors hover:border-brass/50 hover:bg-panel-lift"
        >
          <LinkIcon icon={link.icon} className="text-[19px]" />
        </motion.a>
      ))}
    </nav>
  )
}
