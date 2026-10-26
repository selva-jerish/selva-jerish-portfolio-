import { useEffect, useRef } from 'react'

function Hero() {
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
      ref={sectionRef}
      className="min-h-[85vh] flex items-center pt-24 pb-16"
      aria-label="Introduction"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Slightly asymmetric layout: content pushed left, right side is breathing room */}
        <div className="max-w-2xl">
          {/* Small label above the headline */}
          <p className="reveal text-sm font-medium tracking-wide uppercase
                        text-terracotta mb-4 opacity-0">
            Full-Stack Developer
          </p>

          {/* Headline: something honest and specific, not "Hi, I'm X" */}
          <h1
            className="reveal font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl lg:text-6xl
                       leading-[1.1] tracking-tight
                       text-text-primary-light dark:text-text-primary-dark
                       mb-6 opacity-0 animation-delay-100"
          >
            I build web apps that{' '}
            <span className="text-terracotta">actually work</span>{' '}
            for real people.
          </h1>

          {/* Subtext: grounded, casual, specific */}
          <p
            className="reveal text-lg sm:text-xl leading-relaxed
                       text-text-secondary-light dark:text-text-secondary-dark
                       mb-10 opacity-0 animation-delay-200"
          >
            Computer Science student finishing my B.Sc. at Sivanthi Arts and Science College.
            I've spent my time building things like attendance trackers and timetable systems with
            JavaScript, PHP, and MySQL. Not glamorous, but they solved real problems and I
            learned a lot building them.
          </p>

          {/* CTA buttons */}
          <div className="reveal flex flex-wrap gap-4 opacity-0 animation-delay-300">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                         bg-terracotta text-white font-medium text-sm
                         hover:bg-terracotta-dark transition-colors duration-200
                         focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
            >
              See my work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg
                         border border-border-light dark:border-border-dark
                         text-text-primary-light dark:text-text-primary-dark
                         font-medium text-sm
                         hover:border-terracotta hover:text-terracotta
                         transition-colors duration-200"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Decorative element on the right — a subtle terracotta accent shape */}
        <div className="hidden lg:block absolute right-12 top-1/3" aria-hidden="true">
          <div className="w-48 h-48 rounded-full bg-terracotta/5 dark:bg-terracotta/10 blur-3xl" />
        </div>
      </div>
    </section>
  )
}

export default Hero
