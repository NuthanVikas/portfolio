/**
 * Home section (hero): includes name, intro, and CTA buttons.
 * Uses a subtle grid background + card to keep things lively without extra libraries.
 */
const Home = () => (
  <section
    id="home"
    className="relative isolate overflow-hidden bg-dark px-6 py-28 text-white"
  >
    {/* Decorative background */}
    <div className="pointer-events-none absolute inset-0 opacity-40">
      <div className="h-full w-full bg-grid-pattern bg-grid" />
    </div>

    <div className="relative mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center">
      <div className="flex-1 space-y-6 text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.4em] text-secondary">
          Hello, I&apos;m Nuthan Vikas
        </p>
        <h1 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
          I design intelligent research workflows using LangGraph, LLMs, and seamless frontend integration.
        </h1>
        <p className="text-base text-slate-300">
          I like turning ideas into working projects—both in the backend with AI workflows and in the frontend with clean,
          usable interfaces. Here are some of the things I have built and ways to contact me.
        </p>
        <div className="flex flex-col gap-4 pt-4 sm:flex-row sm:justify-center md:justify-start">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/80"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Quick stats card */}
      <div className="flex-1 rounded-3xl border border-white/5 bg-white/5 p-6 text-sm text-slate-200 shadow-card backdrop-blur">
        <p className="text-sm font-medium text-secondary">Quick snapshot</p>
        <ul className="mt-6 space-y-4">
          {[
            
            { label: 'Focus areas', value: 'AI agents · Research automation · LangGraph workflows' },
            { label: 'Currently learning', value: 'Advanced LLM orchestration & frontend integration' },
          ].map((item) => (
            <li
              key={item.label}
              className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-white"
            >
              <span className="text-slate-300">{item.label}</span>
              <span className="text-base font-semibold">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default Home
