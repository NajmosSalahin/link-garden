/* The one mark, reused everywhere — category rules, featured card,
   footer, header banner. A Hokusai-inspired wave stack, drawn once
   in the inherited color. */
export default function WaveMark({ className = '', label = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden={label ? undefined : 'true'}
      role={label ? 'img' : undefined}
      aria-label={label}
      className={className}
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 17 Q12 11 22 17" />
      <path d="M4 14 Q12 9.5 20 14" />
      <path d="M6 11 Q12 7.5 18 11" />
      <path d="M8 8 Q12 5.5 16 8" />
      <circle cx="12" cy="5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
