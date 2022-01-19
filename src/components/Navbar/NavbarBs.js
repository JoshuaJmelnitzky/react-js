import React from 'react'
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, Dropdown, DropdownButton} from 'react-bootstrap';
import logo from '../../assets/logo.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavbarBs = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>

                <Link to='./'><img src={logo} alt="logo" style={{height: '60px', width: '220px' }}/></Link>
         
                <Nav className="me-auto">

                    <DropdownButton className = 'dropdown' id="dropdown-basic-button" title="Productos">
                        <Dropdown.Item ><Link to= '/'>Productos</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to= '/category/gpu'>Placas de Video</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to= '/category/fuentes'>Fuentes de alimentación</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to= '/category/ram'>RAM</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to= '/category/case'>Gabinetes</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to= '/category/waterColling'>Refrigeración líquida</Link></Dropdown.Item>
                        <Dropdown.Item ><Link to= '/category/ssd'>SSD</Link></Dropdown.Item>
                    </DropdownButton>


                    <Nav.Link href="#armaTuPC">Arma tu PC</Nav.Link>
                    <Nav.Link href="#MyCuenta">Mi Cuenta</Nav.Link>
                    <Nav.Link href="#Ayuda">Ayuda</Nav.Link>

                    <Link to ='/cart'>
                        <CartWidget/>
                    </Link>
                </Nav>
            </Container>
      </Navbar>
    )
}

export default NavbarBs
