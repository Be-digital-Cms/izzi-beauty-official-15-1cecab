import Link from 'next/link'

import { site } from '@/content/site'

import { MobileMenu } from './MobileMenu'

/**
 * Header with a hover mega-menu. Top-level items with `columns` open a multi-column
 * dropdown (Behandelingen, Opleidingen); plain items are simple links. All internal
 * links use next/link; the whole nav tree is driven by content/site.json.
 */
export function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label={site.brandName}>
          {site.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img className="brand-logo" src={site.logo} alt={site.brandName} />
          ) : (
            <span className="brand-name">{site.brandName}</span>
          )}
        </Link>

        <nav className="mainnav" aria-label="Hoofdmenu">
          {site.nav.map((item) => (
            <div className="navitem" key={item.label}>
              <Link href={item.url}>
                {item.label}
                {item.columns && item.columns.length > 0 && <span className="caret" aria-hidden="true" />}
              </Link>
              {item.columns && item.columns.length > 0 && (
                <div className={`mega${item.columns.length === 1 ? ' mega-1col' : ''}`}>
                  {item.columns.map((col) => (
                    <div className="mega-col" key={col.heading}>
                      <h4>{col.heading}</h4>
                      {col.links.map((l) => (
                        <Link key={l.label} href={l.url}>
                          {l.label}
                          {l.tag && <span className="tag">{l.tag}</span>}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="header-cta">
          <Link className="btn btn-ghost" href="/opleidingen">Opleidingen</Link>
          <Link className="btn btn-gold" href={site.ctaUrl}>{site.ctaLabel}</Link>
        </div>

        <MobileMenu nav={site.nav} ctaLabel={site.ctaLabel} ctaUrl={site.ctaUrl} />
      </div>
    </header>
  )
}
