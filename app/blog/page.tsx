import type { Metadata } from 'next'

import { Shell } from '@/components/Shell'
import { BlogGrid, CtaBand, PageHero } from '@/components/sections'
import { blogIndex, postSlugs, posts } from '@/content/blog'

export const metadata: Metadata = {
  title: 'Blog — IZZI Beauty',
  description: blogIndex.hero.text,
}

export default function BlogPage() {
  const cards = postSlugs.map((slug) => ({
    slug,
    title: posts[slug].title,
    excerpt: posts[slug].excerpt,
    image: posts[slug].image,
    date: posts[slug].date,
    category: posts[slug].category,
  }))
  return (
    <Shell>
      <PageHero {...blogIndex.hero} />
      <section className="section">
        <div className="container">
          <BlogGrid posts={cards} />
        </div>
      </section>
      <CtaBand cta={blogIndex.cta} />
    </Shell>
  )
}
