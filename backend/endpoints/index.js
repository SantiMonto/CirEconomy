import categoriesEndpoints from "./categoriesEndpoints.js"

const routes = (fastify, options, done) => {
  fastify.register(categoriesEndpoints, { prefix: '/categories' })
  
  done()
}

export default routes
