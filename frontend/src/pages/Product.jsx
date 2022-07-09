import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Producto from '../images/producto.png'
import { useNavigate } from 'react-router-dom';



const Product = () => {
    const navigate = useNavigate();

    const handleRegresar = () => {
        navigate('/Products', { replace: true });
    }

    return (
        <Container className='my-2 d-flex'>
            <Card>
                <Card.Header className='bg-dark text-white' as="h4">Nombre del producto</Card.Header>
                <Row className='d-flex my-2 mx-auto'>
                    <Col className='d-grid col-md-4 justify-content-center'>
                        <Card.Img style={{ width: '16rem' }} variant="top" src={Producto} />
                    </Col>
                    <Col className='d-grid d-inline col-md-1 justify-content-center'>
                        <Card.Img className='my-1' style={{ width: '5rem' }} src={Producto} />
                        <Card.Img className='my-1' style={{ width: '5rem' }} src={Producto} />
                        <Card.Img className='my-1' style={{ width: '5rem' }} src={Producto} />
                    </Col>
                    <Col className='d-flex col-md-7 justify-content-center'>
                        <Card.Body>
                            <Card.Text>
                                <p>
                                    <h3>Nombre del producto</h3>
                                </p>
                                <p>
                                    <h6>
                                        Descripcion del producto, donde se den detalles tecnicos y
                                        se garantice la calidad del producto sobrante a vender
                                    </h6>
                                </p>
                                <section className='my-1'>
                                    <h6>Este es el valor en COP actual de la subasta</h6>
                                    <input placeholder="Valor inicial de la subasta" readOnly />
                                </section>
                                <section className='my-1'>
                                    <h6>Ingrese el valor que desea ofertar en COP</h6>
                                    <input className="mb-3" placeholder="Valor a ofertar" defaultValue={'$'}>
                                    </input>
                                </section>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
                <Card.Footer className='text-end bg-white text-white'>
                    <Button className='mx-1' variant="dark">Ofertar</Button>
                    <Button className='mx-1 border-dark' variant="light" onClick={handleRegresar}>
                        Regresar
                    </Button>
                </Card.Footer>
            </Card>
        </Container>
    )
}

export default Product