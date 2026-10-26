import { useEffect, useRef } from 'react'

/*
  Timeline data — directly from the resume.
  Education and work experience in reverse chronological order.
*/
const timeline = [
  {
    type: 'work',
    title: 'Full-Stack Developer Intern',
    org: 'Mavepizon Technologies',
    date: 'July 2025',
    points: [
      'Worked across the full SDLC — from gathering requirements to deploying the final product',
      'Built responsive front-end interfaces with HTML, CSS, and JavaScript',
      'Wrote server-side logic in PHP and managed MySQL databases',
    ],
  },
  {
    type: 'education',
    title: 'B.Sc. in Computer Science',
    org: 'Sivanthi Arts and Science College for Women',
    date: '2026 (Expected)',
    points: [],
  },
  {
    type: 'education',
    title: 'Higher Secondary Certificate (+2)',
    org: 'SSN Government Higher Secondary School',
    date: '2023',
    points: ['Percentage: 64%'],
  },
]

function Experience() {
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
      { threshold: 0.05 }
    )

    const children = sectionRef.current?.querySelectorAll('.reveal')
    children?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 sm:py-32 relative"
      aria-labelledby="experience-heading"
    >
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.2), rgba(124,58,237,0.15), transparent)' }}
      />

      {/* Decorative glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full" aria-hidden="true"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="reveal opacity-0 mb-4 flex justify-center">
            <span className="section-label">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
              </svg>
              Background
            </span>
          </div>
          <h2
            id="experience-heading"
            className="reveal font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl lg:text-5xl
                       text-text-primary
                       opacity-0 animation-delay-100"
          >
            Where I've <span className="gradient-text">been</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto space-y-0">
          {timeline.map((item, index) => (
            <div
              key={`${item.title}-${item.date}`}
              className={`reveal opacity-0 animation-delay-${(index + 2) * 100}
                relative pl-10 pb-12 last:pb-0
                ${index < timeline.length - 1 ? 'timeline-line' : ''}`}
            >
              {/* Timeline dot */}
              <div
                className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2"
                style={{
                  borderColor: item.type === 'work' ? 'var(--color-accent)' : 'var(--color-violet)',
                  background: item.type === 'work'
                    ? 'var(--color-accent)'
                    : 'transparent',
                  boxShadow: item.type === 'work'
                    ? '0 0 12px rgba(0, 212, 255, 0.4)'
                    : '0 0 8px rgba(124, 58, 237, 0.3)',
                }}
                aria-hidden="true"
              />

              {/* Type badge + date */}
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <span
                  className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
                  style={{
                    background: item.type === 'work'
                      ? 'rgba(0, 212, 255, 0.08)'
                      : 'rgba(124, 58, 237, 0.08)',
                    border: `1px solid ${item.type === 'work'
                      ? 'rgba(0, 212, 255, 0.15)'
                      : 'rgba(124, 58, 237, 0.15)'}`,
                    color: item.type === 'work'
                      ? 'var(--color-accent)'
                      : 'var(--color-violet-light)',
                  }}
                >
                  {item.type === 'work' ? 'Work' : 'Education'}
                </span>
                <span className="text-sm text-text-muted">
                  {item.date}
                </span>
              </div>

              {/* Title + org */}
              <h3
                className="font-['Space_Grotesk'] font-semibold text-lg
                           text-text-primary mt-2"
              >
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary mt-0.5">
                {item.org}
              </p>

              {/* Bullet points */}
              {item.points.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-text-secondary flex items-start gap-2"
                    >
                      <span className="text-accent mt-1 shrink-0" aria-hidden="true">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
