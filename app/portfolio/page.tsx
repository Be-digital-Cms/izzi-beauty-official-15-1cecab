import type { Metadata } from 'next'

import { Shell } from '@/components/Shell'
import { CtaBand, Gallery, PageHero } from '@/components/sections'
import { portfolio } from '@/content/portfolio'

export const metadata: Metadata = {
  title: 'Portfolio — IZZI Beauty',
  description: portfolio.hero.text,
}

export default function PortfolioPage() {
  return (
    <Shell>
      <PageHero {...portfolio.hero} />
      <section className="section">
        <div className="container">
          {portfolio.intro && (
            <p className="lead" style={{ maxWidth: '44rem', marginBottom: 44 }}>{portfolio.intro}</p>
          )}
          <Gallery images={portfolio.images} />
        </div>
      </section>
      <CtaBand cta={portfolio.cta} />
    </Shell>
  )
}
