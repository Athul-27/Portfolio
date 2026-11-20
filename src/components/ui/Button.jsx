const base =
  'inline-flex items-center justify-center gap-2 border-2 border-ink px-5 py-2.5 font-heading text-sm font-bold tracking-tight shadow-comic comic-press focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper'

const variants = {
  primary: 'bg-comic-red text-surface',
  accent: 'bg-comic-blue text-surface',
  yellow: 'bg-comic-yellow text-ink',
  secondary: 'bg-surface text-ink',
  github: 'bg-ink text-surface',
  linkedin: 'bg-[#0A66C2] text-surface',
}

export default function Button({
  as,
  href,
  variant = 'primary',
  disabled = false,
  external = false,
  className = '',
  children,
  ...rest
}) {
  const classes = `${base} ${variants[variant]} ${
    disabled ? 'cursor-not-allowed opacity-50 shadow-comic' : ''
  } ${className}`

  const isLink = !disabled && !!href

  if (isLink) {
    const Tag = as || 'a'
    const linkProps =
      Tag === 'a'
        ? {
            href,
            ...(external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {}),
          }
        : {}
    return (
      <Tag className={classes} {...linkProps} {...rest}>
        {children}
      </Tag>
    )
  }

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      aria-disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}
