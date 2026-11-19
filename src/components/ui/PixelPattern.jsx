// Deterministic, horizontally-mirrored pixel sprite (Minecraft/space-invader feel).
// Generates the same pattern for the same seed, so it never re-renders randomly.
export default function PixelPattern({ seed = 'athul', accent = '#E23A3A', className = '' }) {
  let h = 2166136261
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  let x = h >>> 0
  const rand = () => {
    x ^= x << 13
    x >>>= 0
    x ^= x >>> 17
    x ^= x << 5
    x >>>= 0
    return x / 0xffffffff
  }

  const half = 6
  const rows = 8
  const cols = half * 2
  const cell = 100 / cols
  const row = 100 / rows

  const rects = []
  for (let r = 0; r < rows; r++) {
    const left = []
    for (let c = 0; c < half; c++) {
      left.push(rand() > 0.52)
    }
    const mirrored = [...left, ...left.slice().reverse()]
    for (let c = 0; c < cols; c++) {
      if (mirrored[c]) {
        rects.push(
          <rect
            key={`${r}-${c}`}
            x={c * cell}
            y={r * row}
            width={cell}
            height={row}
            fill={accent}
          />
        )
      }
    }
  }

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-hidden="true"
    >
      {rects}
    </svg>
  )
}
