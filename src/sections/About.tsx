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
        title="I am a Health Data Science graduate who builds AI workflows and automation systems using tools like LangChain, LangGraph, AutoGen, and n8n."
        description="In this portfolio, I share the projects I have built, focusing on AI-driven workflows, automation pipelines, and practical solutions for handling health and data tasks."
      />

      <div className="space-y-5 rounded-3xl border border-white/5 bg-white/5 p-6 text-sm text-slate-200 shadow-card backdrop-blur">
        <p>
          Today I focus on:
          <span className="text-white"> AI-driven workflows, data automation, </span>
          and <span className="text-white">Building AI workflows, automating data tasks, and creating simple interfaces that make complex steps easier to use.</span>
        </p>
        <p>
          When collaborating, I enjoy working together to solve problems, testing ideas quickly, and keeping my work clearly documented so others can follow and contribute.
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
