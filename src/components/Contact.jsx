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

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 sm:py-32 bg-card-light dark:bg-card-dark"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-xl">
          <p className="reveal text-sm font-medium tracking-wide uppercase text-terracotta mb-2 opacity-0">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="reveal font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl
                       text-text-primary-light dark:text-text-primary-dark
                       mb-6 opacity-0 animation-delay-100"
          >
            Let's talk
          </h2>

          <p
            className="reveal text-text-secondary-light dark:text-text-secondary-dark
                       leading-relaxed mb-10 opacity-0 animation-delay-200"
          >
            I'm looking for entry-level front-end or full-stack roles. If you're hiring,
            or just want to chat about a project, I'd like to hear from you.
            No contact form — just reach out directly.
          </p>

          {/* Contact links */}
          <div className="reveal space-y-4 opacity-0 animation-delay-300">
            {/* Email */}
            <a
              href="mailto:mjerish1@gmail.com"
              className="group flex items-center gap-4 p-4 rounded-xl
                         border border-border-light dark:border-border-dark
                         hover:border-terracotta transition-all duration-200
                         hover:-translate-x-1"
            >
              <div
                className="w-10 h-10 rounded-lg bg-terracotta/10 dark:bg-terracotta/15
                           flex items-center justify-center shrink-0
                           group-hover:bg-terracotta group-hover:text-white
                           text-terracotta transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wider">
                  Email
                </p>
                <p className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
                  mjerish1@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+916369824213"
              className="group flex items-center gap-4 p-4 rounded-xl
                         border border-border-light dark:border-border-dark
                         hover:border-terracotta transition-all duration-200
                         hover:-translate-x-1"
            >
              <div
                className="w-10 h-10 rounded-lg bg-terracotta/10 dark:bg-terracotta/15
                           flex items-center justify-center shrink-0
                           group-hover:bg-terracotta group-hover:text-white
                           text-terracotta transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wider">
                  Phone
                </p>
                <p className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
                  +91 6369824213
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/selva-jerish" /* [TODO] Replace with actual LinkedIn URL */
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-xl
                         border border-border-light dark:border-border-dark
                         hover:border-terracotta transition-all duration-200
                         hover:-translate-x-1"
            >
              <div
                className="w-10 h-10 rounded-lg bg-terracotta/10 dark:bg-terracotta/15
                           flex items-center justify-center shrink-0
                           group-hover:bg-terracotta group-hover:text-white
                           text-terracotta transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wider">
                  LinkedIn
                </p>
                <p className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
                  [TODO: Add LinkedIn URL]
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/selva-jerish" /* [TODO] Replace with actual GitHub URL */
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-xl
                         border border-border-light dark:border-border-dark
                         hover:border-terracotta transition-all duration-200
                         hover:-translate-x-1"
            >
              <div
                className="w-10 h-10 rounded-lg bg-terracotta/10 dark:bg-terracotta/15
                           flex items-center justify-center shrink-0
                           group-hover:bg-terracotta group-hover:text-white
                           text-terracotta transition-colors duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-wider">
                  GitHub
                </p>
                <p className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
                  [TODO: Add GitHub URL]
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
