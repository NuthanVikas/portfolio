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
        title="Health Data Science graduate passionate about using AI to solve real-world problems. Skilled in building intelligent workflows and automation pipelines with LangChain, LangGraph, AutoGen, and n8n to turn data into actionable insights."
        description="This portfolio highlights my work in AI-driven automation, showcasing projects that use advanced AI frameworks to build workflows, automate processes, and generate actionable insights."
      />

      <div className="space-y-5 rounded-3xl border border-white/5 bg-white/5 p-6 text-sm text-slate-200 shadow-card backdrop-blur">
        <p>
          Today I focus on:
          <span className="text-white"> AI-driven workflows, data automation, </span>
          and <span className="text-white">creating intuitive, user-friendly interfaces for complex processes.</span>
        </p>
        <p>
          When collaborating, I enjoy pair-designing solutions, rapid prototyping, and documenting workflows so team members can easily contribute and extend projects.
        </p>
        <ul className="space-y-3 text-slate-300">
          <li className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-2">
            <span>Tools</span>
            <span className="text-white">Langchain · Langgraph · Autogen</span>
          </li>
          <li className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-2">
            <span>Other skills</span>
            <span className="text-white">Data analysis · Health data modeling</span>
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
