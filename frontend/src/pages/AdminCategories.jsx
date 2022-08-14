import React, { useState, useEffect } from 'react'
import { Accordion, Container, Table, Form, Button } from 'react-bootstrap'

const AdminCategories = () => {
    const [nameCategorie, setNameCategorie] = useState([]);
    const [imgCategorie,setImgCategorie] = useState([]);

    const createCategorie = async() => {
        console.log("nombre",nameCategorie,"imagen",imgCategorie);
    }

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
                                    value = {nameCategorie}
                                    onChange ={ (e) =>{
                                        setNameCategorie(e.target.value);
                                    }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="URL">
                                    <Form.Label>URL de la imagen de la categoria</Form.Label>
                                    <Form.Control 
                                    type="img" 
                                    placeholder="Ingrese la URL de la imagen de la categoria" 
                                    value = {imgCategorie}
                                    onChange ={(e)=>{
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
                                    Agregar
                                </Button>
                            </Form>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Modificar categoria</Accordion.Header>
                        <Accordion.Body>
                            <Table striped bordered hover variant='dark'>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Nombre</th>
                                        <th>URL de la imagen</th>
                                        <th>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td colSpan={2}>Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
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