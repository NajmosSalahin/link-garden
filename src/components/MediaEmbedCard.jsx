import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useClickCount } from '../hooks/useClickCount'
import { ICONS } from '../icons'

/* A richer link block: an embed (YouTube / Spotify) on top of the
   card content. Triggered when a link has an `embed` object —
   see the `video` entry in src/data/links.js. */
export default function MediaEmbedCard({ link }) {
  const reduced = useReducedMotion()
  const [count, bump] = useClickCount(link.id)
  const Icon = ICONS[link.icon] ?? null

  return (
    <motion.div
      whileHover={reduced ? undefined : { y: -2 }}
      className="group overflow-hidden rounded-plate border border-brass-soft bg-panel transition-colors hover:border-brass/50"
    >
      <iframe
        src={link.embed.src}
        title={link.title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="aspect-video w-full border-b border-brass-soft"
      />
      <div className="flex items-center gap-3.5 p-3.5">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-plate-sm border border-brass-soft bg-ink/50 text-brass">
          {Icon ? <Icon className="text-[21px]" aria-hidden="true" /> : null}
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-[15px] font-semibold text-parchment">{link.title}</p>
          {link.description && (
            <p className="mt-0.5 truncate text-[13px] leading-snug text-muted">
              {link.description}
            </p>
          )}
        </div>
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={bump}
          aria-label={`Open ${link.title} in a new tab`}
          className="flex shrink-0 flex-col items-end gap-1.5"
        >
          <ArrowUpRight
            size={16}
            strokeWidth={1.75}
            className="text-brass/70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brass"
            aria-hidden="true"
          />
          {count > 0 && (
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted/70">
              {count} click{count === 1 ? '' : 's'}
            </span>
          )}
        </a>
      </div>
    </motion.div>
  )
}
