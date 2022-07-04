import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import Producto from '../images/producto.png'

const Product = () => {
    return (
        <Container className='mt-4'>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant="top" src={Producto} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default Product