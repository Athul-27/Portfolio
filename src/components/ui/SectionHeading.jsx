export default function SectionHeading({ index, title, subtitle }) {
  return (
    <div className="mb-10 sm:mb-14">
      <div className="mb-4 flex items-center gap-3">
        <span className="font-display text-[10px] text-comic-red sm:text-xs">
          {'//'} {index}
        </span>
        <span className="h-[3px] w-12 bg-ink" aria-hidden="true" />
      </div>
      <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-base text-muted">{subtitle}</p>
      )}
    </div>
  )
}
