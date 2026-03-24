export type EducationItem = {
  institute: string
  detail: string
  score: string
  year: string
}

export type ExperienceItem = {
  role: string
  organization: string
  meta: string
}

export type ProjectItem = {
  title: string
  description: string
  status: 'live' | 'in-progress' | 'upcoming'
  link?: string
}

export type ContactLink = {
  label: string
  href: string
}

export type PortfolioData = {
  name: string
  role: string
  email: string
  phone: string
  location: string
  graduationYear: string
  summary: string
  objective: string
  skills: {
    programming: string[]
    frameworks: string[]
  }
  education: EducationItem[]
  experience: ExperienceItem[]
  projects: ProjectItem[]
  certifications: string[]
  volunteering: {
    organization: string
    role: string
  }[]
  languages: string[]
  links: ContactLink[]
}