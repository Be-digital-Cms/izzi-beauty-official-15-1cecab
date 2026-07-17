import type { Metadata } from 'next'
import Link from 'next/link'

import { Media } from '@/components/Media'
import { Shell } from '@/components/Shell'
import { CtaBand, PageHero } from '@/components/sections'
import { Icon } from '@/components/icons'
import { aanbiedingen } from '@/content/aanbiedingen'

export const metadata: Metadata = {
  title: 'Nieuwste aanbiedingen — IZZI Beauty',
  description: aanbiedingen.hero.text,
}

export default function AanbiedingenPage() {
  const { intro, featured, offers, galleryImages, perks, cta } = aanbiedingen
  return (
    <Shell>
      <PageHero {...aanbiedingen.hero} />

      {/* Featured offer — bespoke split with ribbon + price block */}
      <section className="section">
        <div className="container">
          {intro && (
            <div className="section-head center" style={{ marginBottom: 56 }}>
              <span className="eyebrow center">Actueel</span>
              <h2>{intro.title}</h2>
              <p>{intro.text}</p>
            </div>
          )}
          <div className="offer-featured">
            <div className="offer-featured-media">
              <Media src={featured.image} alt={featured.title} shape="free" label={featured.title} />
              {featured.discount && <span className="offer-ribbon">{featured.discount}</span>}
            </div>
            <div className="offer-featured-body">
              <span className="offer-badge">{featured.badge}</span>
              <h3>{featured.title}</h3>
              <p>{featured.text}</p>
              <ul className="checklist">
                {featured.perks.map((p) => (
                  <li key={p}><span className="tick"><Icon name="check" size={13} /></span>{p}</li>
                ))}
              </ul>
              <div className="offer-price">
                {featured.oldPrice && <span className="offer-price-old">{featured.oldPrice}</span>}
                <span className="offer-price-now">{featured.price}</span>
              </div>
              <div className="offer-actions">
                <Link className="btn btn-gold" href={featured.primaryUrl}>{featured.primaryLabel}</Link>
                {featured.secondaryLabel && featured.secondaryUrl && (
                  <Link className="btn btn-ghost" href={featured.secondaryUrl}>{featured.secondaryLabel}</Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All offers — card grid with image, badge, old/new price and validity */}
      <section className="section" style={{ background: 'var(--champagne)' }}>
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow center">Alle aanbiedingen</span>
            <h2>Profiteer nu van deze deals</h2>
            <p>Elke maand een nieuwe selectie voordelige opleidingen en behandelingen.</p>
          </div>
          <div className="offers-grid">
            {offers.map((o) => (
              <article className="offer-card" key={o.title}>
                <div className="offer-card-media">
                  <Media src={o.image} alt={o.title} shape="free" label={o.title} />
                  {o.badge && <span className="offer-tag">{o.badge}</span>}
                </div>
                <div className="offer-card-body">
                  <h3>{o.title}</h3>
                  <p>{o.text}</p>
                  <div className="offer-card-foot">
                    <div className="offer-price">
                      {o.oldPrice && <span className="offer-price-old">{o.oldPrice}</span>}
                      <span className="offer-price-now">{o.price}</span>
                    </div>
                    {o.validUntil && <span className="offer-valid">t/m {o.validUntil}</span>}
                  </div>
                  <Link className="btn btn-ghost" href={o.url}>{o.linkLabel || 'Bekijk aanbieding'}</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sfeer gallery strip — extra beeld */}
      {galleryImages.length > 0 && (
        <section className="section-sm">
          <div className="container">
            <div className="offer-gallery">
              {galleryImages.map((g, i) => (
                <Media key={i} src={g.image} shape="square" label="Sfeerbeeld" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why book now — icon features */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow center">{perks.eyebrow}</span>
            <h2>{perks.title}</h2>
            <p>{perks.text}</p>
          </div>
          <div className="grid-4">
            {perks.items.map((u) => (
              <div className="feature" key={u.title}>
                <div className="feature-icon"><Icon name={u.icon} size={24} /></div>
                <h3>{u.title}</h3>
                <p>{u.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand cta={cta} />
    </Shell>
  )
}
