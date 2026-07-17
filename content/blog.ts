/** Blog index + posts — data lives in blog.json (CMS + AI editable). `posts` is keyed by slug;
 *  add a key to publish a new /blog/<slug> article. */
import type { BlogCollection, BlogIndexContent } from '@/lib/types'

import data from './blog.json'

export const blogIndex = data.index as unknown as BlogIndexContent
export const posts = data.posts as unknown as BlogCollection
export const postSlugs = Object.keys(posts)
