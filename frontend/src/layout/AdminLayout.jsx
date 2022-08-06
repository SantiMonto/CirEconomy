import React from 'react'
import { Container, Nav } from 'react-bootstrap'
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <div>
            <Container>
                <Nav fill variant="tabs" defaultActiveKey="/AdminLayout">
                    <Nav.Item>
                        <Nav.Link href="/adminLayout/adminCategories">Categorias</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/adminLayout/adminProducts">Productos</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Container>
            <Outlet />
        </div>
    )
}

export default AdminLayout;