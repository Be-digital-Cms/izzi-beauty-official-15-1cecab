import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Media } from '@/components/Media'
import { Shell } from '@/components/Shell'
import { PageHero } from '@/components/sections'
import { postSlugs, posts } from '@/content/blog'

export function generateStaticParams() {
  return postSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug]
  if (!post) return { title: 'Niet gevonden — IZZI Beauty' }
  return { title: `${post.title} — IZZI Beauty`, description: post.excerpt }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = posts[slug]
  if (!post) notFound()
  return (
    <Shell>
      <PageHero
        eyebrow={post.category || 'Blog'}
        title={post.title}
        text={post.excerpt}
        breadcrumb={post.title}
      />
      <section className="section">
        <div className="container" style={{ maxWidth: 780 }}>
          <div className="prose">
            <div className="detail-figure" style={{ marginBottom: 30 }}>
              <Media src={post.image} alt={post.title} shape="wide" label={post.title} />
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginBottom: 24 }}>
              {post.author} · {post.date}
            </p>
            {post.body.map((b, i) => (
              <div key={i}>
                {b.heading && <h2>{b.heading}</h2>}
                {b.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Link className="btn btn-ghost" href="/blog">Terug naar de blog</Link>
          </div>
        </div>
      </section>
    </Shell>
  )
}
