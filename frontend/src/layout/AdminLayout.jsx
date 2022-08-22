import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div>
            <Container className="mt-2">
                <Nav variant="pills">
                    <Nav.Item>
                        <Nav.Link className="link-dark border-dark" href="/adminLayout/adminCategories">Categorias</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="link-dark" href="/adminLayout/adminProducts" eventKey="/adminLayout/adminProducts">Productos</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
            <Outlet />
        </div>
    )
}

export default AdminLayout;