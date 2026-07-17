import type { Metadata } from 'next'

import Form from '@/components/Form'
import { Shell } from '@/components/Shell'
import { CtaBand, LocationCards, PageHero } from '@/components/sections'
import { contact } from '@/content/contact'

export const metadata: Metadata = {
  title: 'Contact — IZZI Beauty',
  description: contact.hero.text,
}

export default function ContactPage() {
  return (
    <Shell>
      <PageHero {...contact.hero} />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="eyebrow">{contact.intro.title}</span>
              <h2>{contact.intro.title}</h2>
              <p>{contact.intro.text}</p>
            </div>
            <div className="contact-form">
              <Form slug="contact" />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--champagne)' }}>
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow center">Onze locaties</span>
            <h2>Bezoek een van onze studio&rsquo;s</h2>
          </div>
          <LocationCards items={contact.locations} />
        </div>
      </section>

      <CtaBand cta={contact.cta} />
    </Shell>
  )
}
