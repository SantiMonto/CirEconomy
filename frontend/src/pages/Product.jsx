import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Producto from '../images/producto.png'

const Product = () => {
    return (
        <Container className='mt-4 d-flex mx-auto'>
            <Card>
                <Card.Header className='bg-dark text-white' as="h4">Nombre del producto</Card.Header>
                <Row className='my-2 d-flex mx-auto'>
                    <Col md="auto">
                        <Card.Img style={{ width: '15rem' }} variant="top" src={Producto} />
                    </Col>
                    <Col>
                        <Card.Img className='my-1' style={{ width: '4.5rem' }} variant="top" src={Producto} />
                        <Card.Img className='my-1' style={{ width: '4.55rem' }} variant="top" src={Producto} />
                        <Card.Img className='my-1' style={{ width: '4.55rem' }} variant="top" src={Producto} />
                    </Col>
                    <Col md="auto">
                        <Card.Body>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
                <Card.Footer className='text-end bg-dark text-white'>
                    <Button className='mx-1' variant="light">Ofertar</Button>
                    <Button className='mx-1' variant="light">Regresar</Button>
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default Product