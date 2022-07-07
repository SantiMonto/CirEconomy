import React from 'react'
import { Card, Row, Col, Container} from 'react-bootstrap';
import Producto from '../images/producto.png';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <Container className='mt-5'>
      <Row xs={1} md={4} className="g-4">
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={Producto} />
              <Card.Body>
                <Card.Title >
                  <Link to={`/products/${idx}`}>
                  Producto
                  </Link>
                  </Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Products;