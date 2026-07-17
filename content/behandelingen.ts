/** Behandelingen hub content — data lives in behandelingen.json (CMS + AI editable). */
import type { HubContent } from '@/lib/types'

import data from './behandelingen.json'

export const behandelingen = data as unknown as HubContent
