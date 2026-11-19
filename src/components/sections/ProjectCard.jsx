import { Github, ArrowUpRight } from 'lucide-react'
import Tag from '../ui/Tag'
import SocialLink from '../ui/SocialLink'
import ComicPanel from '../ui/ComicPanel'

const accents = {
  'comic-red': { hex: '#E23A3A', bar: 'bg-comic-red', text: 'text-comic-red' },
  'comic-blue': { hex: '#2F5BEA', bar: 'bg-comic-blue', text: 'text-comic-blue' },
  'comic-yellow': { hex: '#F5C518', bar: 'bg-comic-yellow', text: 'text-comic-yellow' },
  'comic-green': { hex: '#3FA14D', bar: 'bg-comic-green', text: 'text-comic-green' },
}

export default function ProjectCard({ project, number = '01' }) {
  const a = accents[project.accent] || accents['comic-red']

  return (
    <article className="card-lift flex h-full flex-col border-2 border-ink bg-surface shadow-comic">
      <div className={`relative h-36 overflow-hidden border-b-2 border-ink ${a.bar}`}>
        <ComicPanel number={number} />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className={`font-heading text-xs font-bold uppercase tracking-wide ${a.text}`}>
          {project.subtitle}
        </p>
        <h3 className="mt-2 font-heading text-lg font-extrabold leading-snug text-ink">
          {project.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-muted">{project.blurb}</p>

        <ul className="mt-3 space-y-1.5">
          {project.bullets.map((b) => (
            <li key={b} className="flex gap-2 text-sm text-ink">
              <span
                className={`mt-[6px] h-2 w-2 shrink-0 border-2 border-ink ${a.bar}`}
                aria-hidden="true"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2 pt-1">
          <SocialLink
            href={project.repo}
            label="Code"
            variant="secondary"
            icon={<Github size={15} />}
          />
          {project.demo !== '' && (
            <SocialLink
              href={project.demo}
              label="Live"
              variant="secondary"
              icon={<ArrowUpRight size={15} />}
            />
          )}
        </div>
      </div>
    </article>
  )
}
