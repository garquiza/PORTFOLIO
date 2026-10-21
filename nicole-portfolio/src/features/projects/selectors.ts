import type { Project, ProjectType } from './types'

export type ProjectFilter = 'all' | ProjectType

export function getPublishedProjects(projects: Project[]): Project[] {
  return projects.filter((project) => project.published)
}

export function getVisibleProjects(projects: Project[], filter: ProjectFilter): Project[] {
  return getPublishedProjects(projects)
    .filter((project) => filter === 'all' || project.type === filter)
    .sort((a, b) => Number(b.featured) - Number(a.featured))
}
