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
      className="py-24 sm:py-32"
      aria-labelledby="work-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="reveal text-sm font-medium tracking-wide uppercase text-terracotta mb-2 opacity-0">
            Selected Work
          </p>
          <h2
            id="work-heading"
            className="reveal font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl
                       text-text-primary-light dark:text-text-primary-dark
                       opacity-0 animation-delay-100"
          >
            Things I've built
          </h2>
        </div>

        {/* Project cards — stacked vertically, slightly asymmetric widths */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`reveal opacity-0 animation-delay-${(index + 2) * 100}
                group`}
            >
              {/* Card container with subtle hover lift */}
              <div
                className={`rounded-2xl border border-border-light dark:border-border-dark
                  bg-card-light dark:bg-card-dark
                  p-8 sm:p-10
                  transition-all duration-300
                  hover:shadow-lg hover:shadow-terracotta/5
                  hover:-translate-y-1
                  ${index % 2 === 1 ? 'sm:ml-12' : ''}`}
              >
                {/* Project number + title */}
                <div className="flex items-start gap-4 mb-4">
                  <span
                    className="font-['Space_Grotesk'] text-5xl font-bold
                               text-terracotta/20 dark:text-terracotta/30
                               leading-none select-none"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3
                      className="font-['Space_Grotesk'] font-semibold text-xl sm:text-2xl
                                 text-text-primary-light dark:text-text-primary-dark
                                 mb-1"
                    >
                      {project.title}
                    </h3>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2.5 py-1 rounded-full
                                     bg-terracotta-muted dark:bg-terracotta/10
                                     text-terracotta-dark dark:text-terracotta-light"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="text-text-secondary-light dark:text-text-secondary-dark
                             leading-relaxed mt-4 max-w-xl"
                >
                  {project.description}
                </p>

                {/* Links — only render if URLs exist */}
                {(project.liveUrl || project.repoUrl) && (
                  <div className="flex gap-4 mt-6">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium
                                   text-terracotta hover:text-terracotta-dark transition-colors"
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
                                   text-text-secondary-light dark:text-text-secondary-dark
                                   hover:text-terracotta transition-colors"
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
                  <p className="text-xs text-text-secondary-light/50 dark:text-text-secondary-dark/50 mt-6 italic">
                    [TODO: Add live demo or GitHub repo link]
                  </p>
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
