/* Generates public/og-image.png (1200×630) from an inline SVG,
   so the shared preview carries the same field-journal look.
   Run: npm run og-image */
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const outFile = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'og-image.png')

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#101914"/>
  <rect x="0" y="0" width="1200" height="630" fill="url(#glow)"/>
  <defs>
    <radialGradient id="glow" cx="0.5" cy="0.45" r="0.75">
      <stop offset="0" stop-color="#16211C"/>
      <stop offset="1" stop-color="#101914"/>
    </radialGradient>
  </defs>
  <rect x="34" y="34" width="1132" height="562" fill="none" stroke="#B8925A" stroke-opacity="0.45" stroke-width="2"/>
  <g stroke="#B8925A" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <path d="M600 300C600 300 600 150 540 88"/>
    <path d="M600 240C600 240 680 208 692 142"/>
    <path d="M600 348C600 348 510 330 496 268"/>
    <path d="M600 414C600 414 700 392 714 312"/>
    <path d="M600 474C600 474 500 456 486 386"/>
  </g>
  <circle cx="600" cy="300" r="26" fill="#B8925A"/>
  <line x1="220" y1="500" x2="980" y2="500" stroke="#B8925A" stroke-opacity="0.45" stroke-width="2"/>
  <line x1="340" y1="512" x2="860" y2="512" stroke="#B8925A" stroke-opacity="0.3" stroke-width="2"/>
  <circle cx="220" cy="500" r="6" fill="#B8925A"/>
  <circle cx="980" cy="500" r="6" fill="#B8925A"/>
</svg>`

await sharp(Buffer.from(svg)).resize(1200, 630).png().toFile(outFile)
console.log('Wrote', outFile)
