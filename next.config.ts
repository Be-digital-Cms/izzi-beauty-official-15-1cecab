import { readFileSync } from 'node:fs'
import path from 'node:path'

import type { NextConfig } from 'next'
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'

/**
 * Phase-function config so the build output dir is chosen automatically:
 *  - `next dev`         → `.next`         (local preview/dev server)
 *  - local `next build` → `.next-verify`  (isolated, so the platform's validation build never
 *                                          clashes with a running dev server sharing `.next`)
 *  - Vercel build       → `.next`         (VERCEL=1)
 * `IZZI_DIST_DIR` overrides everything (the platform passes it for the validation build).
 *
 * Redirects are data-driven: `content/redirects.json` holds the list, edited via the CMS (AI or the
 * manual redirects editor) as a change request. This config reads that file and hands it to Next's
 * native `redirects()`, so a redirect works on Vercel, locally and any host. Missing/invalid file →
 * no redirects (never breaks the build).
 */
type RedirectRule = { source: string; destination: string; permanent: boolean }
function loadRedirects(): RedirectRule[] {
  try {
    const raw = JSON.parse(readFileSync(path.join(process.cwd(), 'content', 'redirects.json'), 'utf8'))
    const list = Array.isArray(raw?.redirects) ? raw.redirects : []
    return list.filter(
      (r: unknown): r is RedirectRule =>
        !!r && typeof (r as RedirectRule).source === 'string' && typeof (r as RedirectRule).destination === 'string',
    )
  } catch {
    return []
  }
}

export default (phase: string): NextConfig => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const distDir = process.env.IZZI_DIST_DIR || (!isDev && !process.env.VERCEL ? '.next-verify' : '.next')
  return {
    reactStrictMode: true,
    distDir,
    async redirects() {
      return loadRedirects().map((r) => ({
        source: r.source,
        destination: r.destination,
        permanent: r.permanent !== false,
      }))
    },
  }
}
