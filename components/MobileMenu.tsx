'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

import type { NavItem } from '@/lib/types'

/**
 * Mobile navigation: a hamburger button that opens a full-height drawer with the whole
 * nav tree (top-level items + their mega-menu columns flattened into collapsible groups).
 * Client component (needs open/close state); driven by the same site.json nav data.
 */
export function MobileMenu({ nav, ctaLabel, ctaUrl }: { nav: NavItem[]; ctaLabel: string; ctaUrl: string }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  // Lock body scroll while the drawer is open so the background can't scroll behind it.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <div className="mobilenav">
      <button
        className="hamburger"
        aria-label={open ? 'Menu sluiten' : 'Menu openen'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span /><span /><span />
      </button>

      {open && <div className="drawer-overlay" onClick={close} />}

      <aside className={`drawer${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <div className="drawer-head">
          <span className="drawer-title">Menu</span>
          <button className="drawer-close" aria-label="Sluiten" onClick={close}>&times;</button>
        </div>
        <nav className="drawer-nav">
          {nav.map((item) => (
            <div className="drawer-group" key={item.label}>
              <Link className="drawer-link" href={item.url} onClick={close}>{item.label}</Link>
              {item.columns?.map((col) => (
                <div className="drawer-sub" key={col.heading}>
                  <span className="drawer-sub-head">{col.heading}</span>
                  {col.links.map((l) => (
                    <Link key={l.label} className="drawer-sublink" href={l.url} onClick={close}>{l.label}</Link>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </nav>
        <Link className="btn btn-gold drawer-cta" href={ctaUrl} onClick={close}>{ctaLabel}</Link>
      </aside>
    </div>
  )
}
