import FastifyClass from "fastify"
import routes from "./endpoints/index.js"
import { DbInstance } from "./data/GSConnection.js"
import cors from '@fastify/cors'


const fastify = FastifyClass({
    logger: true
})

fastify.register(cors);

fastify.get('/api', function (request, reply) {
    reply.send({ status: 'OK' })
})

fastify.register(routes)

await DbInstance.connect()

const PORT = 5000
fastify.listen({ port: PORT }, function (err, address) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    console.log(`El servidor golió. Esta escuchando en el puerto ${PORT}`)
})
