import type { Project } from '../types/content'

// Each entry renders as a card in the Projects section.
export const projects: Project[] = [
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
    title: 'AI Medical Assistant',
    description:
      'An AI Medical Assistant that helps users check symptoms, schedule doctor appointments, and get basic drug information. The system uses multiple AI agents to guide users through each step.',
    repoUrl: 'https://github.com/NuthanVikas/AI_Medical_Assistant.git',
  },
  {
    title: 'AI Travel Planner',
    description:
      'An AI tool that creates travel plans by finding places to visit, estimating costs, and generating day-by-day itineraries automatically.',
    repoUrl: 'https://github.com/NuthanVikas/Travel_Planner.git',
  },
]
