import React from 'react'
import { Container, Carousel, Card } from 'react-bootstrap';
import inicio from '../images/inicio.jpg'

const Index = () => {
  return (
    <div>
      <section className="mt-4">
        <Card className="d-block mx-auto" style={{ width: '75rem' }} >
          <Card.Img img src={inicio} className="d-block mx-auto" alt="Inicio" />
          <Card.Body className='bg-dark'>
            <Card.Text as='h5'className='text-white'>
              CirEconomy es una pagina pensada para aportar al medio ambiente, esto mediante
              el uso de la economia circular, la cual para el caso particular busca que
              aquellas empresas luego de terminar un proyecto de construcción, remodelación, o
              en el cual tengan que utilizar materiales nuevos o maquinaria pesada, los pueda vender
              mediante una subasta al mejor postor, por lo que varias empresas o particulares pueden
              ver los productos que se están subastando y enviar una oferta por estos.
            </Card.Text>
          </Card.Body>
        </Card>
      </section>
      <hr/>
      <Container className="mt-4">
        <a href="/categories" className="link-dark">
          <h2>Categorias</h2>
        </a>
        <Carousel className='mt-5' variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=f5f5f5"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=eee"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=e5e5e5"
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