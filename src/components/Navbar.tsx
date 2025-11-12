import { useState } from 'react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

/**
 * Navbar: responsive navigation with a simple mobile menu toggle.
 * Keeps markup small and approachable for future customization.
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-dark/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-semibold text-white">
          Vikas
        </a>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA button */}
        <a
          href="#contact"
          className="hidden rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/80 md:inline-flex"
        >
          Let&apos;s Talk
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-full border border-white/10 px-3 py-2 text-sm text-white md:hidden"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <nav className="space-y-3 border-t border-white/5 px-6 py-4 text-sm text-slate-200 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block rounded-xl bg-white/5 px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block rounded-xl bg-primary/80 px-4 py-2 text-center font-semibold text-white"
            onClick={() => setIsOpen(false)}
          >
            Let&apos;s Talk
          </a>
        </nav>
      )}
    </header>
  )
}

export default Navbar
