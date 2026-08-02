import SprigMark from './SprigMark'
import LinkCard from './LinkCard'
import MediaEmbedCard from './MediaEmbedCard'

/* An index entry in the field journal: brass hairline, one sprig,
   and the category name set as spaced small-caps specimen tags. */
export default function CategorySection({ name, links }) {
  return (
    <section aria-labelledby={`section-${name}`} className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span aria-hidden="true" className="h-px flex-1 bg-brass-soft" />
        <SprigMark className="size-3.5 text-brass" />
        <h2
          id={`section-${name}`}
          className="whitespace-nowrap font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-brass"
        >
          {name}
        </h2>
        <span aria-hidden="true" className="h-px flex-1 bg-brass-soft" />
      </div>
      <div className="flex flex-col gap-3">
        {links.map((link) =>
          link.embed ? <MediaEmbedCard key={link.id} link={link} /> : <LinkCard key={link.id} link={link} />,
        )}
      </div>
    </section>
  )
}
