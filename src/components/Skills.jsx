import { useEffect, useRef } from 'react'

/*
  Skills data — grouped logically, pulled from the resume.
  No progress bars, no percentages. Just honest groupings.
*/
const skillGroups = [
  {
    label: 'Languages',
    skills: ['JavaScript', 'PHP'],
  },
  {
    label: 'Front-End',
    skills: ['HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    label: 'Back-End',
    skills: ['PHP', 'REST APIs', 'Server-side Logic'],
  },
  {
    label: 'Database',
    skills: ['MySQL', 'CRUD Operations', 'Schema Design', 'Backup'],
  },
  {
    label: 'Tools & Workflow',
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
      className="py-24 sm:py-32"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="reveal text-sm font-medium tracking-wide uppercase text-terracotta mb-2 opacity-0">
            Technical Skills
          </p>
          <h2
            id="skills-heading"
            className="reveal font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl
                       text-text-primary-light dark:text-text-primary-dark
                       opacity-0 animation-delay-100"
          >
            What I work with
          </h2>
        </div>

        {/* Skills grid — 2 columns on medium, 3 on large */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <div
              key={group.label}
              className={`reveal opacity-0 animation-delay-${(index + 2) * 100}`}
            >
              {/* Group label */}
              <h3
                className="font-['Space_Grotesk'] font-semibold text-sm uppercase tracking-wider
                           text-terracotta mb-4"
              >
                {group.label}
              </h3>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-lg
                               border border-border-light dark:border-border-dark
                               bg-card-light dark:bg-card-dark
                               text-text-primary-light dark:text-text-primary-dark
                               hover:border-terracotta hover:text-terracotta
                               transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft skills — separate, more understated */}
        <div className="reveal opacity-0 animation-delay-500 mt-16 pt-8 border-t border-border-light dark:border-border-dark">
          <h3
            className="font-['Space_Grotesk'] font-semibold text-sm uppercase tracking-wider
                       text-text-secondary-light dark:text-text-secondary-dark mb-4"
          >
            Also worth mentioning
          </h3>
          <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
            I pick up new tools quickly, enjoy working with a team, and I'm the kind of person
            who actually reads the error message before Googling it. Won 1st place in a code
            debugging competition at college, which mostly proved I'm stubborn enough to find
            the bug.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
