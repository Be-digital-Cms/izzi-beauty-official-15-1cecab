/** Prijzen content — data lives in prijzen.json (CMS + AI editable). */
import type { PrijzenContent } from '@/lib/types'

import data from './prijzen.json'

export const prijzen = data as unknown as PrijzenContent
