import React, { useState, useEffect } from 'react'
import { Accordion, Container, Table, Form, Button} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminCategories = () => {

    const categoriesBackend = [
        {
            item: 1,
            nombre: 'Residuos de arena',
            urlImagen: 'www.imagenesweb.con/residuos'
        },
        {
            item: 2,
            nombre: 'Repuestos de maquinaria',
            urlImagen: 'www.imagenesweb.con/repuestos'
        },
        {
            item: 3,
            nombre: 'Acero',
            urlImagen: 'www.imagenesweb.con/acero'
        },
    ];

    const [nameCategorie, setNameCategorie] = useState([]);
    const [imgCategorie, setImgCategorie] = useState([]);
    const [categories, setCategories] = useState([]);

    const createCategorie = () => {
        console.log("nombre", nameCategorie, "imagen", imgCategorie);
        toast.success('Categoria creada con exito');
        setCategories([...categories,{item:categories.length,nombre:nameCategorie,urlImagen:imgCategorie}])
    }

    const getCategories = async () => {
        console.log('ver categorias');
    }

    const editCategorie = async () => {
        console.log('Edita la categoria seleccionada');
    }

    useEffect(() => {
        //obtener categorias desde el backend
        setCategories(categoriesBackend);
    }, []);

    return (
        <div>
            <Container>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Agregar categoria</Accordion.Header>
                        <Accordion.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="Name">
                                    <Form.Label>Nombre de la categoria</Form.Label>
                                    <Form.Control
                                        type="name"
                                        placeholder="Ingrese el nombre de la nueva categoria"
                                        value={nameCategorie}
                                        onChange={(e) => {
                                            setNameCategorie(e.target.value);
                                        }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="URL">
                                    <Form.Label>URL de la imagen de la categoria</Form.Label>
                                    <Form.Control
                                        type="img"
                                        placeholder="Ingrese la URL de la imagen de la categoria"
                                        value={imgCategorie}
                                        onChange={(e) => {
                                            setImgCategorie(e.target.value);
                                        }}
                                    />
                                </Form.Group>
                                <Button
                                    variant="dark"
                                    type="button"
                                    onClick={() => {
                                        createCategorie();
                                    }}
                                >
                                    Agregar Categoria
                                </Button>
                                <ToastContainer
                                    position="bottom-right"
                                    autoClose={5000}
                                />
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Modificar categoria</Accordion.Header>
                        <Accordion.Body>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre</th>
                                        <th>URL de la imagen</th>
                                        <th>Editar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map((category) => {
                                        return (
                                            <tr>
                                                <td>{category.item}</td>
                                                <td>{category.nombre}</td>
                                                <td>{category.urlImagen}</td>
                                                <td>
                                                    <Button
                                                        type="button"
                                                        onClick={() => {
                                                            editCategorie();
                                                        }}
                                                    >
                                                        <i className="fa-solid fa-pen-to-square"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Eliminar categoria</Accordion.Header>
                        <Accordion.Body>
                            Info para eliminar categoria
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>

        </div>
    )
}

export default AdminCategories