import WaveMark from './WaveMark'

export default function Footer({ name }) {
  return (
    <footer className="mt-2 flex flex-col items-center gap-2 border-t border-brass-soft pt-6">
      <WaveMark className="size-4 text-brass/80" />
      <p className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
        Filed under travel · © {new Date().getFullYear()} {name}
      </p>
    </footer>
  )
}
