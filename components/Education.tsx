// M2 — Education section
// Section: Parchment (light) — third chapter, alternates back to light

export default function Education() {
  return (
    <section
      id="education"
      className="bg-parchment py-20 md:py-28"
      style={{ borderTop: '1px solid #f0eee6' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <p className="font-sans text-xs font-medium text-warm-600 tracking-widest uppercase mb-4">
          Education
        </p>

        {/* Section heading */}
        <h2 className="font-serif text-3xl md:text-5xl font-medium text-warm-950 leading-subheadline text-balance mb-16">
          Latar Belakang<br />Pendidikan.
        </h2>

        {/* Timeline — single entry (UNNES) */}
        <div className="max-w-3xl">
          <div className="relative flex gap-8">

            {/* Timeline stem */}
            <div className="flex flex-col items-center flex-shrink-0">
              {/* Dot */}
              <div
                className="w-3 h-3 rounded-full mt-1.5 flex-shrink-0"
                style={{
                  background: '#c96442',
                  boxShadow: '#c96442 0px 0px 0px 0px, #c96442 0px 0px 0px 3px, rgba(201,100,66,0.15) 0px 0px 0px 6px',
                }}
              />
              {/* Vertical line — fades down */}
              <div
                className="w-px flex-1 mt-3"
                style={{
                  background: 'linear-gradient(to bottom, #d1cfc5, transparent)',
                  minHeight: '40px',
                }}
              />
            </div>

            {/* Card */}
            <div
              className="flex-1 mb-2 p-7 md:p-8 rounded-2xl"
              style={{
                background: '#faf9f5',
                border: '1px solid #f0eee6',
                boxShadow: 'rgba(0,0,0,0.04) 0px 4px 24px',
              }}
            >
              {/* Year badge */}
              <span
                className="inline-block font-sans text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full mb-4"
                style={{
                  background: 'rgba(201,100,66,0.08)',
                  color: '#c96442',
                  border: '1px solid rgba(201,100,66,0.25)',
                }}
              >
                2021 — Sekarang
              </span>

              {/* Institution */}
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-warm-950 leading-snug mb-2">
                Universitas Negeri Semarang
              </h3>

              {/* Degree */}
              <p className="font-sans text-base font-medium text-warm-700 mb-4">
                S1 Teknik Komputer
              </p>

              {/* Description */}
              <p className="font-sans text-base text-warm-600 leading-editorial mb-6">
                Berfokus pada bidang Computer Vision dan Machine Learning, dengan tugas akhir
                mengangkat topik deteksi objek berbasis YOLOv8 dan pengaruh augmentasi data
                terhadap performa model dalam kondisi dataset terbatas.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {['Computer Vision', 'Machine Learning', 'YOLOv8', 'Python', 'Deep Learning'].map((tag) => (
                  <span
                    key={tag}
                    className="font-sans text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      background: '#e8e6dc',
                      color: '#5e5d59',
                      border: '1px solid #f0eee6',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
