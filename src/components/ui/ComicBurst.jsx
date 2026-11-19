import { motion, useReducedMotion } from 'framer-motion'

function starPoints({ spikes = 14, outer = 96, inner = 72, cx = 100, cy = 100 }) {
  const pts = []
  const step = Math.PI / spikes
  let rot = -Math.PI / 2
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? outer : inner
    pts.push(`${(cx + Math.cos(rot) * r).toFixed(1)},${(cy + Math.sin(rot) * r).toFixed(1)}`)
    rot += step
  }
  return pts.join(' ')
}

// Manga-style starburst badge with halftone + ink outline.
export default function ComicBurst({ label = 'HI!', accent = '#FF4FA3', className = '' }) {
  const reduce = useReducedMotion()

  const anim = reduce
    ? {}
    : {
        animate: { rotate: [-4, 4, -4] },
        transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
      }

  return (
    <motion.div className={className} {...anim}>
      <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
        <defs>
          <pattern id="burst-dots" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.4" fill="rgba(21,21,26,0.25)" />
          </pattern>
        </defs>
        <polygon points={starPoints()} fill="#15151A" transform="translate(5 6)" />
        <polygon points={starPoints()} fill={accent} stroke="#15151A" strokeWidth="3" />
        <polygon points={starPoints({ outer: 80, inner: 58 })} fill="url(#burst-dots)" />
        <text
          x="100"
          y="112"
          textAnchor="middle"
          fontFamily="Bangers, cursive"
          fontSize="58"
          fill="#15151A"
        >
          {label}
        </text>
      </svg>
    </motion.div>
  )
}
