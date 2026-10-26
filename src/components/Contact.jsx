import { useEffect, useRef } from 'react'

function Contact() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    const children = sectionRef.current?.querySelectorAll('.reveal')
    children?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const contactLinks = [
    {
      label: 'Email',
      value: 'mjerish1@gmail.com',
      href: 'mailto:mjerish1@gmail.com',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      label: 'Phone',
      value: '+91 6369824213',
      href: 'tel:+916369824213',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      value: '[TODO: Add LinkedIn URL]',
      href: 'https://linkedin.com/in/selva-jerish', /* [TODO] Replace with actual LinkedIn URL */
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
        </svg>
      ),
      external: true,
    },
    {
      label: 'GitHub',
      value: '[TODO: Add GitHub URL]',
      href: 'https://github.com/selva-jerish', /* [TODO] Replace with actual GitHub URL */
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
      external: true,
    },
  ]

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 sm:py-32 relative"
      aria-labelledby="contact-heading"
    >
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.2), rgba(124,58,237,0.15), transparent)' }}
      />

      {/* Decorative glow */}
      <div className="absolute left-0 top-1/3 w-80 h-80 rounded-full" aria-hidden="true"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left side — text */}
          <div>
            <div className="reveal opacity-0 mb-4">
              <span className="section-label">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Contact
              </span>
            </div>
            <h2
              id="contact-heading"
              className="reveal font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl lg:text-5xl
                         text-text-primary
                         mb-6 opacity-0 animation-delay-100"
            >
              Let's <span className="gradient-text">talk</span>
            </h2>

            <p
              className="reveal text-text-secondary
                         leading-relaxed mb-10 opacity-0 animation-delay-200 max-w-lg"
            >
              I'm looking for entry-level front-end or full-stack roles. If you're hiring,
              or just want to chat about a project, I'd like to hear from you.
              No contact form — just reach out directly.
            </p>

            {/* Big CTA */}
            <div className="reveal opacity-0 animation-delay-300">
              <a href="mailto:mjerish1@gmail.com" className="btn-primary inline-flex">
                <span>
                  Send me an email
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Right side — contact cards */}
          <div className="reveal space-y-4 opacity-0 animation-delay-300">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="contact-card group flex items-center gap-4"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0
                             text-accent transition-all duration-300
                             group-hover:shadow-[0_0_20px_rgba(0,212,255,0.2)]"
                  style={{
                    background: 'rgba(0, 212, 255, 0.06)',
                    border: '1px solid rgba(0, 212, 255, 0.1)',
                  }}
                >
                  {link.icon}
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider font-medium">
                    {link.label}
                  </p>
                  <p className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
                    {link.value}
                  </p>
                </div>
                {/* Arrow */}
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="ml-auto text-text-muted group-hover:text-accent group-hover:translate-x-1 transition-all"
                >
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
