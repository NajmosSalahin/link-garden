/* The one botanical line-mark, reused everywhere — category rules,
   featured card, footer. One sprig, drawn once, in brass. */
export default function SprigMark({ className = '', label = '' }) {
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
      <path d="M12 21V8" />
      <path d="M12 8C12 8 12 4.5 9.5 3" />
      <path d="M12 11.5C12 11.5 15 9.5 15.5 6.5" />
      <path d="M12 15C12 15 8.5 14 8 11" />
      <path d="M12 18C12 18 16 17 16.5 13.5" />
      <circle cx="12" cy="21" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}
