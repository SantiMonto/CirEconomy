import { createService } from "../services/categoriesServices.js"

const createController = (request, reply) => {
  console.log('Voy a crear una categoría')
  createService()
  reply.send({ status: 'ok' })
}

const readAllController = (request, reply) => {
  console.log('Voy a leer todas las categorías')
  reply.send({ status: 'ok' })
}

export { createController, readAllController }
