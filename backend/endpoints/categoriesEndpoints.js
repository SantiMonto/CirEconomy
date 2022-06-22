import { createController, readAllController } from "./categoriesControllers.js"

const categoriesEndpoints = (fastify, options, done) => {
  fastify.get('/', readAllController)
  fastify.post('/', createController)

  done()
}

export default categoriesEndpoints
