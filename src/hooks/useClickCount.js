import { useEffect, useState } from 'react'

const KEY = 'link-garden:clicks'

/* Tiny local click counter per link — localStorage only, no backend.
   Gives a rough sense of what gets clicked. */
export function useClickCount(id) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    try {
      const store = JSON.parse(localStorage.getItem(KEY) || '{}')
      setCount(store[id] || 0)
    } catch (e) {}
  }, [id])

  const bump = () => {
    setCount((c) => {
      const next = c + 1
      try {
        const store = JSON.parse(localStorage.getItem(KEY) || '{}')
        store[id] = next
        localStorage.setItem(KEY, JSON.stringify(store))
      } catch (e) {}
      return next
    })
  }

  return [count, bump]
}
