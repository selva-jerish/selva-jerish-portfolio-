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
      className="py-24 sm:py-32 bg-card-light dark:bg-card-dark"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="reveal text-sm font-medium tracking-wide uppercase text-terracotta mb-2 opacity-0">
            Background
          </p>
          <h2
            id="experience-heading"
            className="reveal font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl
                       text-text-primary-light dark:text-text-primary-dark
                       opacity-0 animation-delay-100"
          >
            Where I've been
          </h2>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {timeline.map((item, index) => (
            <div
              key={`${item.title}-${item.date}`}
              className={`reveal opacity-0 animation-delay-${(index + 2) * 100}
                relative pl-10 pb-12 last:pb-0
                ${index < timeline.length - 1 ? 'timeline-line' : ''}`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2
                  ${item.type === 'work'
                    ? 'bg-terracotta border-terracotta'
                    : 'bg-card-light dark:bg-card-dark border-terracotta'
                  }`}
                aria-hidden="true"
              />

              {/* Type badge + date */}
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <span
                  className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full
                    ${item.type === 'work'
                      ? 'bg-terracotta/10 text-terracotta'
                      : 'bg-terracotta-muted dark:bg-terracotta/5 text-terracotta-dark dark:text-terracotta-light'
                    }`}
                >
                  {item.type === 'work' ? 'Work' : 'Education'}
                </span>
                <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  {item.date}
                </span>
              </div>

              {/* Title + org */}
              <h3
                className="font-['Space_Grotesk'] font-semibold text-lg
                           text-text-primary-light dark:text-text-primary-dark mt-2"
              >
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-0.5">
                {item.org}
              </p>

              {/* Bullet points */}
              {item.points.length > 0 && (
                <ul className="mt-3 space-y-1.5">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-sm text-text-secondary-light dark:text-text-secondary-dark
                                 flex items-start gap-2"
                    >
                      <span className="text-terracotta mt-1 shrink-0" aria-hidden="true">•</span>
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
