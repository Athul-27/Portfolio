import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'
import Container from '../layout/Container'
import Button from '../ui/Button'
import SocialLink from '../ui/SocialLink'
import ComicBurst from '../ui/ComicBurst'
import { siteConfig } from '../../data/siteConfig'

export default function Hero() {
  const reduce = useReducedMotion()
  const go = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
  }

  const fade = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 speed-rays" aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 w-1/2 halftone opacity-50" aria-hidden="true" />

      <Container className="relative">
        <div className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <motion.span
              {...fade(0)}
              className="inline-flex items-center border-2 border-ink bg-comic-pink px-3 py-1 font-display text-base tracking-wide text-ink shadow-comic-sm"
            >
              {siteConfig.designation}
            </motion.span>

            <motion.h1
              {...fade(0.08)}
              className="comic-stroke mt-5 font-display text-6xl leading-[0.95] tracking-wide text-ink sm:text-8xl"
            >
              ATHUL <span className="text-comic-red">S</span>
            </motion.h1>

            <motion.div
              {...fade(0.16)}
              className="relative mt-6 max-w-xl border-2 border-ink bg-surface p-4 shadow-comic"
            >
              <span
                className="absolute -bottom-[9px] left-8 h-4 w-4 rotate-45 border-b-2 border-r-2 border-ink bg-surface"
                aria-hidden="true"
              />
              <p className="font-heading text-lg font-bold text-ink sm:text-xl">
                {siteConfig.tagline}
              </p>
            </motion.div>

            <motion.p
              {...fade(0.24)}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {siteConfig.intro}
            </motion.p>

            <motion.div
              {...fade(0.32)}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button variant="primary" onClick={() => go('projects')}>
                View Projects
                <ArrowRight size={16} />
              </Button>

              <Button
                as={siteConfig.links.resume ? 'a' : 'button'}
                href={siteConfig.links.resume || undefined}
                variant="secondary"
                disabled={!siteConfig.links.resume}
                {...(siteConfig.links.resume
                  ? { download: true, external: true }
                  : { title: 'Resume — coming soon' })}
              >
                <Download size={16} />
                Download Resume
              </Button>

              <SocialLink
                href={siteConfig.links.github}
                label="GitHub"
                variant="secondary"
                icon={<Github size={16} />}
              />
              <SocialLink
                href={siteConfig.links.linkedin}
                label="LinkedIn"
                variant="secondary"
                icon={<Linkedin size={16} />}
              />
            </motion.div>
          </div>

          <motion.div
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.6, delay: 0.2 },
                })}
            className="relative mx-auto hidden h-64 w-64 sm:h-80 sm:w-80 lg:block"
          >
            <div
              className="halftone absolute inset-0 rotate-6 border-2 border-ink bg-comic-yellow shadow-comic-lg"
              aria-hidden="true"
            />
            <ComicBurst label="HI!" accent="#FF4FA3" className="relative h-full w-full p-6" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
