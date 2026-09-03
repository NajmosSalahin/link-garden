/* Generates public/og-image.png (1200×630) from an inline SVG,
   so the shared preview carries the same field-journal look.
   Run: npm run og-image */
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const outFile = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'og-image.png')

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="0.5" cy="0.55" r="0.75">
      <stop offset="0" stop-color="#152040"/>
      <stop offset="1" stop-color="#091022"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#091022"/>
  <rect x="0" y="0" width="1200" height="630" fill="url(#glow)"/>

  <!-- Frame: outer rule + inner hairline -->
  <rect x="34" y="34" width="1132" height="562" fill="none" stroke="#F5C24A" stroke-opacity="0.45" stroke-width="2"/>
  <rect x="50" y="50" width="1100" height="530" fill="none" stroke="#F5C24A" stroke-opacity="0.18" stroke-width="1"/>

  <!-- Dashed sun dial behind the disc -->
  <circle cx="600" cy="430" r="260" fill="none" stroke="#F5C24A" stroke-opacity="0.35" stroke-width="1.5" stroke-dasharray="4 10"/>

  <!-- Poster-red sun disc -->
  <circle cx="600" cy="330" r="78" fill="#C8302C" opacity="0.9"/>

  <!-- Sun rays radiating from the disc -->
  <g stroke="#F5C24A" stroke-width="2" stroke-linecap="round" opacity="0.6">
    <line x1="600" y1="220" x2="600" y2="200"/>
    <line x1="470" y1="250" x2="456" y2="236"/>
    <line x1="730" y1="250" x2="744" y2="236"/>
    <line x1="430" y1="330" x2="410" y2="330"/>
    <line x1="770" y1="330" x2="790" y2="330"/>
    <line x1="470" y1="410" x2="456" y2="424"/>
    <line x1="730" y1="410" x2="744" y2="424"/>
    <line x1="510" y1="240" x2="500" y2="222"/>
    <line x1="690" y1="240" x2="700" y2="222"/>
  </g>

  <!-- Hokusai wave stack at the bottom -->
  <g stroke="#F5C24A" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M-40 470 Q300 410 600 470 T1240 470" stroke-width="6"/>
    <path d="M-40 440 Q300 388 600 440 T1240 440" stroke-width="5" opacity="0.7"/>
    <path d="M-40 412 Q300 366 600 412 T1240 412" stroke-width="4" opacity="0.5"/>
  </g>

  <!-- Title text -->
  <text x="600" y="178" text-anchor="middle" font-family="'Archivo Black','Helvetica Neue',Helvetica,Arial,sans-serif" font-size="64" font-weight="900" fill="#F4ECD6" letter-spacing="2">NAJMUS SALAHIN</text>

  <!-- Tagline in Space Mono style -->
  <text x="600" y="218" text-anchor="middle" font-family="'Space Mono','Courier New',monospace" font-size="18" fill="#F5C24A" letter-spacing="6">EVERY LINK · ONE QUIET PLACE</text>

  <!-- Hairline rule with bulleted ends -->
  <line x1="340" y1="552" x2="860" y2="552" stroke="#F5C24A" stroke-opacity="0.45" stroke-width="2"/>
  <line x1="420" y1="566" x2="780" y2="566" stroke="#F5C24A" stroke-opacity="0.3" stroke-width="1.5"/>
  <circle cx="340" cy="552" r="5" fill="#F5C24A"/>
  <circle cx="860" cy="552" r="5" fill="#F5C24A"/>
  <text x="600" y="548" text-anchor="middle" font-family="'Space Mono','Courier New',monospace" font-size="13" fill="#F4ECD6" letter-spacing="4" opacity="0.7">LINK GARDEN</text>
</svg>`

await sharp(Buffer.from(svg)).resize(1200, 630).png().toFile(outFile)
console.log('Wrote', outFile)
