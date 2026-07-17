import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { Shell } from '@/components/Shell'
import { DetailPage } from '@/components/sections'
import { serviceSlugs, services } from '@/content/services'

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const data = services[slug]
  if (!data) return { title: 'Niet gevonden — IZZI Beauty' }
  return { title: `${data.hero.title} — IZZI Beauty`, description: data.hero.text }
}

export default async function BehandelingDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const data = services[slug]
  if (!data) notFound()
  return (
    <Shell>
      <DetailPage data={data} />
    </Shell>
  )
}
