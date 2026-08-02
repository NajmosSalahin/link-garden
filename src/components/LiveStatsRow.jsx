import { RefreshCw } from 'lucide-react'
import { useLiveStats } from '../hooks/useLiveStats'

function timeAgo(ts) {
  if (!ts) return ''
  const diff = Math.max(0, Date.now() - ts)
  const mins = Math.floor(diff / 60000)
  if (mins < 60) return `${Math.max(1, mins)}m`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours}h`
  const days = Math.floor(hours / 24)
  return `${days}d`
}

/* The specimen-tag row under a live-stats card: best run, accuracy,
   and when it was last fetched. Quiet when the API is unreachable. */
export default function LiveStatsRow() {
  const { stats, loading, error, refresh } = useLiveStats()

  if (error) return null
  if (loading) {
    return (
      <span className="flex items-center justify-between border-t border-brass-soft pt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-muted/70">
        <span>Fetching stats</span>
      </span>
    )
  }
  if (!stats || stats.wpm == null) return null

  return (
    <span className="flex items-center justify-between gap-3 border-t border-brass-soft pt-2">
      <span className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-brass">
        Best {stats.mode} · {stats.wpm} wpm · {stats.acc}% acc
      </span>
      <span className="flex items-center gap-2">
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted/70">
          Updated {timeAgo(stats.generatedAt)} ago
        </span>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            refresh()
          }}
          aria-label="Refresh stats"
          title="Refresh stats"
          className="cursor-pointer text-brass/70 transition-colors hover:text-brass"
        >
          <RefreshCw
            size={11}
            strokeWidth={2}
            aria-hidden="true"
            className={loading ? 'animate-spin' : ''}
          />
        </button>
      </span>
    </span>
  )
}
