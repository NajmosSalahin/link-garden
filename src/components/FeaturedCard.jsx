import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import WaveMark from './WaveMark'
import { ICONS } from '../icons'

/* The one bigger, wine-accented card — only rendered when a link
   in the data file has `featured: true`. */
export default function FeaturedCard({ link }) {
  const reduced = useReducedMotion()
  const Icon = ICONS[link.icon]

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={reduced ? undefined : { y: -3 }}
      className="group relative block overflow-hidden rounded-plate border border-brass/40 bg-wine p-5 text-parchment transition-shadow hover:shadow-[0_12px_32px_-16px_var(--wine-deep)]"
    >
      <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-parchment/75">
        <WaveMark className="size-3.5" />
        Featured
      </p>
      <div className="mt-3 flex items-start gap-4">
        {Icon && (
          <span className="mt-0.5 shrink-0 rounded-plate-sm border border-parchment/25 p-2.5">
            <Icon className="text-[22px]" aria-hidden="true" />
          </span>
        )}
        <div className="min-w-0">
          <h2 className="font-display text-xl font-normal leading-snug text-parchment">
            {link.title}
          </h2>
          {link.description && (
            <p className="mt-1 text-sm leading-relaxed text-parchment/85">{link.description}</p>
          )}
        </div>
        <ArrowUpRight
          size={18}
          strokeWidth={1.75}
          className="ml-auto mt-1 shrink-0 text-parchment/70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </div>
    </motion.a>
  )
}
