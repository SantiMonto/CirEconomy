import React from 'react'
import { Container, Carousel, Card, Row, Col } from 'react-bootstrap';
import inicio from '../images/inicio.jpg'

const Index = () => {
  return (
    <div>
      <Card className="d-flex mx-auto" align='middle' >
        <Card.Body>
          <Row className='my-2 mx-auto row-cols-auto'>
            <Col className='d-flex mx-auto p-2 col-md-4 btn-group-vertical' align='justify'>
              <Card.Text as='h5' className='text-black'>
                CirEconomy es una pagina pensada para aportar al medio ambiente, la cual busca que
                aquellas empresas luego de terminar un proyecto de construcción, remodelación, o
                en el cual utilicen materiales nuevos o maquinaria pesada, los pueda vender
                mediante una subasta al mejor postor, en donde empresas o particulares pueden
                ver los productos que subastados y enviar ofertas por estos.
              </Card.Text>
            </Col>
            <Col className='d-block mx-auto col-md-8'>
              <Card.Img img src={inicio} className=" mx-auto mt-2 w-75" alt="Inicio" />
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Container className="d-flex my-4">
        <a href="/categories" className="link-dark" >
          <h2>Categorias</h2>
        </a>
        <Carousel className='d-flex my-4' variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-50 mx-auto"
              src={inicio}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50 mx-auto"
              src={inicio}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-50 mx-auto"
              src={inicio}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>


    </div>
  )
}

export default Index;