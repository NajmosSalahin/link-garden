import SprigMark from './SprigMark'

export default function Footer({ name }) {
  return (
    <footer className="mt-2 flex flex-col items-center gap-2 border-t border-brass-soft pt-6">
      <SprigMark className="size-4 text-brass/80" />
      <p className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
        Grown by hand · © {new Date().getFullYear()} {name}
      </p>
    </footer>
  )
}
