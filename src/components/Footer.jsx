function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="py-12 relative"
      role="contentinfo"
    >
      {/* Top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.15), rgba(124,58,237,0.1), transparent)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Left: name + small note */}
          <div>
            <p className="font-['Space_Grotesk'] font-semibold text-text-primary text-lg">
              selva<span className="gradient-text">.</span>
            </p>
            <p className="text-sm text-text-muted mt-1">
              Built this site myself. No templates, no page builders.
            </p>
          </div>

          {/* Right: quick links + copyright */}
          <div className="text-right">
            <div className="flex gap-6 mb-3 sm:justify-end">
              <a
                href="mailto:mjerish1@gmail.com"
                className="text-sm text-text-secondary
                           hover:text-accent transition-colors link-underline"
                aria-label="Send email"
              >
                Email
              </a>
              <a
                href="https://github.com/selva-jerish" /* [TODO] Replace with actual GitHub URL */
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary
                           hover:text-accent transition-colors link-underline"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/selva-jerish" /* [TODO] Replace with actual LinkedIn URL */
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary
                           hover:text-accent transition-colors link-underline"
              >
                LinkedIn
              </a>
            </div>
            <p className="text-xs text-text-muted">
              © {currentYear} Selva Jerish M
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
