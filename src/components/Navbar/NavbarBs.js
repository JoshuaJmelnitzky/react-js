import React from 'react'
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import CartWidget from './CartWidget';

const NavbarBs = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <img src={logo} alt="logo" style={{height: '60px', width: '220px' }}/>
            <Nav className="me-auto">
                <Nav.Link href="#productos">Productos</Nav.Link>
                <Nav.Link href="#armaTuPC">Arma tu PC</Nav.Link>
                <Nav.Link href="#MyCuenta">Mi Cuenta</Nav.Link>
                <Nav.Link href="#Ayuda">Ayuda</Nav.Link>
                <Nav.Link href="#cartWidget"><CartWidget/></Nav.Link>
            </Nav>
            </Container>
      </Navbar>
    )
}

export default NavbarBs
