import type { Metadata } from 'next'

import { Shell } from '@/components/Shell'
import { LegalPage } from '@/components/sections'
import { legal } from '@/content/legal'

const data = legal['opleidingen-voorwaarden']

export const metadata: Metadata = { title: `${data.hero.title} — IZZI Beauty`, description: data.hero.text }

export default function Page() {
  return (
    <Shell>
      <LegalPage data={data} />
    </Shell>
  )
}
