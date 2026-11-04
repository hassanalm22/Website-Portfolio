// M4 — Footer
// Section: Parchment (light) — seventh chapter, closes the page

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="bg-parchment py-12"
      style={{ borderTop: '1px solid #f0eee6' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Wordmark */}
          <a
            href="#hero"
            className="font-serif text-lg font-medium text-warm-950 hover:text-terracotta transition-colors duration-150"
          >
            MH.
          </a>

          {/* Nav links */}
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {[
              { label: 'About', href: '#about' },
              { label: 'Education', href: '#education' },
              { label: 'Skills', href: '#skills' },
              { label: 'Projects', href: '#projects' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-sans text-sm text-warm-600 hover:text-warm-950 transition-colors duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/hassanalm22"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-warm-500 hover:text-warm-950 transition-colors duration-150"
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 1a7 7 0 00-2.213 13.641c.35.065.478-.152.478-.337 0-.165-.006-.603-.01-1.184-1.947.423-2.358-.94-2.358-.94-.318-.809-.777-1.025-.777-1.025-.636-.434.048-.425.048-.425.703.049 1.073.722 1.073.722.624 1.07 1.639.76 2.038.582.063-.452.244-.76.444-.935-1.554-.177-3.188-.777-3.188-3.457 0-.764.273-1.388.721-1.878-.073-.177-.312-.888.068-1.851 0 0 .588-.188 1.927.718A6.7 6.7 0 018 5.28c.596.003 1.196.08 1.756.237 1.337-.906 1.924-.718 1.924-.718.382.963.142 1.674.07 1.851.449.49.72 1.114.72 1.878 0 2.687-1.637 3.278-3.196 3.452.251.216.475.643.475 1.297 0 .936-.009 1.69-.009 1.92 0 .187.126.405.48.337A7 7 0 008 1z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/hassanalm22"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-warm-500 hover:text-warm-950 transition-colors duration-150"
            >
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.25" />
                <path d="M4.5 6.5v5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                <circle cx="4.5" cy="4.5" r="0.75" fill="currentColor" />
                <path d="M7.5 11.5V9a1.5 1.5 0 013 0v2.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.5 8v-.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p
          className="font-sans text-xs text-center mt-8"
          style={{ color: '#87867f' }}
        >
          © {currentYear} M. Hassanal Mu&apos;izzam Hassanudin. Dibangun dengan Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
