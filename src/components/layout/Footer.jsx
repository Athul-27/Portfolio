import { Github, Linkedin, Mail } from 'lucide-react'
import Container from './Container'
import { siteConfig } from '../../data/siteConfig'

function Social({ href, label, icon }) {
  if (!href) {
    return (
      <span
        title={`${label} — coming soon`}
        className="inline-flex cursor-not-allowed items-center opacity-40"
      >
        {icon}
      </span>
    )
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex transition-transform hover:-translate-y-0.5"
    >
      {icon}
    </a>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t-2 border-ink bg-paper">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 py-10 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-sm">
              ATHUL<span className="text-comic-red">.</span>
            </p>
            <p className="mt-2 text-sm text-muted">{siteConfig.designation}</p>
          </div>

          <div className="flex items-center gap-5 text-ink">
            <Social href={siteConfig.links.email || `mailto:${siteConfig.email}`} label="Email" icon={<Mail size={18} />} />
            <Social href={siteConfig.links.github} label="GitHub" icon={<Github size={18} />} />
            <Social href={siteConfig.links.linkedin} label="LinkedIn" icon={<Linkedin size={18} />} />
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t-2 border-ink py-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Built with React, Vite &amp; Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  )
}
