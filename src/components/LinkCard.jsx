import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Check, Copy } from 'lucide-react'
import { useClickCount } from '../hooks/useClickCount'
import { ICONS } from '../icons'

function CardContent({ link }) {
  const Icon = ICONS[link.icon] ?? null
  return (
    <>
      <span className="flex size-11 shrink-0 items-center justify-center rounded-plate-sm border border-brass-soft bg-ink/50 text-brass">
        {Icon ? <Icon className="text-[21px]" aria-hidden="true" /> : null}
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
      {link.image && (
        <img
          src={link.image}
          alt=""
          width={48}
          height={48}
          loading="lazy"
          className="size-12 shrink-0 rounded-plate-sm border border-brass-soft object-cover"
        />
      )}
    </>
  )
}

/* Every link renders as a considered card — icon, title, optional
   description, optional thumbnail — not a bare anchor. */
export default function LinkCard({ link }) {
  const reduced = useReducedMotion()
  const [count, bump] = useClickCount(link.id)
  const [copied, setCopied] = useState(false)

  const isEmail = link.url.startsWith('mailto:')

  if (isEmail) {
    const address = link.url.replace('mailto:', '')
    const copyEmail = async () => {
      try {
        await navigator.clipboard.writeText(address)
      } catch (e) {}
      bump()
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
    return (
      <motion.button
        type="button"
        onClick={copyEmail}
        whileHover={reduced ? undefined : { y: -2 }}
        whileTap={reduced ? undefined : { scale: 0.99 }}
        aria-label={`Copy email address ${address}`}
        className="group flex w-full items-center gap-3.5 rounded-plate border border-brass-soft bg-panel p-3.5 text-left transition-colors hover:border-brass/50 hover:bg-panel-lift"
      >
        <CardContent link={link} />
        <span
          aria-live="polite"
          className="flex shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-brass"
        >
          {copied ? (
            <>
              <Check size={13} strokeWidth={2} aria-hidden="true" /> Copied
            </>
          ) : (
            <>
              <Copy size={13} strokeWidth={1.75} aria-hidden="true" /> Copy
            </>
          )}
        </span>
      </motion.button>
    )
  }

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={bump}
      whileHover={reduced ? undefined : { y: -2 }}
      whileTap={reduced ? undefined : { scale: 0.99 }}
      className="group flex w-full items-center gap-3.5 rounded-plate border border-brass-soft bg-panel p-3.5 text-left transition-colors hover:border-brass/50 hover:bg-panel-lift"
    >
      <CardContent link={link} />
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
    </motion.a>
  )
}
