// M2 — About section
// Section: Near Black (dark) — second chapter, alternates with Hero

export default function About() {
  return (
    <section
      id="about"
      className="bg-deep-dark py-20 md:py-28"
      style={{ borderTop: '1px solid #30302e' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <p className="font-sans text-xs font-medium tracking-widest uppercase mb-4"
          style={{ color: '#87867f' }}>
          About
        </p>

        {/* Section heading */}
        <h2 className="font-serif text-3xl md:text-5xl font-medium leading-subheadline text-balance mb-16"
          style={{ color: '#faf9f5' }}>
          Dua jalur,<br />satu tujuan.
        </h2>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — main narrative */}
          <div className="space-y-6">
            <p className="font-sans text-lg leading-editorial"
              style={{ color: '#b0aea5' }}>
              Saya <span style={{ color: '#faf9f5', fontWeight: 500 }}>M. Hassanal Mu&apos;izzam Hassanudin</span>,
              mahasiswa Teknik Komputer di Universitas Negeri Semarang (UNNES)
              dengan fokus pada Computer Vision dan Machine Learning.
            </p>
            <p className="font-sans text-base leading-editorial"
              style={{ color: '#87867f' }}>
              Tugas akhir saya berpusat pada deteksi objek berbasis YOLO, secara spesifik mengeksplorasi
              bagaimana teknik augmentasi data memengaruhi akurasi model dalam skenario dunia nyata.
              Hasilnya dituangkan ke dalam sebuah web demo interaktif yang dapat dibandingkan langsung.
            </p>
            <p className="font-sans text-base leading-editorial"
              style={{ color: '#87867f' }}>
              Di sisi lain, pengalaman magang sebagai Frontend Developer di{' '}
              <span style={{ color: '#b0aea5' }}>ITpedia Indonesia</span>{' '}
              memberi saya fondasi kuat dalam membangun antarmuka yang tidak hanya berfungsi,
              tetapi juga dirasakan dengan baik oleh penggunanya.
            </p>
          </div>

          {/* Right — quick facts */}
          <div className="space-y-4">
            {[
              {
                label: 'Institusi',
                value: 'Teknik Komputer — Universitas Negeri Semarang',
              },
              {
                label: 'Fokus Riset',
                value: 'Object Detection, Data Augmentation, YOLOv8',
              },
              {
                label: 'Pengalaman Industri',
                value: 'Frontend Developer — ITpedia Indonesia',
              },
              {
                label: 'Tujuan Karier',
                value: 'Engineer di perusahaan teknologi besar dalam 5–10 tahun',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-1 py-4"
                style={{ borderBottom: '1px solid #30302e' }}
              >
                <span className="font-sans text-xs font-medium tracking-widest uppercase"
                  style={{ color: '#5e5d59' }}>
                  {item.label}
                </span>
                <span className="font-sans text-base leading-editorial"
                  style={{ color: '#b0aea5' }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
