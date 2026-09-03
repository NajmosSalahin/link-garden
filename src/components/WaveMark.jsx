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
      <path d="M2 19 Q12 13 22 19" />
      <path d="M4 16 Q12 11.5 20 16" />
      <path d="M6 13 Q12 9.5 18 13" />
      <path d="M8 10 Q12 7.5 16 10" />
      <circle cx="12" cy="7" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  )
}
