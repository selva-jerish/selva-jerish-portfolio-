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
      className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden"
      aria-label="Introduction"
    >
      {/* Decorative floating orbs */}
      <div className="absolute top-32 right-16 w-72 h-72 rounded-full animate-float-slow" aria-hidden="true"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)' }}
      />
      <div className="absolute bottom-32 left-8 w-56 h-56 rounded-full animate-glow-pulse" aria-hidden="true"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)' }}
      />
      <div className="absolute top-1/2 right-1/4 w-3 h-3 rounded-full bg-accent/30 animate-float" aria-hidden="true" />
      <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-violet/40 animate-float-slow" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          {/* Small label pill above the headline */}
          <div className="reveal opacity-0 mb-6">
            <span className="section-label">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: 'linear-gradient(135deg, var(--color-accent), var(--color-violet))' }}
              />
              Full-Stack Developer
            </span>
          </div>

          {/* Headline */}
          <h1
            className="reveal font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl lg:text-7xl
                       leading-[1.05] tracking-tight
                       text-text-primary
                       mb-8 opacity-0 animation-delay-100"
          >
            I build web apps that{' '}
            <span className="gradient-text">actually work</span>{' '}
            for real people.
          </h1>

          {/* Subtext */}
          <p
            className="reveal text-lg sm:text-xl leading-relaxed
                       text-text-secondary
                       mb-12 opacity-0 animation-delay-200 max-w-2xl"
          >
            Computer Science student finishing my B.Sc. at Sivanthi Arts and Science College.
            I've spent my time building things like attendance trackers and timetable systems with
            JavaScript, PHP, and MySQL. Not glamorous, but they solved real problems and I
            learned a lot building them.
          </p>

          {/* CTA buttons */}
          <div className="reveal flex flex-wrap gap-4 opacity-0 animation-delay-300">
            <a href="#work" className="btn-primary">
              <span>
                See my work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
          </div>

          {/* Stats bar */}
          <div className="reveal opacity-0 animation-delay-400 mt-16 flex flex-wrap gap-8 sm:gap-12">
            <div>
              <p className="font-['Space_Grotesk'] font-bold text-2xl sm:text-3xl gradient-text">2+</p>
              <p className="text-sm text-text-muted mt-1">Projects Built</p>
            </div>
            <div className="w-px bg-border self-stretch" />
            <div>
              <p className="font-['Space_Grotesk'] font-bold text-2xl sm:text-3xl gradient-text">1</p>
              <p className="text-sm text-text-muted mt-1">Internship</p>
            </div>
            <div className="w-px bg-border self-stretch" />
            <div>
              <p className="font-['Space_Grotesk'] font-bold text-2xl sm:text-3xl gradient-text">5+</p>
              <p className="text-sm text-text-muted mt-1">Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
