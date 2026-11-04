// M3 — ProjectCard component
// Reusable card for Projects section

import { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  variant?: 'featured' | 'standard'
}

const tagColors: Record<string, { bg: string; text: string; border: string }> = {
  'Computer Vision': {
    bg: 'rgba(201, 100, 66, 0.08)',
    text: '#d97757',
    border: 'rgba(201, 100, 66, 0.20)',
  },
  'Machine Learning': {
    bg: 'rgba(201, 100, 66, 0.08)',
    text: '#d97757',
    border: 'rgba(201, 100, 66, 0.20)',
  },
  Web: {
    bg: '#e8e6dc',
    text: '#5e5d59',
    border: '#f0eee6',
  },
  Frontend: {
    bg: '#e8e6dc',
    text: '#5e5d59',
    border: '#f0eee6',
  },
  Backend: {
    bg: '#e8e6dc',
    text: '#5e5d59',
    border: '#f0eee6',
  },
  Dashboard: {
    bg: '#e8e6dc',
    text: '#5e5d59',
    border: '#f0eee6',
  },
}

const defaultTagColor = {
  bg: '#e8e6dc',
  text: '#5e5d59',
  border: '#f0eee6',
}

export default function ProjectCard({ project, variant = 'standard' }: ProjectCardProps) {
  const isFeatured = variant === 'featured'

  return (
    <article
      className="project-card flex flex-col h-full rounded-2xl"
      style={{
        background: '#faf9f5',
        border: '1px solid #f0eee6',
        boxShadow: 'rgba(0,0,0,0.04) 0px 4px 24px',
        padding: isFeatured ? '32px' : '24px',
      }}
    >
      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map((tag) => {
          const color = tagColors[tag] ?? defaultTagColor
          return (
            <span
              key={tag}
              className="font-sans text-xs font-medium px-2.5 py-1 rounded-full"
              style={{
                background: color.bg,
                color: color.text,
                border: `1px solid ${color.border}`,
              }}
            >
              {tag}
            </span>
          )
        })}
      </div>

      {/* Title */}
      <h3
        className="font-serif font-medium leading-snug mb-3"
        style={{
          fontSize: isFeatured ? '1.5rem' : '1.25rem',
          color: '#141413',
        }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className="font-sans text-sm leading-editorial flex-1 mb-6"
        style={{ color: '#5e5d59' }}
      >
        {project.description}
      </p>

      {/* Stack pills */}
      <div className="flex flex-wrap gap-1.5 mb-6">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-sans text-xs px-2.5 py-1 rounded-md"
            style={{
              background: 'rgba(0,0,0,0.04)',
              color: '#87867f',
              border: '1px solid #f0eee6',
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {(project.githubUrl || project.liveUrl) && (
        <div className="flex gap-3 mt-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-sans text-sm font-medium transition-opacity duration-150 hover:opacity-70"
              style={{ color: '#4d4c48' }}
              aria-label={`GitHub — ${project.title}`}
            >
              {/* GitHub icon */}
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                <path
                  d="M7.5 0C3.36 0 0 3.36 0 7.5c0 3.31 2.15 6.12 5.13 7.12.37.07.5-.16.5-.36v-1.27c-2.09.46-2.53-.99-2.53-.99-.34-.87-.83-1.1-.83-1.1-.68-.46.05-.45.05-.45.75.05 1.14.77 1.14.77.67 1.14 1.74.81 2.17.62.07-.48.26-.81.47-1-1.67-.19-3.42-.83-3.42-3.7 0-.82.29-1.49.77-2.01-.08-.19-.33-.95.07-1.99 0 0 .63-.2 2.06.77a7.17 7.17 0 0 1 1.88-.25c.64 0 1.28.08 1.88.25 1.43-.97 2.06-.77 2.06-.77.4 1.04.15 1.8.07 1.99.48.52.77 1.19.77 2.01 0 2.88-1.75 3.51-3.42 3.7.27.23.51.69.51 1.39v2.06c0 .2.13.43.51.36A7.504 7.504 0 0 0 15 7.5C15 3.36 11.64 0 7.5 0Z"
                  fill="currentColor"
                />
              </svg>
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-sans text-sm font-medium transition-opacity duration-150 hover:opacity-70"
              style={{ color: '#c96442' }}
              aria-label={`Live demo — ${project.title}`}
            >
              {/* External link icon */}
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path
                  d="M5 2H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8M8 1h4m0 0v4m0-4L6 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      )}
    </article>
  )
}
