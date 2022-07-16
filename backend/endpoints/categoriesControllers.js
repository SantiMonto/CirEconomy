import { createService, deleteService, readAllService, updateOneService } from "../services/categoriesServices.js"

const createController = (request, reply) => {
  console.log('Voy a crear una categoría')
  createService()
  reply.send({ status: 'ok created' })
}

const readAllController = (request, reply) => {
  console.log('Voy a leer todas las categorías')
  readAllService()
  reply.send({ status: 'ok read' })
}

const upadteOneController = (request, reply) => {
  console.log('Voy a actualizar una categoria')
  updateOneService()
  reply.send({ status:'ok updated'})
}

const deleteController = (request, reply) => {
  console.log('Voy a eliminar una categoria')
  deleteService()
  reply.send({ status:'ok deleted'})
}

export { createController, readAllController, upadteOneController, deleteController }
