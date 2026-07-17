/** Training detail pages, keyed by slug — data lives in trainings-detail.json (CMS + AI
 *  editable). Add a new key (via the JSON) to publish a new /opleidingen/<slug> page. */
import type { DetailCollection } from '@/lib/types'

import data from './trainings-detail.json'

export const trainingsDetail = data as unknown as DetailCollection
export const trainingSlugs = Object.keys(trainingsDetail)
