// M2 — Hero section
// Section: Parchment (light) — first chapter

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-parchment pt-16"
    >
      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* — Text content — */}
          <div className="flex-1 text-center lg:text-left">
            {/* Overline label */}
            <p className="font-sans text-xs font-medium text-warm-600 tracking-widest uppercase mb-6">
              Computer Vision &amp; Frontend Engineer
            </p>

            {/* Name headline */}
            <h1 className="font-serif text-5xl md:text-6xl xl:text-7xl font-medium text-warm-950 leading-headline text-balance mb-6">
              M. Hassanal<br />
              <span className="text-terracotta">Mu&apos;izzam</span>
            </h1>

            {/* Tagline */}
            <p className="font-sans text-lg md:text-xl text-warm-700 leading-editorial max-w-lg mx-auto lg:mx-0 mb-3 text-balance">
              Membangun di persimpangan antara kecerdasan mesin dan antarmuka yang bermakna.
            </p>
            <p className="font-sans text-base text-warm-600 leading-editorial max-w-md mx-auto lg:mx-0 mb-10">
              Mahasiswa Teknik Komputer UNNES — fokus Computer Vision, YOLO, dan Frontend Engineering.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 font-sans text-sm font-medium px-6 py-3 rounded-xl bg-terracotta text-ivory shadow-ring-terracotta hover:opacity-90 transition-opacity duration-150"
              >
                Lihat Proyek
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 font-sans text-sm font-medium px-6 py-3 rounded-xl bg-sand text-warm-800 shadow-ring-standard hover:shadow-ring-hover transition-shadow duration-150"
              >
                Kontak Saya
              </a>
            </div>
          </div>

          {/* — Avatar monogram — */}
          <div className="flex-shrink-0 order-first lg:order-last">
            <div className="relative">
              {/* Outer ring */}
              <div className="w-52 h-52 md:w-64 md:h-64 rounded-full border border-warm-300 absolute inset-0 scale-110 opacity-40" />
              {/* Main circle */}
              <div
                className="w-52 h-52 md:w-64 md:h-64 rounded-full flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #e8e6dc 0%, #d1cfc5 100%)',
                  boxShadow: '#e8e6dc 0px 0px 0px 0px, #d1cfc5 0px 0px 0px 1px, rgba(0,0,0,0.06) 0px 8px 32px',
                }}
              >
                {/* Corner detail dots */}
                <div className="relative flex items-center justify-center w-full h-full">
                  <div className="absolute top-6 right-8 w-1.5 h-1.5 rounded-full bg-warm-400 opacity-60" />
                  <div className="absolute bottom-8 left-7 w-1 h-1 rounded-full bg-warm-400 opacity-40" />
                  {/* Monogram */}
                  <span className="font-serif text-5xl md:text-6xl font-medium text-warm-700 select-none tracking-tight">
                    MH
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-16 lg:mt-20 opacity-40">
          <div className="flex flex-col items-center gap-2">
            <span className="font-sans text-xs text-warm-600 tracking-widest uppercase">Scroll</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="animate-bounce">
              <path d="M8 3v10M4 9l4 4 4-4" stroke="#5e5d59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
