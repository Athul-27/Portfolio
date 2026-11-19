import { Mail, Github, Linkedin } from 'lucide-react'
import Container from '../layout/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import SocialLink from '../ui/SocialLink'
import { siteConfig } from '../../data/siteConfig'

export default function Contact() {
  return (
    <section id="contact" className="border-t-2 border-ink">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          index="07"
          title="Contact"
          subtitle="Open to software engineering and AI/ML opportunities and interesting conversations."
        />

        <Reveal>
          <div className="relative overflow-hidden border-2 border-ink bg-surface p-6 shadow-comic sm:p-10">
            <div className="absolute inset-0 pixel-grid opacity-70" aria-hidden="true" />

            <div className="relative grid gap-8 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <h3 className="font-heading text-2xl font-extrabold leading-tight text-ink sm:text-3xl">
                  Let&apos;s build something <span className="text-comic-red">thoughtful</span>.
                </h3>
                <p className="mt-3 max-w-xl text-muted">
                  Whether it&apos;s a full-stack role, an AI/ML project, or just a question about
                  something on this page — I&apos;d love to hear from you. Drop me a line any time.
                </p>
                <div className="mt-6">
                  <Button as="a" href={`mailto:${siteConfig.email}`} variant="primary">
                    <Mail size={16} />
                    {siteConfig.email}
                  </Button>
                </div>
              </div>

              <div className="border-2 border-ink bg-paper p-5">
                <p className="mb-4 font-display text-[10px] text-ink">ELSEWHERE</p>
                <div className="flex flex-col gap-3">
                  <SocialLink
                    href={siteConfig.links.github}
                    label="GitHub"
                    icon={<Github size={16} />}
                  />
                  <SocialLink
                    href={siteConfig.links.linkedin}
                    label="LinkedIn"
                    icon={<Linkedin size={16} />}
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
