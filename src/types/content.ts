export type Project = {
  title: string
  description: string
  liveUrl?: string
  repoUrl?: string
  tech?: string[]
}

export type ContactLink = {
  label: string
  href: string
  ariaLabel: string
  icon: 'github' | 'linkedin'
}
