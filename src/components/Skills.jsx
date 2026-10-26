import { useEffect, useRef } from 'react'

/*
  Skills data — grouped logically, pulled from the resume.
  No progress bars, no percentages. Just honest groupings.
*/
const skillGroups = [
  {
    label: 'Languages',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: ['JavaScript', 'PHP'],
  },
  {
    label: 'Front-End',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    skills: ['HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    label: 'Back-End',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    skills: ['PHP', 'REST APIs', 'Server-side Logic'],
  },
  {
    label: 'Database',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    skills: ['MySQL', 'CRUD Operations', 'Schema Design', 'Backup'],
  },
  {
    label: 'Tools & Workflow',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    skills: ['Git', 'GitHub', 'Code Debugging', 'SDLC'],
  },
]

function Skills() {
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
      id="skills"
      ref={sectionRef}
      className="py-24 sm:py-32 relative"
      aria-labelledby="skills-heading"
    >
      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.2), rgba(0,212,255,0.15), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="reveal opacity-0 mb-4 flex justify-center">
            <span className="section-label">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              Technical Skills
            </span>
          </div>
          <h2
            id="skills-heading"
            className="reveal font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl lg:text-5xl
                       text-text-primary
                       opacity-0 animation-delay-100"
          >
            What I <span className="gradient-text-reverse">work with</span>
          </h2>
        </div>

        {/* Skills grid — bento-style cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={group.label}
              className={`reveal opacity-0 animation-delay-${(index + 2) * 100} glow-card p-6`}
            >
              {/* Group icon + label */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-accent"
                  style={{ background: 'rgba(0, 212, 255, 0.08)', border: '1px solid rgba(0, 212, 255, 0.12)' }}
                >
                  {group.icon}
                </div>
                <h3
                  className="font-['Space_Grotesk'] font-semibold text-sm uppercase tracking-wider
                             gradient-text"
                >
                  {group.label}
                </h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft skills — separate, more understated */}
        <div className="reveal opacity-0 animation-delay-500 mt-16">
          <div className="glow-card p-8 text-center max-w-2xl mx-auto">
            <h3
              className="font-['Space_Grotesk'] font-semibold text-sm uppercase tracking-wider
                         text-text-secondary mb-4"
            >
              Also worth mentioning
            </h3>
            <p className="text-text-secondary leading-relaxed">
              I pick up new tools quickly, enjoy working with a team, and I'm the kind of person
              who actually reads the error message before Googling it. Won 1st place in a code
              debugging competition at college, which mostly proved I'm stubborn enough to find
              the bug.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
