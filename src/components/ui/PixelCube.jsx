import { motion, useReducedMotion } from 'framer-motion'

// Floating isometric pixel cube with comic outlines. Gently "bobs"
// using stepped easing to feel stop-motion / 8-bit. Disabled for
// reduced-motion users.
export default function PixelCube({ className = '' }) {
  const reduce = useReducedMotion()

  const bob = reduce
    ? {}
    : {
        animate: { y: [0, -10, 0] },
        transition: {
          duration: 3.2,
          repeat: Infinity,
          ease: 'steps(3, end)',
        },
      }

  return (
    <motion.div className={className} {...bob}>
      <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
        <g stroke="#15151A" strokeWidth="3" strokeLinejoin="round">
          {/* top face */}
          <polygon points="100,30 165,65 100,100 35,65" fill="#F5C518" />
          {/* left face */}
          <polygon points="35,65 100,100 100,170 35,135" fill="#2F5BEA" />
          {/* right face */}
          <polygon points="165,65 100,100 100,170 165,135" fill="#E23A3A" />
        </g>
        {/* pixel grid accents on faces */}
        <g fill="rgba(21,21,26,0.18)">
          <rect x="62" y="55" width="14" height="9" />
          <rect x="48" y="92" width="12" height="14" />
          <rect x="116" y="92" width="12" height="14" />
        </g>
      </svg>
    </motion.div>
  )
}
