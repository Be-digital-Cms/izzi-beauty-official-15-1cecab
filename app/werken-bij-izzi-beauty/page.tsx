import type { Metadata } from 'next'

import { Shell } from '@/components/Shell'
import { InfoPage } from '@/components/sections'
import { info } from '@/content/info'

const data = info['werken-bij-izzi-beauty']

export const metadata: Metadata = { title: `${data.hero.title} — IZZI Beauty`, description: data.hero.text }

export default function Page() {
  return (
    <Shell>
      <InfoPage data={data} />
    </Shell>
  )
}
