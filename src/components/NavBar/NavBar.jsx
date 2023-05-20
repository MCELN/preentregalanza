import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light">
                <Container>
                    <Navbar.Brand href="#home">Fragancias de Nicho</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#historias">Historias</Nav.Link>
                            <NavDropdown title="Productos" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#todos">Todas las Fragancias</NavDropdown.Item>
                                <NavDropdown.Item href="#Femeninas">
                                    Femeninas
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#Masculinas">Masculinas</NavDropdown.Item>
                                <NavDropdown.Item href="#unisex">
                                    Unisex
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#productos">Nosotros</Nav.Link>
                        </Nav>
                        <Nav>
                            <CartWidget />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
