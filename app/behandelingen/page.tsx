import type { Metadata } from 'next'

import { Shell } from '@/components/Shell'
import { HubPage } from '@/components/sections'
import { behandelingen } from '@/content/behandelingen'

export const metadata: Metadata = {
  title: 'Behandelingen — IZZI Beauty',
  description: behandelingen.hero.text,
}

export default function BehandelingenPage() {
  return (
    <Shell>
      <HubPage data={behandelingen} />
    </Shell>
  )
}
