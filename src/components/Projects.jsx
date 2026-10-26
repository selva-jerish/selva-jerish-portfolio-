import { useEffect, useRef } from 'react'

/*
  Project data — pulled directly from the resume.
  Copy is written in first person, casual, specific.
  Each project: problem → what I did → outcome. ~80-100 words.
*/
const projects = [
  {
    id: 'timetable',
    title: 'Online Timetable Management System',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    description: `My college scheduled classes manually, and it was a mess. Conflicts everywhere,
      last-minute changes nobody heard about. I built a web app where admins can create, update,
      and delete class schedules through a clean interface. Full CRUD with a MySQL backend.
      The front-end is responsive HTML/CSS — nothing fancy, but it loads fast and works on
      the lab computers. The hardest part was handling overlapping time slots without making
      the UI confusing.`,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="10" y1="14" x2="14" y2="14" /><line x1="12" y1="12" x2="12" y2="16" />
      </svg>
    ),
    // [TODO] Add a link to live demo or GitHub repo if available
    liveUrl: null,
    repoUrl: null,
  },
  {
    id: 'attendance',
    title: 'Attendance Management System',
    tags: ['PHP', 'HTML', 'MySQL', 'JavaScript'],
    description: `Students' attendance was tracked on paper. Teachers lost sheets, records didn't
      match, and generating reports at semester-end took days. I built a system that handles
      students, courses, units, and attendance records with proper user authentication.
      The part I'm most proud of: export functionality that generates reports in CSV, Excel,
      and PDF formats, plus automated database backups. It replaced a completely manual process
      with something that takes a few clicks.`,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><polyline points="17 11 19 13 23 9" />
      </svg>
    ),
    // [TODO] Add a link to live demo or GitHub repo if available
    liveUrl: null,
    repoUrl: null,
  },
]

function Projects() {
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
      id="work"
      ref={sectionRef}
      className="py-24 sm:py-32 relative"
      aria-labelledby="work-heading"
    >
      {/* Subtle section divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.2), rgba(124,58,237,0.15), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="reveal opacity-0 mb-4 flex justify-center">
            <span className="section-label">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              Selected Work
            </span>
          </div>
          <h2
            id="work-heading"
            className="reveal font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl lg:text-5xl
                       text-text-primary
                       opacity-0 animation-delay-100"
          >
            Things I've <span className="gradient-text">built</span>
          </h2>
          <p className="reveal opacity-0 animation-delay-200 text-text-secondary mt-4 max-w-lg mx-auto">
            Real-world projects that solved actual problems for real users.
          </p>
        </div>

        {/* Project cards — bento grid style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`reveal opacity-0 animation-delay-${(index + 2) * 100}`}
            >
              <div className="glow-card p-8 sm:p-10 h-full flex flex-col">
                {/* Icon + number */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-accent"
                    style={{ background: 'rgba(0, 212, 255, 0.08)', border: '1px solid rgba(0, 212, 255, 0.12)' }}
                  >
                    {project.icon}
                  </div>
                  <span
                    className="font-['Space_Grotesk'] text-5xl font-bold select-none gradient-text"
                    style={{ opacity: 0.15 }}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-['Space_Grotesk'] font-semibold text-xl sm:text-2xl
                             text-text-primary mb-3"
                >
                  {project.title}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full
                                 border border-accent/15 bg-accent-muted text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-text-secondary leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Links — only render if URLs exist */}
                {(project.liveUrl || project.repoUrl) && (
                  <div className="flex gap-4 mt-6 pt-6 border-t border-border">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium
                                   text-accent hover:text-accent-light transition-colors"
                      >
                        Live demo
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium
                                   text-text-secondary hover:text-accent transition-colors"
                      >
                        Source code
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}

                {/* TODO notice for missing links */}
                {!project.liveUrl && !project.repoUrl && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-xs text-text-muted italic">
                      [TODO: Add live demo or GitHub repo link]
                    </p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
