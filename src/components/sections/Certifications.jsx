import Container from '../layout/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Tag from '../ui/Tag'
import { certifications } from '../../data/certifications'

export default function Certifications() {
  return (
    <section id="certifications" className="border-t-2 border-ink bg-comic-red/5">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          index="06"
          title="Certifications"
          subtitle="Focused, hands-on credentials."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="card-lift h-full border-2 border-ink bg-surface p-6 shadow-comic">
                <span className="font-display text-[10px] text-comic-red">CERTIFIED</span>
                <h3 className="mt-3 font-heading text-xl font-extrabold text-ink">
                  {c.title}
                </h3>
                {c.issuer && <p className="mt-1 text-muted">{c.issuer}</p>}
                <p className="mt-3 text-muted">{c.detail}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
