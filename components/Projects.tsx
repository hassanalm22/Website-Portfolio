// M3 — Projects section
// Section: Parchment (light) — fifth chapter, alternates from Skills (dark)

import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-parchment py-20 md:py-28"
      style={{ borderTop: '1px solid #f0eee6' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <p className="font-sans text-xs font-medium text-warm-600 tracking-widest uppercase mb-4">
          Projects
        </p>

        {/* Section heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-warm-950 leading-subheadline text-balance">
            Karya yang<br />berbicara sendiri.
          </h2>
          <p className="font-sans text-base text-warm-600 leading-editorial max-w-sm">
            Proyek-proyek ini mencerminkan dua jalur kompetensi: Computer Vision dari riset akademis,
            dan Frontend Engineering dari pengalaman industri.
          </p>
        </div>

        {/* Featured project — full width */}
        {projects.filter((p) => p.featured && p.id === 'yolo-skripsi').map((project) => (
          <div key={project.id} className="mb-8">
            <ProjectCard project={project} variant="featured" />
          </div>
        ))}

        {/* Remaining projects — 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
            .filter((p) => p.id !== 'yolo-skripsi')
            .map((project) => (
              <ProjectCard key={project.id} project={project} variant="standard" />
            ))}
        </div>

      </div>
    </section>
  )
}
