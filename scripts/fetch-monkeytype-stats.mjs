/* Fetches the account's Monkeytype personal bests and writes a small
   stats.json the site reads. Run in CI with MONKEYTYPE_APE_KEY set
   (repo secret); without the key it dry-runs and writes nothing.

   Rate limit: /users/personalBests allows 60 calls/hour per ApeKey —
   one run calls it 3 times (15s, 30s, 60s), so daily runs are fine. */
import { readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'stats.json')
const API = 'https://api.monkeytype.com/users/personalBests'
const MODES = [
  ['time', '15'],
  ['time', '30'],
  ['time', '60'],
]

const key = process.env.MONKEYTYPE_APE_KEY
if (!key) {
  console.log('No MONKEYTYPE_APE_KEY in environment — dry run, leaving stats.json untouched.')
  process.exit(0)
}

async function fetchBests(mode, mode2) {
  const res = await fetch(`${API}?mode=${mode}&mode2=${mode2}`, {
    headers: { Authorization: `ApeKey ${key}` },
  })
  if (!res.ok) throw new Error(`personalBests ${mode}/${mode2}: HTTP ${res.status} ${await res.text()}`)
  const json = await res.json()
  const data = json.data ?? []
  // The API returns a single object or an array depending on the mode.
  return (Array.isArray(data) ? data : [data]).filter(Boolean)
}

const entries = []
for (const [mode, mode2] of MODES) {
  try {
    const list = await fetchBests(mode, mode2)
    for (const e of list) entries.push({ ...e, mode: `${mode} ${mode2}` })
  } catch (err) {
    console.warn(err.message)
  }
}

if (entries.length === 0) {
  console.log('No personal bests found — leaving stats.json untouched.')
  process.exit(0)
}

// Best headline = highest wpm; prefer no-punctuation runs as fairer.
entries.sort(
  (a, b) => (a.punctuation ? 1 : 0) - (b.punctuation ? 1 : 0) || b.wpm - a.wpm,
)
const best = entries[0]

const stats = {
  wpm: Math.round(best.wpm),
  acc: Math.round(best.acc * 10) / 10,
  consistency: Math.round(best.consistency * 10) / 10,
  mode: best.mode,
  pbTimestamp: best.timestamp,
  generatedAt: Date.now(),
}

await writeFile(OUT, `${JSON.stringify(stats, null, 2)}\n`)
console.log(`Wrote ${OUT}`)
console.log(JSON.stringify(stats))
