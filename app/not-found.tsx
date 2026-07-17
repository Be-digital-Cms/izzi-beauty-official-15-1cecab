import Link from 'next/link'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export default function NotFound() {
  return (
    <>
      <Header />
      <section className="pagehero">
        <div className="container">
          <div className="pagehero-inner">
            <span className="eyebrow">404</span>
            <h1>Pagina niet gevonden</h1>
            <p>De pagina die je zoekt bestaat niet (meer). Ga terug naar de homepage of bekijk onze behandelingen.</p>
            <div style={{ marginTop: 30, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              <Link className="btn btn-gold" href="/">Naar de homepage</Link>
              <Link className="btn btn-light" href="/behandelingen">Bekijk behandelingen</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
