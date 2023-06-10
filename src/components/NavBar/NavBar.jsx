import React from 'react'
import {Link} from 'react-router-dom';
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
                    <Navbar.Brand><Link className="text-dark text-decoration-none" to='/'>Fragancias de Nicho</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link className="text-dark text-decoration-none" to="/">Home</Link></Nav.Link>
                            <NavDropdown title="Categorías" id="collasible-nav-dropdown">
                                <NavDropdown.Item><Link className="text-dark text-decoration-none" to='/category/male'>Masculina</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item><Link className="text-dark text-decoration-none" to='/category/female'>Femenina</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link className="text-dark text-decoration-none" to='/category/unisex'>Unisex</Link></NavDropdown.Item>
                            </NavDropdown>
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
