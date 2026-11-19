import Container from '../layout/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import Tag from '../ui/Tag'
import { skills } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="border-t-2 border-ink bg-comic-yellow/10">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          index="02"
          title="Skills"
          subtitle="Tools and technologies I use to build things — no fake progress bars, just the stack."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={(i % 3) * 0.08}>
              <div className="card-lift h-full border-2 border-ink bg-surface p-5 shadow-comic">
                <h3 className="mb-4 font-heading text-lg font-extrabold text-ink">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Tag key={item}>{item}</Tag>
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
