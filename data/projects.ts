export type ProjectTag = 'Computer Vision' | 'Machine Learning' | 'Web' | 'Frontend' | 'Backend' | 'Dashboard'

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  stack: string[]
  tags: ProjectTag[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'yolo-skripsi',
    title: 'Web Demo Object Detection — Skripsi',
    description:
      'Aplikasi web untuk mendemonstrasikan dan membandingkan performa model YOLO dengan berbagai teknik augmentasi data.',
    longDescription:
      'Dibangun dengan FastAPI sebagai backend dan antarmuka berbasis HTML/CSS/JS. Mendukung upload gambar, inferensi real-time, dan visualisasi perbandingan mAP antar konfigurasi augmentasi.',
    stack: ['Python', 'FastAPI', 'YOLOv8', 'OpenCV', 'HTML', 'CSS', 'JavaScript'],
    tags: ['Computer Vision', 'Machine Learning', 'Web'],
    githubUrl: 'https://github.com/hassanalm22',
    featured: true,
  },
  {
    id: 'magang-frontend',
    title: 'Frontend Development — ITpedia Indonesia',
    description:
      'Pengalaman magang sebagai Frontend Developer di ITpedia Indonesia, membangun antarmuka web yang responsif dan terstruktur.',
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
    tags: ['Frontend', 'Web'],
    featured: true,
  },
  {
    id: 'devboard',
    title: 'DevBoard — Personal Dev Dashboard',
    description:
      'Dashboard personal untuk developer: tracking aktivitas GitHub, manajemen task, dan monitoring produktivitas harian.',
    stack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'GitHub API'],
    tags: ['Frontend', 'Dashboard', 'Web'],
    githubUrl: 'https://github.com/hassanalm22',
    featured: true,
  },
]
