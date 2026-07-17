/** Over IZZI content — data lives in over.json (CMS + AI editable). */
import type { OverContent } from '@/lib/types'

import data from './over.json'

export const over = data as unknown as OverContent
