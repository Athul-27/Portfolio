import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import Container from '../layout/Container'
import Button from '../ui/Button'
import { siteConfig } from '../../data/siteConfig'
import { useActiveSection } from '../../lib/useActiveSection'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  const ids = useMemo(() => siteConfig.nav.map((n) => n.id), [])
  const active = useActiveSection(ids)

  const go = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
  }

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/90 backdrop-blur">
      <Container>
        <nav className="flex h-[70px] items-center justify-between">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              go('home')
            }}
            className="font-display text-sm sm:text-base"
            aria-label="Athul S — home"
          >
            ATHUL
            <span className="text-comic-red">.</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {siteConfig.nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    go(item.id)
                  }}
                  className={`px-3 py-2 font-heading text-sm font-semibold transition-colors ${
                    active === item.id ? 'text-comic-red' : 'text-ink hover:text-comic-red'
                  }`}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button
              as={siteConfig.links.resume ? 'a' : 'button'}
              href={siteConfig.links.resume || undefined}
              variant="yellow"
              disabled={!siteConfig.links.resume}
              {...(siteConfig.links.resume
                ? { download: true, external: true }
                : { title: 'Resume — coming soon' })}
            >
              <Download size={16} />
              Resume
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center border-2 border-ink bg-surface p-2 shadow-comic-sm md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
            className="overflow-hidden border-t-2 border-ink bg-paper md:hidden"
          >
            <Container>
              <ul className="flex flex-col py-3">
                {siteConfig.nav.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        go(item.id)
                      }}
                      className={`block py-2.5 font-heading font-semibold ${
                        active === item.id ? 'text-comic-red' : 'text-ink'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li className="pt-3">
                  <Button
                    as={siteConfig.links.resume ? 'a' : 'button'}
                    href={siteConfig.links.resume || undefined}
                    variant="yellow"
                    disabled={!siteConfig.links.resume}
                    className="w-full"
                    {...(siteConfig.links.resume
                      ? { download: true, external: true }
                      : { title: 'Resume — coming soon' })}
                  >
                    <Download size={16} />
                    Resume
                  </Button>
                </li>
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
