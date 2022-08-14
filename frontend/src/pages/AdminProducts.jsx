import React from 'react'
import { Accordion, Container } from 'react-bootstrap'

const AdminProducts = () => {
    return (
        <div>
            <Container>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Agregar producto</Accordion.Header>
                        <Accordion.Body>
                            Info para agregar producto
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Modificar producto</Accordion.Header>
                        <Accordion.Body>
                            Info para modificar producto
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Eliminar producto</Accordion.Header>
                        <Accordion.Body>
                            Info para eliminar producto
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    )
}

export default AdminProducts