import { useCallback, useEffect, useState } from 'react'

/* Loads public/stats.json (written by the daily GitHub Action) and
   exposes a manual refresh. Falls back silently on any failure. */
export function useLiveStats(endpoint = '/stats.json') {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(endpoint, { cache: 'no-store' })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStats(await res.json())
      setError(false)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [endpoint])

  useEffect(() => {
    load()
  }, [load])

  return { stats, loading, error, refresh: load }
}
