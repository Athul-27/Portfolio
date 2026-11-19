// Fills a project card's header bar with a comic look: halftone dots,
// diagonal speed lines, and a big ink-outlined index number.
export default function ComicPanel({ number = '01', className = '' }) {
  return (
    <div className={`absolute inset-0 ${className}`} aria-hidden="true">
      <div className="halftone-light absolute inset-0 opacity-60" />
      <svg viewBox="0 0 300 144" preserveAspectRatio="none" className="absolute inset-0 h-full w-full opacity-30">
        <g stroke="#15151A" strokeWidth="1.5">
          <path d="M0,120 L120,0 M20,140 L150,10 M60,144 L190,20 M110,144 L240,24 M170,144 L300,40 M230,144 L300,90" />
        </g>
      </svg>
      <span className="absolute bottom-1 right-3 font-display text-5xl leading-none text-ink/85 sm:text-6xl">
        {number}
      </span>
    </div>
  )
}
