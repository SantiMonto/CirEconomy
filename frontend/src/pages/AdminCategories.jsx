import React, { useState, useEffect } from 'react'
import { Accordion, Container, Table, Form, Button } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminCategories = () => {

    const [nameCategorie, setNameCategorie] = useState([]);
    const [imgCategorie, setImgCategorie] = useState([]);

    const [categories, setCategories] = useState([]);

    const infoToSend = {
        id: categories.length+1,
        name:nameCategorie,
        image:imgCategorie
    }
    console.log(infoToSend)

    const url = 'http://127.0.0.1:5000/categories';

    const getCategories = async() => {
        const response = await fetch(url);
        const res = await response.json();
        return res;
    }

    const createCategorie = async (url,info) => {
        const response = await fetch(url, {
             method: 'POST',
             body: JSON.stringify(info),
             headers: {'Content-Type': 'application/json'},
         });
         const res = await response.json();
         console.log(res)
        return res; 
    }

    const editCategorie = async () => {
        console.log('Edita la categoria seleccionada');
    }

    const deleteCategorie = async () => {
        console.log('Elimina la categoria seleccionada');
    }

    useEffect(() => {
        //obtener categorias desde el backend
        getCategories().then((res)=>setCategories([...categories,...res.data]));
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
                                        createCategorie(url,infoToSend);
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
                                                <td>{category.id}</td>
                                                <td>{category.name}</td>
                                                <td>{category.image}</td>
                                                <td className="text-center">
                                                    <Button
                                                        className="bg-warning border-warning"
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
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre</th>
                                        <th>URL de la imagen</th>
                                        <th>Eliminar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map((category) => {
                                        return (
                                            <tr>
                                                <td>{category.id}</td>
                                                <td>{category.name}</td>
                                                <td>{category.image}</td>
                                                <td className="text-center">
                                                    <Button
                                                        className="bg-danger border-danger"
                                                        type="button"
                                                        onClick={() => {
                                                            deleteCategorie();
                                                        }}
                                                    >
                                                        <i className="fa-solid fa-trash-can"></i>
                                                    </Button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>

        </div>
    )
}

export default AdminCategories