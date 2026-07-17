/** Opleidingen hub content — data lives in opleidingen.json (CMS + AI editable). */
import type { HubContent } from '@/lib/types'

import data from './opleidingen.json'

export const opleidingen = data as unknown as HubContent
