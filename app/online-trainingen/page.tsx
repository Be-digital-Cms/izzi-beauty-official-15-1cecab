import type { Metadata } from 'next'

import { Shell } from '@/components/Shell'
import { HubPage } from '@/components/sections'
import { onlineTrainingen } from '@/content/online-trainingen'

export const metadata: Metadata = {
  title: 'Online Trainingen — IZZI Beauty Academy',
  description: onlineTrainingen.hero.text,
}

export default function OnlineTrainingenPage() {
  return (
    <Shell>
      <HubPage data={onlineTrainingen} />
    </Shell>
  )
}
