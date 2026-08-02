import { useEffect, useState } from 'react'

/* Fetches Spotify's public oEmbed endpoint for a playlist/album/track
   URL (CORS-open) to get the current cover art + title. Results are
   cached per URL so re-mounts don't refetch. */
const cache = new Map()

export function useOEmbed(url) {
  const [data, setData] = useState(cache.get(url) ?? null)
  const [loading, setLoading] = useState(!data)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (cache.has(url)) {
      setData(cache.get(url))
      setLoading(false)
      setError(false)
      return
    }
    let cancelled = false
    setLoading(true)
    fetch(`https://open.spotify.com/oembed?url=${encodeURIComponent(url)}`)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error(`HTTP ${res.status}`))))
      .then((json) => {
        if (cancelled) return
        const result = { image: json.thumbnail_url ?? '', title: json.title ?? '' }
        cache.set(url, result)
        setData(result)
        setError(false)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [url])

  return { data, loading, error }
}
