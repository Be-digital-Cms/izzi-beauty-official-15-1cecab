import type { Metadata } from 'next'

import { Shell } from '@/components/Shell'
import { HubPage } from '@/components/sections'
import { opleidingen } from '@/content/opleidingen'

export const metadata: Metadata = {
  title: 'Opleidingen — IZZI Beauty Academy',
  description: opleidingen.hero.text,
}

export default function OpleidingenPage() {
  return (
    <Shell>
      <HubPage data={opleidingen} />
    </Shell>
  )
}
