import Container from '../layout/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Tag from '../ui/Tag'
import { siteConfig } from '../../data/siteConfig'

const focus = ['Software Engineering', 'Full-Stack', 'AI / ML', 'Backend APIs']

export default function About() {
  return (
    <section id="about" className="border-t-2 border-ink">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          index="01"
          title="About"
          subtitle="A quick look at who I am and how I work."
        />

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-5 text-base leading-relaxed text-ink">
            <p className="text-lg">
              I&apos;m an <strong>Associate Software Engineer</strong> and MCA graduate with
              experience across software development, machine learning, deep learning, and
              full-stack application development.
            </p>
            <p className="text-muted">
              My interests sit at the intersection of building practical software and
              developing AI-driven applications. I like taking ambiguous, real-world problems
              and turning them into clean, reliable systems — from the database and API up to
              the interface.
            </p>
            <p className="text-muted">
              My approach to engineering is straightforward: keep things simple, make them
              well-tested, and understand the problem before reaching for the clever
              solution. I care about code that other people can read, run, and build on.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-2 border-ink bg-surface shadow-comic">
              <div className="halftone border-b-2 border-ink px-5 py-3">
                <span className="font-display text-[10px] text-ink">AT A GLANCE</span>
              </div>
              <div className="space-y-5 p-5">
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted">Role</p>
                  <p className="font-heading font-bold text-ink">{siteConfig.designation}</p>
                </div>
                <div>
                  <p className="mb-2 text-xs uppercase tracking-wide text-muted">Focus</p>
                  <div className="flex flex-wrap gap-2">
                    {focus.map((f) => (
                      <Tag key={f}>{f}</Tag>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted">Education</p>
                  <p className="font-semibold text-ink">MCA — VIT (2024–2026)</p>
                  <p className="font-semibold text-ink">BCA — RCMAS, MG University</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted">Notable work</p>
                  <p className="font-semibold text-ink">Aikya — face-recognition access control</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
