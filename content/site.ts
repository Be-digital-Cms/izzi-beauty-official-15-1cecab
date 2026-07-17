/** Site-wide content (brand, mega-menu nav, footer, locations) — data lives in site.json
 *  (editable by the CMS Content Editor + the AI agent). This file re-exports it with types. */
import type { SiteContent } from '@/lib/types'

import data from './site.json'

export const site = data.site as unknown as SiteContent
