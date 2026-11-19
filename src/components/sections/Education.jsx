import Container from '../layout/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import { education } from '../../data/education'

export default function Education() {
  return (
    <section id="education" className="border-t-2 border-ink">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          index="05"
          title="Education"
          subtitle="Where I built my foundations in computing."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {education.map((ed, i) => (
            <Reveal key={ed.degree} delay={i * 0.1}>
              <div className="card-lift h-full border-2 border-ink bg-surface p-6 shadow-comic">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-display text-[10px] text-comic-blue">
                    {ed.period}
                  </span>
                  <span className="border-2 border-ink bg-comic-yellow px-2 py-1 text-xs font-bold text-ink">
                    {ed.result}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-extrabold text-ink">
                  {ed.degree}
                </h3>
                <p className="mt-1 text-muted">{ed.institution}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
