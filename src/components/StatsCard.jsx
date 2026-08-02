import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Keyboard, RefreshCw } from 'lucide-react'
import { useClickCount } from '../hooks/useClickCount'
import { useLiveStats } from '../hooks/useLiveStats'

function timeAgo(ts) {
  if (!ts) return ''
  const diff = Math.max(0, Date.now() - ts)
  const mins = Math.floor(diff / 60000)
  if (mins < 60) return `${Math.max(1, mins)}m`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours}h`
  return `${Math.floor(hours / 24)}d`
}

const BLOCKS = [
  { key: 'wpm', label: 'WPM', value: (s) => (s.wpm != null ? String(s.wpm) : '—') },
  { key: 'acc', label: 'ACC', value: (s) => (s.acc != null ? `${s.acc}%` : '—') },
  {
    key: 'consistency',
    label: 'CONSISTENCY',
    value: (s) => (s.consistency != null ? `${s.consistency}%` : '—'),
  },
]

/* Live personal-bests card (links with `stats: true`): three labeled
   stat blocks in the specimen style, fed by public/stats.json. */
export default function StatsCard({ link }) {
  const reduced = useReducedMotion()
  const [count, bump] = useClickCount(link.id)
  const { stats, loading, error, refresh } = useLiveStats()

  return (
    <motion.div
      whileHover={reduced ? undefined : { y: -2 }}
      className="group flex w-full flex-col gap-3 rounded-plate border border-brass-soft bg-panel p-4 transition-colors hover:border-brass/50 hover:bg-panel-lift"
    >
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={bump}
        aria-label={`${link.title} — opens in a new tab`}
        className="flex w-full items-center gap-3.5"
      >
        <span className="flex size-11 shrink-0 items-center justify-center rounded-plate-sm border border-brass-soft bg-ink/50 text-brass">
          <Keyboard size={20} strokeWidth={1.75} aria-hidden="true" />
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
      </a>

      {!error && (
        <>
          <span aria-hidden="true" className="h-px w-full bg-brass-soft" />
          <span className="grid grid-cols-3 gap-2" aria-live="polite">
            {BLOCKS.map((block) => (
              <span key={block.key} className="flex min-w-0 flex-col items-start gap-0.5">
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-muted">
                  {block.label}
                </span>
                <span className="truncate font-mono text-[1.35rem] font-bold leading-tight text-brass">
                  {loading || !stats ? '—' : block.value(stats)}
                </span>
              </span>
            ))}
          </span>
          <span aria-hidden="true" className="h-px w-full bg-brass-soft" />
          <span className="flex items-center justify-between">
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted/70">
              {loading ? 'Fetching stats' : `Updated ${timeAgo(stats.generatedAt)} ago`}
            </span>
            <button
              type="button"
              onClick={refresh}
              aria-label="Refresh stats"
              title="Refresh stats"
              className="flex cursor-pointer items-center gap-1.5 text-brass/70 transition-colors hover:text-brass"
            >
              <RefreshCw size={11} strokeWidth={2} aria-hidden="true" className={loading ? 'animate-spin' : ''} />
            </button>
          </span>
        </>
      )}
    </motion.div>
  )
}
