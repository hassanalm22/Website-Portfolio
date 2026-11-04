// M4 — Contact section
// Section: Near Black (dark) — sixth chapter, alternates from Projects (light)
// Form: Formspree (no library — pure HTML form action)

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-deep-dark py-20 md:py-28"
      style={{ borderTop: '1px solid #30302e' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* — Left: heading + contact info — */}
          <div>
            {/* Section label */}
            <p
              className="font-sans text-xs font-medium tracking-widest uppercase mb-4"
              style={{ color: '#87867f' }}
            >
              Contact
            </p>

            {/* Section heading */}
            <h2
              className="font-serif text-3xl md:text-5xl font-medium leading-subheadline text-balance mb-6"
              style={{ color: '#faf9f5' }}
            >
              Mari berkolaborasi<br />bersama.
            </h2>

            <p
              className="font-sans text-base leading-editorial mb-12"
              style={{ color: '#87867f' }}
            >
              Terbuka untuk diskusi proyek, peluang magang, atau sekadar
              bertukar ide seputar Computer Vision dan Frontend Engineering.
            </p>

            {/* Contact links */}
            <div className="flex flex-col gap-5">
              {/* Email */}
              <a
                href="mailto:hassanalhassanudin@gmail.com"
                className="contact-link group flex items-center gap-4"
              >
                <span
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid #30302e',
                  }}
                >
                  {/* Email icon */}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <rect x="1" y="3" width="14" height="10" rx="2" stroke="#87867f" strokeWidth="1.25" />
                    <path d="M1 5.5l7 4.5 7-4.5" stroke="#87867f" strokeWidth="1.25" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <p className="font-sans text-xs font-medium tracking-widest uppercase mb-0.5" style={{ color: '#5e5d59' }}>
                    Email
                  </p>
                  <p className="font-sans text-sm font-medium group-hover:text-terracotta transition-colors duration-150" style={{ color: '#b0aea5' }}>
                    hassanalhassanudin@gmail.com
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/hassanalm22"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link group flex items-center gap-4"
              >
                <span
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid #30302e',
                  }}
                >
                  {/* GitHub icon */}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M8 1a7 7 0 00-2.213 13.641c.35.065.478-.152.478-.337 0-.165-.006-.603-.01-1.184-1.947.423-2.358-.94-2.358-.94-.318-.809-.777-1.025-.777-1.025-.636-.434.048-.425.048-.425.703.049 1.073.722 1.073.722.624 1.07 1.639.76 2.038.582.063-.452.244-.76.444-.935-1.554-.177-3.188-.777-3.188-3.457 0-.764.273-1.388.721-1.878-.073-.177-.312-.888.068-1.851 0 0 .588-.188 1.927.718A6.7 6.7 0 018 5.28c.596.003 1.196.08 1.756.237 1.337-.906 1.924-.718 1.924-.718.382.963.142 1.674.07 1.851.449.49.72 1.114.72 1.878 0 2.687-1.637 3.278-3.196 3.452.251.216.475.643.475 1.297 0 .936-.009 1.69-.009 1.92 0 .187.126.405.48.337A7 7 0 008 1z" fill="#87867f" />
                  </svg>
                </span>
                <div>
                  <p className="font-sans text-xs font-medium tracking-widest uppercase mb-0.5" style={{ color: '#5e5d59' }}>
                    GitHub
                  </p>
                  <p className="font-sans text-sm font-medium group-hover:text-terracotta transition-colors duration-150" style={{ color: '#b0aea5' }}>
                    github.com/hassanalm22
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="www.linkedin.com/in/hassanalm22"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link group flex items-center gap-4"
              >
                <span
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid #30302e',
                  }}
                >
                  {/* LinkedIn icon */}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <rect x="1" y="1" width="14" height="14" rx="2" stroke="#87867f" strokeWidth="1.25" />
                    <path d="M4.5 6.5v5" stroke="#87867f" strokeWidth="1.25" strokeLinecap="round" />
                    <circle cx="4.5" cy="4.5" r="0.75" fill="#87867f" />
                    <path d="M7.5 11.5V9a1.5 1.5 0 013 0v2.5" stroke="#87867f" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.5 8v-.5" stroke="#87867f" strokeWidth="1.25" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <p className="font-sans text-xs font-medium tracking-widest uppercase mb-0.5" style={{ color: '#5e5d59' }}>
                    LinkedIn
                  </p>
                  <p className="font-sans text-sm font-medium group-hover:text-terracotta transition-colors duration-150" style={{ color: '#b0aea5' }}>
                    linkedin.com/in/hassanalm22
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* — Right: contact form — */}
          <div>
            <form
              action="https://formspree.io/f/mvkkvegp"
              method="POST"
              className="flex flex-col gap-5"
            >
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-sans text-xs font-medium tracking-widest uppercase"
                  style={{ color: '#5e5d59' }}
                >
                  Nama
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Nama lengkap"
                  required
                  className="contact-input font-sans text-sm px-4 py-3 rounded-xl outline-none w-full transition-all duration-150"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid #30302e',
                    color: '#faf9f5',
                  }}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-sans text-xs font-medium tracking-widest uppercase"
                  style={{ color: '#5e5d59' }}
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="email@contoh.com"
                  required
                  className="contact-input font-sans text-sm px-4 py-3 rounded-xl outline-none w-full transition-all duration-150"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid #30302e',
                    color: '#faf9f5',
                  }}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-sans text-xs font-medium tracking-widest uppercase"
                  style={{ color: '#5e5d59' }}
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Halo, saya ingin mendiskusikan..."
                  required
                  className="contact-input font-sans text-sm px-4 py-3 rounded-xl outline-none w-full resize-none transition-all duration-150"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid #30302e',
                    color: '#faf9f5',
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 font-sans text-sm font-medium px-6 py-3 rounded-xl bg-terracotta text-ivory shadow-ring-terracotta hover:opacity-90 transition-opacity duration-150 self-start"
              >
                Kirim Pesan
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2.5 7h9M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
