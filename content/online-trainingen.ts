/** Online trainingen hub content — data lives in online-trainingen.json (CMS + AI editable). */
import type { HubContent } from '@/lib/types'

import data from './online-trainingen.json'

export const onlineTrainingen = data as unknown as HubContent
