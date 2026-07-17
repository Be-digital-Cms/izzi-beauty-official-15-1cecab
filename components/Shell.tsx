import type { ReactNode } from 'react'

import { Footer } from './Footer'
import { Header } from './Header'

/** Standard page frame: sticky header + page content + footer. Interior pages wrap their
 *  sections in <Shell>…</Shell>. (The home page composes Header/Footer itself for its
 *  bespoke hero layout.) */
export function Shell({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
