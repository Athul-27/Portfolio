export default function Tag({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center border-2 border-ink bg-surface px-2.5 py-1 text-xs font-semibold text-ink shadow-comic-sm ${className}`}
    >
      {children}
    </span>
  )
}
