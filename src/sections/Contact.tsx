import SectionHeader from '../components/SectionHeader'
import { contactLinks } from '../data/contact'

/**
 * Contact section: contains a basic form and quick social links with icons.
 */
const Contact = () => (
  <section
    id="contact"
    className="bg-[radial-gradient(circle_at_bottom,_rgba(99,102,241,0.12),_transparent_55%)] px-6 py-24"
  >
    <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s collaborate"
        description="Questions, ideas, or opportunities? Drop a quick note below and I’ll get back within a day."
      />

      <form
        className="space-y-4 rounded-3xl border border-white/5 bg-white/5 p-6 shadow-card backdrop-blur"
        onSubmit={(event) => {
          event.preventDefault()
        }}
      >
        <label className="block text-sm text-slate-300">
          Name
          <input
            type="text"
            name="name"
            required
            className="mt-2 w-full rounded-2xl border border-white/10 bg-dark/40 px-4 py-3 text-sm text-white outline-none transition focus:border-primary"
            placeholder="Jane Doe"
          />
        </label>
        <label className="block text-sm text-slate-300">
          Email
          <input
            type="email"
            name="email"
            required
            className="mt-2 w-full rounded-2xl border border-white/10 bg-dark/40 px-4 py-3 text-sm text-white outline-none transition focus:border-primary"
            placeholder="you@email.com"
          />
        </label>
        <label className="block text-sm text-slate-300">
          Message
          <textarea
            name="message"
            rows={4}
            required
            className="mt-2 w-full rounded-2xl border border-white/10 bg-dark/40 px-4 py-3 text-sm text-white outline-none transition focus:border-primary"
            placeholder="Tell me about the challenge you’re solving."
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-full bg-primary py-3 text-sm font-semibold text-white transition hover:bg-primary/80"
        >
          Send Message
        </button>

        <div className="pt-4 text-sm text-slate-300">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-secondary">
            Connect
          </p>
          <div className="flex items-center gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.ariaLabel}
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition hover:border-primary hover:text-primary"
              >
                {link.icon === 'github' ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.04 1.77 2.72 1.26 3.38.96.1-.76.41-1.26.75-1.55-2.56-.29-5.26-1.28-5.26-5.68 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.6.24 2.78.12 3.07.74.81 1.18 1.84 1.18 3.1 0 4.42-2.71 5.38-5.29 5.67.42.36.8 1.08.8 2.18 0 1.57-.01 2.83-.01 3.21 0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                  >
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.05-1.86-3.05-1.87 0-2.15 1.46-2.15 2.96v5.66H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.26ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm-1.78 13.02h3.55V9H3.56v11.45ZM22.22 0H1.78C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.78 24h20.44c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0Z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </form>
    </div>
  </section>
)

export default Contact
