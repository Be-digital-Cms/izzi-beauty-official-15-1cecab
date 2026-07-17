import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Shell } from '@/components/Shell'
import { LocationPage } from '@/components/sections'
import { locatieSlugs, locaties } from '@/content/locaties'

export function generateStaticParams() {
  return locatieSlugs.map((stad) => ({ stad }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ stad: string }>
}): Promise<Metadata> {
  const { stad } = await params
  const data = locaties[stad]
  if (!data) return { title: 'Niet gevonden — IZZI Beauty' }
  return { title: `${data.hero.title} — IZZI Beauty`, description: data.hero.text }
}

export default async function LocatiePage({
  params,
}: {
  params: Promise<{ stad: string }>
}) {
  const { stad } = await params
  const data = locaties[stad]
  if (!data) notFound()
  return (
    <Shell>
      <LocationPage data={data} />
    </Shell>
  )
}
