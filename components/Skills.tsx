// M3 — Skills section
// Section: Near Black (dark) — fourth chapter, alternates from Education (light)

const skillGroups = [
  {
    label: 'Computer Vision & ML',
    skills: [
      'YOLOv8',
      'Object Detection',
      'Data Augmentation',
      'OpenCV',
      'PyTorch',
      'scikit-learn',
      'Python',
      'Deep Learning',
    ],
    accent: true, // terracotta accent for this group's label
  },
  {
    label: 'Frontend Engineering',
    skills: [
      'React',
      'Next.js 14',
      'TypeScript',
      'Tailwind CSS',
      'HTML',
      'CSS',
      'JavaScript',
      'Responsive Design',
    ],
    accent: false,
  },
  {
    label: 'Tools & Workflow',
    skills: [
      'Git',
      'GitHub',
      'FastAPI',
      'VS Code',
      'Linux',
      'Vercel',
      'Figma',
      'REST API',
    ],
    accent: false,
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-deep-dark py-20 md:py-28"
      style={{ borderTop: '1px solid #30302e' }}
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <p
          className="font-sans text-xs font-medium tracking-widest uppercase mb-4"
          style={{ color: '#87867f' }}
        >
          Skills
        </p>

        {/* Section heading */}
        <h2
          className="font-serif text-3xl md:text-5xl font-medium leading-subheadline text-balance mb-16"
          style={{ color: '#faf9f5' }}
        >
          Apa yang saya<br />kuasai.
        </h2>

        {/* Skill groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {skillGroups.map((group) => (
            <div key={group.label} className="flex flex-col gap-5">
              {/* Group label */}
              <p
                className="font-sans text-xs font-medium tracking-widest uppercase"
                style={{
                  color: group.accent ? '#c96442' : '#5e5d59',
                }}
              >
                {group.label}
              </p>

              {/* Tag pills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-sans text-sm font-medium px-3 py-1.5 rounded-full"
                    style={{
                      background: group.accent
                        ? 'rgba(201, 100, 66, 0.08)'
                        : 'rgba(255, 255, 255, 0.04)',
                      color: group.accent ? '#d97757' : '#b0aea5',
                      border: group.accent
                        ? '1px solid rgba(201, 100, 66, 0.20)'
                        : '1px solid #30302e',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
