import type { Project } from '../types/content'

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <article className="h-full rounded-3xl border border-white/5 bg-white/5 p-6 text-white shadow-card backdrop-blur transition hover:-translate-y-1">
    {/* Project title */}
    <h3 className="text-2xl font-semibold">{project.title}</h3>

    {/* Description */}
    <p className="mt-3 text-sm text-slate-300">{project.description}</p>

    {/* Tech list */}
    {project.tech && (
      <ul className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
        {project.tech.map((item) => (
          <li
            key={item}
            className="rounded-full border border-white/10 px-3 py-1 text-white/80"
          >
            {item}
          </li>
        ))}
      </ul>
    )}

    {/* Action buttons */}
    <div className="mt-6 flex flex-wrap gap-3">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-400"
        >
          Live demo
        </a>
      )}
      {project.repoUrl && (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40"
        >
          GitHub
        </a>
      )}
    </div>
  </article>
)

export default ProjectCard
