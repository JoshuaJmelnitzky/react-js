import React from 'react'
import Container from 'react-bootstrap/Container';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/logo.png'

const NavbarBs = () => {
    return ( <
        Navbar bg = "dark"
        variant = "dark" >
        <
        Container >
        <
        img src = { logo }
        alt = "logo"
        style = {
            { height: '60px', width: '250px' }
        }
        /> <
        Nav className = "me-auto" >
        <
        Nav.Link href = "#productos" > Productos < /Nav.Link> <
        Nav.Link href = "#Arma tu PC" > Arma tu PC < /Nav.Link> <
        Nav.Link href = "#Mi Cuenta" > Mi Cuenta < /Nav.Link> <
        Nav.Link href = "#Ayuda" > Ayuda < /Nav.Link> < /
        Nav > <
        /Container> < /
        Navbar >
    )
}

export default NavbarBs