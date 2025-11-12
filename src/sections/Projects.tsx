import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'
import { projects } from '../data/projects'

/**
 * Projects section: maps over project data and shows cards in a responsive grid.
 */
const Projects = () => (
  <section id="projects" className="px-6 py-24">
    <div className="mx-auto max-w-6xl space-y-12">
      <SectionHeader
        eyebrow="Projects"
        title="Selected work"
        description="Each project focuses on clear UX, maintainable code, and fast iteration loops."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  </section>
)

export default Projects
