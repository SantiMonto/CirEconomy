import { DbInstance } from '../data/GSConnection.js'

//DbInstance.document.updateProperties({ title: 'cir-economy' });
//const sheet = DbInstance.document.addSheet({title: 'Categorias', headerValues: ['Id','name', 'image'] });

const createService = async (id,name,image) => {
  console.log('Estoy en el servicio de crear una categoría')
  //DbInstance.document.loadInfo();
  const sheet = DbInstance.document.sheetsByTitle['Categorias'];
  const rows = await sheet.getRows();
  const row = await sheet.addRow({
    Id: id,
    name: name,
    image: image,
  });
  return row;
}

const readAllService = async () => {
  console.log('Estoy en el servicio de leer todas las categorias')
  const sheet = DbInstance.document.sheetsByTitle['Categorias'];
  const array = [];
  const rows = await sheet.getRows();
  rows.map((row) => {
    array.push({id:row.Id,name:row.name,image:row.image});
  })
  return array;
}

const updateOneService = async () => {
  console.log('Estoy en el servicio de actualizar una categoria')
  const sheet = DbInstance.document.sheetsByTitle['Categorias'];
  const rows = await sheet.getRows();
  rows[3].name = 'Arenas';
  await rows[3].save();
}

const deleteService = async () => {
  console.log('Estoy en el servicio de eliminar una categoria')
  const sheet = DbInstance.document.sheetsByTitle['Categorias'];
  const row = await sheet.getRows();
  await row[4].delete();

}

export { createService, readAllService, updateOneService, deleteService }
