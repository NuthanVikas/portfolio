import SectionHeader from '../components/SectionHeader'

/**
 * About section: brief background paragraph and quick facts list.
 */
const About = () => (
  <section
    id="about"
    className="bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.08),_transparent_55%)] px-6 py-24"
  >
    <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
      <SectionHeader
        eyebrow="About"
        title="A curious problem-solver who values clean UX"
        description="I started with simple landing pages, and over time moved into building AI assistants, dashboards, and tools that help teams make decisions faster."
      />

      <div className="space-y-5 rounded-3xl border border-white/5 bg-white/5 p-6 text-sm text-slate-200 shadow-card backdrop-blur">
        <p>
          Today I focus on:
          <span className="text-white"> frontend architecture, DX, </span>
          and <span className="text-white">human-friendly interfaces.</span>
        </p>
        <p>
          When collaborating, I love pair-design sessions, rapid prototypes, and
          documenting components so anyone can jump in and contribute.
        </p>
        <ul className="space-y-3 text-slate-300">
          <li className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-2">
            <span>Tools</span>
            <span className="text-white">React · Next.js · Tailwind CSS</span>
          </li>
          <li className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-2">
            <span>Other skills</span>
            <span className="text-white">TypeScript · API design · UX writing</span>
          </li>
          <li className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-2">
            <span>Location</span>
            <span className="text-white">Remote · Open to travel</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default About
