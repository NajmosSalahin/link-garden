/* Wide, low-ink wave-and-sun band that sits behind the avatar.
   Travel-poster treatment: dashed sun dial, poster-red sun disc,
   nested wave stack in sun-yellow. Decorative only — aria-hidden. */
export default function HeaderBanner() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative -mx-5 h-36 overflow-hidden md:h-44"
    >
      <svg
        viewBox="0 0 560 200"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        {/* dashed sun dial — sits at bottom, suggests rising sun */}
        <circle
          cx="280"
          cy="200"
          r="150"
          fill="none"
          stroke="var(--brass-soft)"
          strokeWidth="1"
          strokeDasharray="2 6"
        />
        {/* poster-red sun disc — peeks above the waves */}
        <circle cx="280" cy="140" r="34" fill="var(--wine)" opacity="0.85" />
        {/* sun rays — short hairlines radiating from the disc */}
        <g
          stroke="var(--brass)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.55"
        >
          <line x1="280" y1="86" x2="280" y2="78" />
          <line x1="220" y1="100" x2="214" y2="94" />
          <line x1="340" y1="100" x2="346" y2="94" />
          <line x1="200" y1="140" x2="192" y2="140" />
          <line x1="360" y1="140" x2="368" y2="140" />
          <line x1="220" y1="180" x2="214" y2="186" />
          <line x1="340" y1="180" x2="346" y2="186" />
        </g>
        {/* nested wave stack — the Hokusai field at the bottom */}
        <g
          fill="none"
          stroke="var(--brass)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M-20 178 Q140 148 300 178 T620 178" />
          <path d="M-20 162 Q140 134 300 162 T620 162" opacity="0.7" />
          <path d="M-20 146 Q140 122 300 146 T620 146" opacity="0.45" />
        </g>
        {/* top hairline rule with bulleted ends — echoes the field-journal frame */}
        <line
          x1="40"
          y1="22"
          x2="520"
          y2="22"
          stroke="var(--brass-soft)"
          strokeWidth="1"
        />
        <circle cx="40" cy="22" r="2" fill="var(--brass)" />
        <circle cx="520" cy="22" r="2" fill="var(--brass)" />
      </svg>
    </div>
  )
}
