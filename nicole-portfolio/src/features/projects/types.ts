export const PROJECT_TYPES = ['professional', 'personal', 'academic'] as const

export type ProjectType = (typeof PROJECT_TYPES)[number]

export const PROJECT_TYPE_LABELS: Record<ProjectType, string> = {
  professional: 'Work',
  personal: 'Personal',
  academic: 'Academic',
}

export type Project = {
  slug: string
  title: string
  summary: string
  type: ProjectType
  role: string
  features: string[]
  technologies: string[]
  repositoryUrl?: string
  liveDemoUrl?: string
  imageUrl?: string
  featured: boolean
  published: boolean
}
