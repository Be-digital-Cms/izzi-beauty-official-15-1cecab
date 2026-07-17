/** Home content — data lives in home.json (editable by the CMS Content Editor + the AI agent).
 *  This file only re-exports the JSON with the right types, so the page component stays unchanged. */
import type { HomeContent } from '@/lib/types'

import data from './home.json'

export const home = data as unknown as HomeContent
