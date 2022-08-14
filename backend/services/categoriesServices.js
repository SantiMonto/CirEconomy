import { DbInstance } from '../data/GSConnection.js'

//DbInstance.document.updateProperties({ title: 'cir-economy' });
//const sheet = DbInstance.document.addSheet({title: 'Categorias', headerValues: ['Id','name', 'image'] });

const createService = async () => {
  console.log('Estoy en el servicio de crear una categoría')
  //DbInstance.document.loadInfo();
  const sheet = DbInstance.document.sheetsByTitle['Categorias'];
  const rows = await  sheet.getRows();
  const row = await  sheet.addRow({
    Id:rows.length + 1,
    name: 'Maquinaria',
    image: 'image.png'//aqui va a ir una URL
  });
}

const readAllService = async () => {
  console.log('Estoy en el servicio de leer todas las categorias')
  const sheet = DbInstance.document.sheetsByTitle['Categorias'];
  const rows = await sheet.getRows();
  console.log(rows.length)
  //Aqui hay algo de sincronización creeria yo, pero no he podido solucionar
}

const updateOneService = async() => {
  console.log('Estoy en el servicio de actualizar una categoria')
  const sheet = DbInstance.document.sheetsByTitle['Categorias'];
  const rows = await sheet.getRows();
  rows[3].name = 'Arenas';
  await rows[3].save();
}

const deleteService = async() => {
  console.log('Estoy en el servicio de eliminar una categoria')
  const sheet = DbInstance.document.sheetsByTitle['Categorias'];
  const row = await sheet.getRows();
  await row[4].delete();

}

export { createService, readAllService, updateOneService, deleteService }
