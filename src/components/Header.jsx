import { useState, useEffect } from 'react'

function Header({ darkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#work', label: 'Work' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
      role="banner"
    >
      <nav
        className={`max-w-6xl mx-auto px-6 transition-all duration-500 ${
          scrolled
            ? 'glass-nav rounded-2xl mx-4 sm:mx-8 lg:mx-auto py-3'
            : 'py-4'
        }`}
        role="navigation"
        aria-label="Main navigation"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
      >
        {/* Logo / name */}
        <a
          href="#"
          className="font-['Space_Grotesk'] font-bold text-xl tracking-tight
                     text-text-primary hover:text-accent transition-colors duration-200"
          aria-label="Back to top"
        >
          selva<span className="gradient-text">.</span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="link-underline text-sm font-medium
                           text-text-secondary
                           hover:text-text-primary
                           transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center"
              style={{ padding: '8px 20px', fontSize: '0.8125rem' }}
            >
              <span>Let's Talk</span>
            </a>
          </li>
        </ul>

        {/* Mobile: hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-text-secondary hover:text-accent transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="15" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav mx-4 mt-2 rounded-2xl overflow-hidden">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-text-secondary
                             hover:text-accent transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary inline-flex items-center text-center justify-center w-full"
                style={{ padding: '10px 20px', fontSize: '0.8125rem' }}
              >
                <span>Let's Talk</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Header
