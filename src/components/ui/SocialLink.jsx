import Button from './Button'

// Renders a social/action control. If `href` is empty (placeholder),
// it becomes an inert "coming soon" control instead of a broken link.
export default function SocialLink({
  href,
  label,
  icon,
  variant = 'secondary',
  className = '',
}) {
  if (!href) {
    return (
      <Button
        variant={variant}
        disabled
        title={`${label} — link coming soon`}
        className={className}
      >
        {icon}
        <span>{label}</span>
        <span className="ml-1 font-display text-[8px] text-ink/60">soon</span>
      </Button>
    )
  }

  return (
    <Button as="a" href={href} external variant={variant} className={className}>
      {icon}
      <span>{label}</span>
    </Button>
  )
}
