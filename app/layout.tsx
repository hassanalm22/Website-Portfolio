import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://hassanalm22.vercel.app'),
  title: 'M. Hassanal — Computer Vision & Frontend Engineer',
  description:
    "Portfolio M. Hassanal Mu'izzam Hassanudin — Mahasiswa Teknik Komputer UNNES, fokus Computer Vision, Machine Learning, dan Frontend Engineering.",
  keywords: ['Computer Vision', 'YOLO', 'Frontend', 'Next.js', 'Portfolio', 'UNNES'],
  authors: [{ name: "M. Hassanal Mu'izzam Hassanudin" }],
  openGraph: {
    title: 'M. Hassanal — Computer Vision & Frontend Engineer',
    description: 'Portfolio personal — CV/ML + Frontend Engineering.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "M. Hassanal Mu'izzam — Computer Vision & Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M. Hassanal — Computer Vision & Frontend Engineer',
    description: 'Portfolio personal — CV/ML + Frontend Engineering.',
    images: ['/og-image.png'],
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
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
