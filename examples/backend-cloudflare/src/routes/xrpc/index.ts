import { Hono } from 'hono'

import { addRoutes as groupRoutes } from './groups'
import { addRoutes as postRoutes } from './posts'
import { addRoutes as proxyRoutes } from './proxy'
import { group } from 'console'

export function addRoutes(app: Hono) {
  // custom xrpc routes
  postRoutes(app)
  groupRoutes(app)

  // should be last as fallback
  proxyRoutes(app)
}