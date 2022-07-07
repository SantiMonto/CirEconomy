import React from 'react'
import {Card, Row, Col, Container } from 'react-bootstrap';
import Producto from '../images/producto.png';  

const Categories = () => {
  return (
      <Container className='mt-5'>
      <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 6 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={Producto} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
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

export default Categories;