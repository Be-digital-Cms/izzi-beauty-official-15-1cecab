/** Contact content — data lives in contact.json (CMS + AI editable). */
import type { ContactContent } from '@/lib/types'

import data from './contact.json'

export const contact = data as unknown as ContactContent
