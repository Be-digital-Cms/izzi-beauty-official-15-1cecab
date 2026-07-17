import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { site } from '@/content/site'

import './globals.css'

const FONTS =
  'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Marcellus&family=Inter:wght@300;400;500;600;700&display=swap'

export const metadata: Metadata = {
  title: `${site.brandName} — ${site.tagline}`,
  description: site.footer.about,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS} />
      </head>
      <body>{children}</body>
    </html>
  )
}
