import Link from 'next/link'

import { site } from '@/content/site'

import { Icon } from './icons'

/** True for on-site routes ("/..."), so they use next/link; external URLs use <a>. */
function isInternal(url: string) {
  return url.startsWith('/')
}

function FooterLink({ url, label }: { url: string; label: string }) {
  return isInternal(url) ? (
    <Link href={url}>{label}</Link>
  ) : (
    <a href={url} target="_blank" rel="noreferrer">{label}</a>
  )
}

export function Footer() {
  const f = site.footer
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            {site.logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="footer-logo" src={site.logo} alt={site.brandName} />
            ) : (
              <div className="footer-brand-name">{site.brandName}</div>
            )}
            <p>{f.about}</p>
            <div className="footer-contact">
              <div><b>E-mail</b>{f.email}</div>
              <div><b>Telefoon</b>{f.phone}</div>
            </div>
            <div className="footer-socials">
              {f.socials.map((s) => (
                <a key={s.label} href={s.url} aria-label={s.label} target="_blank" rel="noreferrer">
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {f.columns.map((col) => (
            <div key={col.heading}>
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}><FooterLink url={l.url} label={l.label} /></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <span>{f.rightsText}</span>
          <FooterLink url={f.legalUrl} label={f.legalLabel} />
        </div>
      </div>
    </footer>
  )
}
