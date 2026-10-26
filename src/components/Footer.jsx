function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="py-12 border-t border-border-light dark:border-border-dark"
      role="contentinfo"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Left: name + small note */}
          <div>
            <p className="font-['Space_Grotesk'] font-semibold text-text-primary-light dark:text-text-primary-dark">
              Selva Jerish M
            </p>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">
              Built this site myself. No templates, no page builders.
            </p>
          </div>

          {/* Right: quick links + copyright */}
          <div className="text-right">
            <div className="flex gap-5 mb-2 sm:justify-end">
              <a
                href="mailto:mjerish1@gmail.com"
                className="text-sm text-text-secondary-light dark:text-text-secondary-dark
                           hover:text-terracotta transition-colors link-underline"
                aria-label="Send email"
              >
                Email
              </a>
              <a
                href="https://github.com/selva-jerish" /* [TODO] Replace with actual GitHub URL */
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary-light dark:text-text-secondary-dark
                           hover:text-terracotta transition-colors link-underline"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/selva-jerish" /* [TODO] Replace with actual LinkedIn URL */
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary-light dark:text-text-secondary-dark
                           hover:text-terracotta transition-colors link-underline"
              >
                LinkedIn
              </a>
            </div>
            <p className="text-xs text-text-secondary-light/60 dark:text-text-secondary-dark/60">
              © {currentYear} Selva Jerish M
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
