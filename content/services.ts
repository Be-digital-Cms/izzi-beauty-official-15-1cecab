/** Treatment detail pages, keyed by slug — data lives in services.json (CMS + AI editable).
 *  Add a new key here (via the JSON) to publish a new /behandelingen/<slug> page. */
import type { DetailCollection } from '@/lib/types'

import data from './services.json'

export const services = data as unknown as DetailCollection
export const serviceSlugs = Object.keys(services)
