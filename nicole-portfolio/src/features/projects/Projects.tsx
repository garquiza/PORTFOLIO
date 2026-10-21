import { useState } from 'react'
import { EmptyState } from '../../components/ui/EmptyState'
import { Section } from '../../components/ui/Section'
import { projects } from '../../content/projects'
import { ProjectCard } from './ProjectCard'
import { getPublishedProjects, getVisibleProjects, type ProjectFilter } from './selectors'
import { PROJECT_TYPES, PROJECT_TYPE_LABELS, type Project } from './types'

type FilterButtonProps = { label: string; active: boolean; onClick: () => void }

function FilterButton({ label, active, onClick }: FilterButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-sm transition ${
        active ? 'border-primary bg-primary text-white' : 'border-border text-muted hover:text-fg'
      }`}
    >
      {label}
    </button>
  )
}

export function Projects({ items = projects }: { items?: Project[] }) {
  const [filter, setFilter] = useState<ProjectFilter>('all')

  const published = getPublishedProjects(items)
  const availableTypes = PROJECT_TYPES.filter((type) => published.some((project) => project.type === type))
  const visible = getVisibleProjects(items, filter)

  return (
    <Section id="projects" title="Projects">
      {published.length === 0 ? (
        <EmptyState message="Projects are on the way." />
      ) : (
        <>
          {availableTypes.length > 1 && (
            <div role="group" aria-label="Filter projects by type" className="mb-8 flex flex-wrap gap-2">
              <FilterButton label="All" active={filter === 'all'} onClick={() => setFilter('all')} />
              {availableTypes.map((type) => (
                <FilterButton
                  key={type}
                  label={PROJECT_TYPE_LABELS[type]}
                  active={filter === type}
                  onClick={() => setFilter(type)}
                />
              ))}
            </div>
          )}
          <ul className="grid gap-6 md:grid-cols-2">
            {visible.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </>
      )}
    </Section>
  )
}
