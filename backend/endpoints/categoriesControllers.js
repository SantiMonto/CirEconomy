import { createService, deleteService, readAllService, updateOneService } from "../services/categoriesServices.js"

const createController = async(request, reply) => {
  console.log('Voy a crear una categoría')
  const {id,name,image} = await request.body;
  const infoToSend = await createService(id,name,image)
  reply.send({ status: 'ok created', data:infoToSend})
}

const readAllController = async(request, reply) => {
  console.log('Voy a leer todas las categorías')
  const rows = await readAllService()
  reply.send({ status: 'ok read', data:rows})
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
