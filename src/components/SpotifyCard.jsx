import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Play } from 'lucide-react'
import { SiSpotify } from 'react-icons/si'
import { useClickCount } from '../hooks/useClickCount'

/* "Now listening" plate for links with `spotify: true` — no third-party
   iframe; a designed wine tile + an outbound Listen button instead. */
export default function SpotifyCard({ link }) {
  const reduced = useReducedMotion()
  const [count, bump] = useClickCount(link.id)

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={bump}
      whileHover={reduced ? undefined : { y: -2 }}
      whileTap={reduced ? undefined : { scale: 0.99 }}
      aria-label={`${link.title} — opens on Spotify`}
      className="group flex w-full flex-col gap-3 rounded-plate border border-brass-soft bg-panel p-4 transition-colors hover:border-brass/50 hover:bg-panel-lift"
    >
      <span className="flex w-full items-center gap-3.5">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-plate-sm bg-wine text-parchment shadow-[0_8px_20px_-10px_var(--wine-deep)]">
          <Play size={18} strokeWidth={1.75} fill="currentColor" aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1 text-left">
          <span className="block truncate text-[15px] font-semibold text-parchment">
            {link.title}
          </span>
          {link.description && (
            <span className="mt-0.5 block truncate text-[13px] leading-snug text-muted">
              {link.description}
            </span>
          )}
        </span>
        <span className="flex shrink-0 flex-col items-end gap-1.5">
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
        </span>
      </span>

      <span aria-hidden="true" className="h-px w-full bg-brass-soft" />

      <span className="flex w-full items-center justify-center gap-2 rounded-plate-sm border border-brass/50 px-3 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-brass transition-colors group-hover:border-brass group-hover:bg-brass group-hover:text-ink">
        <SiSpotify size={13} aria-hidden="true" />
        Listen on Spotify
      </span>
    </motion.a>
  )
}
