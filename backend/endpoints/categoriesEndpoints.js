import { createController, readAllController, upadteOneController, deleteController } from "./categoriesControllers.js"

const categoriesEndpoints = (fastify, options, done) => {
  fastify.get('/', readAllController)
  fastify.post('/', createController)
  fastify.put('/', upadteOneController)
  fastify.delete('/', deleteController)

  done()
}

export default categoriesEndpoints
