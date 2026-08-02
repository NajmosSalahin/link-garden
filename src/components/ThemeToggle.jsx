import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

const KEY = 'link-garden:theme'

export default function ThemeToggle() {
  const [light, setLight] = useState(
    () => document.documentElement.getAttribute('data-theme') === 'light',
  )

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', light ? 'light' : 'dark')
    try {
      localStorage.setItem(KEY, light ? 'light' : 'dark')
    } catch (e) {}
  }, [light])

  return (
    <button
      type="button"
      onClick={() => setLight((v) => !v)}
      aria-label={light ? 'Switch to dark theme' : 'Switch to light theme'}
      title={light ? 'Switch to dark theme' : 'Switch to light theme'}
      className="flex size-9 cursor-pointer items-center justify-center rounded-plate-sm border border-brass-soft bg-panel text-brass transition-colors hover:border-brass/50 hover:text-brass"
    >
      {light ? <Sun size={15} strokeWidth={1.75} /> : <Moon size={15} strokeWidth={1.75} />}
    </button>
  )
}
