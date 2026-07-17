import type { Metadata } from 'next'

import { Shell } from '@/components/Shell'
import { CtaBand, PageHero, PriceList } from '@/components/sections'
import { prijzen } from '@/content/prijzen'

export const metadata: Metadata = {
  title: 'Prijzen — IZZI Beauty',
  description: prijzen.hero.text,
}

export default function PrijzenPage() {
  return (
    <Shell>
      <PageHero {...prijzen.hero} />
      <section className="section">
        <div className="container" style={{ maxWidth: 820 }}>
          <PriceList groups={prijzen.groups} />
          {prijzen.note && (
            <p className="lead" style={{ marginTop: 36, fontSize: '0.98rem' }}>{prijzen.note}</p>
          )}
        </div>
      </section>
      <CtaBand cta={prijzen.cta} />
    </Shell>
  )
}
