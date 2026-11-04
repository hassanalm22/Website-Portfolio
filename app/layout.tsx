import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'M. Hassanal — Computer Vision & Frontend Engineer',
  description:
    "Portfolio M. Hassanal Mu'izzam Hassanudin — Mahasiswa Teknik Komputer UNNES, fokus Computer Vision, Machine Learning, dan Frontend Engineering.",
  keywords: ['Computer Vision', 'YOLO', 'Frontend', 'Next.js', 'Portfolio', 'UNNES'],
  authors: [{ name: "M. Hassanal Mu'izzam Hassanudin" }],
  openGraph: {
    title: 'M. Hassanal — Computer Vision & Frontend Engineer',
    description: 'Portfolio personal — CV/ML + Frontend Engineering.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-parchment text-warm-950 antialiased">
        {children}
      </body>
    </html>
  )
}
