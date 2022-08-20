import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div>
            <Container className="mt-2">
                <Nav fill variant="tabs">
                    <Nav.Item>
                        <Nav.Link className="link-dark border border-dark" href="/adminLayout/adminCategories">Categorias</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="link-dark border border-dark" href="/adminLayout/adminProducts">Productos</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
            <Outlet />
        </div>
    )
}

export default AdminLayout;