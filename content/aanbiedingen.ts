/** Aanbiedingen (nieuwste aanbiedingen) content — data lives in aanbiedingen.json (CMS + AI editable). */
import type { AanbiedingenContent } from '@/lib/types'

import data from './aanbiedingen.json'

export const aanbiedingen = data as unknown as AanbiedingenContent
