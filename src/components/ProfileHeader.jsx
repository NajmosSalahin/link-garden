import { MapPin } from 'lucide-react'
import WaveBanner from './WaveBanner'

/* Name, tagline, location, and the brass-ringed avatar, staged over
   the wave banner illustration. The banner sits behind as a hero
   layer; avatar/name/bio/location stay centered on top of it. */
export default function ProfileHeader({ profile }) {
  return (
    <header className="relative flex flex-col items-center gap-4 overflow-hidden rounded-plate pb-6 pt-10 text-center">
      <WaveBanner className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover" />
      <img
        src="/avatar.svg"
        alt={`Avatar of ${profile.name}`}
        width={96}
        height={96}
        className="rounded-full border border-brass/70 bg-panel p-[3px]"
      />
      <div className="flex flex-col items-center gap-1.5">
        <h1 className="font-display text-[2.1rem] font-normal leading-tight tracking-tight text-parchment">
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
