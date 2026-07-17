/** Portfolio content — data lives in portfolio.json (CMS + AI editable). Images may be empty
 *  strings; the gallery renders a blank placeholder tile until a client uploads photos. */
import type { PortfolioContent } from '@/lib/types'

import data from './portfolio.json'

export const portfolio = data as unknown as PortfolioContent
