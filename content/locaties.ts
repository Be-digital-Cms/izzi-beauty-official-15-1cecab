/** SEO location pages, keyed by city slug — data lives in locaties.json (CMS + AI editable).
 *  Add a key (e.g. "rotterdam") to publish /wenkbrauwen/<stad>. The footer links to these. */
import type { LocationPageCollection } from '@/lib/types'

import data from './locaties.json'

export const locaties = data as unknown as LocationPageCollection
export const locatieSlugs = Object.keys(locaties)
