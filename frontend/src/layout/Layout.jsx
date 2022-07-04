import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Layout = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" border="true">
        <Container size="xl">
          <Navbar.Brand href="/">
            <h1>
              <i class="fa-solid fa-recycle"></i> Cir-Economy
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" >
              <Nav.Link href="/">Inicio</Nav.Link>
              <Nav.Link href="/Categories">Categorias</Nav.Link>
              <Nav.Link href="/Products">Productos</Nav.Link>
              <Nav.Link href="/Cart"><i class="fa-solid fa-cart-shopping"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  )
}

export default Layout;