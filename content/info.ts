/** Info / content pages (FAQ, Werken Bij, UWV Subsidie, GGD), keyed by slug — data lives in
 *  info.json (CMS + AI editable). Add a key to publish a new /<slug> info page. */
import type { InfoCollection } from '@/lib/types'

import data from './info.json'

export const info = data as unknown as InfoCollection
export const infoSlugs = Object.keys(info)
