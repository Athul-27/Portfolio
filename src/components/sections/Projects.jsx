import Container from '../layout/Container'
import SectionHeading from '../ui/SectionHeading'
import Reveal from '../ui/Reveal'
import ProjectCard from './ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="border-t-2 border-ink bg-comic-blue/5">
      <Container className="py-16 sm:py-24">
        <SectionHeading
          index="04"
          title="Projects"
          subtitle="A mix of AI/ML research systems and full-stack engineering builds."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
