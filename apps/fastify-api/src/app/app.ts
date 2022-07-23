import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify';

import { Routes } from './routes'

const server: FastifyInstance = Fastify({
  logger: true
})

// const opts: RouteShorthandOptions = {
//   schema: {
//    response: {
//      200: {
//        type: 'object',
//        properties: {
//          pong: {
//            type: 'string'
//          }
//        }
//      }
//    }
//  }
//}

server.register(Routes)

export const buildApp = async () => {
  try {
    await server.listen({ port: 3000 })
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

