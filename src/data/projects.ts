import type { Project } from '../types/content'

// Each entry renders as a card in the Projects section.
export const projects: Project[] = [
  {
    title: 'Testing Toolkit',
    description:
      'A set of utilities that automate smoke tests and share run summaries for every deployment.',
    liveUrl: 'https://testing-toolkit.example.com',
    repoUrl: 'https://github.com/NuthanVikas/testing.git',
    tech: ['React', 'Vitest', 'GitHub Actions'],
  },
  {
    title: 'Research & Report Assistant',
    description:
      'LLM-powered assistant that gathers healthcare insights, summarises findings, and exports structured reports.',
    liveUrl: 'https://research-assistant.example.com',
    repoUrl:
      'https://github.com/NuthanVikas/research_and_report_assistant.git',
    tech: ['Next.js', 'TypeScript', 'OpenAI API'],
  },
  {
    title: 'Portfolio Template',
    description:
      'A starter site made with React and Tailwind CSS so anyone can launch a personal site fast.',
    liveUrl: 'https://portfolio-starter.example.com',
    repoUrl: 'https://github.com/vikas-dev/portfolio-template',
    tech: ['React', 'Tailwind CSS', 'Netlify'],
  },
]
