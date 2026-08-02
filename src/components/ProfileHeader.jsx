import { MapPin } from 'lucide-react'

/* Name, tagline, location, and the brass-ringed avatar.
   Content comes from profile object passed by App. */
export default function ProfileHeader({ profile }) {
  return (
    <header className="flex flex-col items-center gap-4 text-center">
      <img
        src="/avatar.svg"
        alt={`Avatar of ${profile.name}`}
        width={96}
        height={96}
        className="rounded-full border border-brass/70 p-[3px]"
      />
      <div className="flex flex-col items-center gap-1.5">
        <h1 className="font-display text-[2.1rem] font-semibold leading-tight tracking-tight text-parchment">
          {profile.name}
        </h1>
        <p className="max-w-xs text-[15px] leading-relaxed text-muted">{profile.bio}</p>
        {profile.location && (
          <p className="mt-1 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-brass">
            <MapPin size={11} strokeWidth={1.75} aria-hidden="true" />
            <span>{profile.location}</span>
          </p>
        )}
      </div>
    </header>
  )
}
