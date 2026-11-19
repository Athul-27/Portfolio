import Container from '../layout/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Tag from '../ui/Tag'
import { experience } from '../../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="border-t-2 border-ink">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          index="03"
          title="Experience"
          subtitle="What I've been working on professionally."
        />

        <div className="relative">
          <span
            className="absolute bottom-2 left-[9px] top-2 w-[3px] bg-ink"
            aria-hidden="true"
          />

          {experience.map((item, i) => (
            <Reveal key={item.role} delay={i * 0.08}>
              <article className="relative pb-10 pl-10 last:pb-0">
                <span
                  className="absolute left-0 top-1 h-[18px] w-[18px] border-2 border-ink bg-comic-red shadow-comic-sm"
                  aria-hidden="true"
                />

                <div className="card-lift border-2 border-ink bg-surface p-5 shadow-comic sm:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-heading text-xl font-extrabold text-ink">
                      {item.role}
                    </h3>
                    {(item.org || item.period) && (
                      <p className="font-heading text-sm font-semibold text-muted">
                        {item.org}
                        {item.org && item.period ? ' · ' : ''}
                        {item.period}
                      </p>
                    )}
                  </div>

                  <p className="mt-3 text-muted">{item.summary}</p>

                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-ink">
                        <span
                          className="mt-[7px] h-2.5 w-2.5 shrink-0 border-2 border-ink bg-comic-blue"
                          aria-hidden="true"
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
