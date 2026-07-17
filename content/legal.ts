/** Legal / plain-text pages, keyed by slug — data lives in legal.json (CMS + AI editable).
 *  Add a key to publish a new /<slug> legal page. */
import type { LegalCollection } from '@/lib/types'

import data from './legal.json'

export const legal = data as unknown as LegalCollection
export const legalSlugs = Object.keys(legal)
