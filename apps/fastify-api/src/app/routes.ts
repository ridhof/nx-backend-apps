import { FastifyInstance } from 'fastify';

export async function Routes(fastify: FastifyInstance, options) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })

  fastify.get('/ping', async (request, reply) => {
    return { pong: 'it worked' }
  })
}
