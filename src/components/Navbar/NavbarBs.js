import './Navbar.css'
import {AiOutlineSearch} from 'react-icons/ai'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget';
import RGBbar from './RGBbar/RGBbar';


const NavbarBs= () => {

  return (
    <div className="container-fluid">

      <div className="row nav__background--color bg-dark">
        <div className="col-lg-12 col-9 col-md-12 bg-dark nav--height nav--flex nav--padding">
          <div className="col-lg-8 col-8">
            <Link to="/"><img src={logo} alt="hardbuy_logo" className="nav__logo" /></Link> 
          </div>
          <div className="search-container search-container__mobile--width search-container__mobile--position">
            <input type="checkbox" id="checkbox2"/>
            <input type="text" name="search" placeholder="Buscar" className="search-input"/>
            <AiOutlineSearch style={{color:"green", fontSize: "25px"}}/>
            <form className="search-container-mobile" action="">
              <input type="text" className="search" autoComplete="off" placeholder="Buscar..."/>
            </form>
          </div>

          <Link to ='/cart'>
              <CartWidget show = {true}/>
          </Link>

        </div>

        <div className="offset-lg-2 offset-md-2 col-lg-8 col-md-8 col-3 nav__order nav--flex">
          <nav className="navbar navbar-expand-lg navbar-expand-md navbar-dark fixed-top">
            <button className="navbar-toggler nav__collapseButton" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <div className="menu">
                <input type="checkbox" id="checkbox"/>
                <label htmlFor="checkbox" className="menu__lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto nav__listas">
                <li className="nav-item active nav__links">
                  <Link to='/products' className="nav-link">Productos</Link>
                </li>
                <li className="nav-item dropdown menu  nav__links">
                  <a className="nav-link dropdown-toggle" href="./views/buildpc.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Arma tu PC</a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="./views/error404.html">AMD</a>
                    <a className="dropdown-item" href="./views/error404.html">Intel</a>
                  </div>
                </li>
                <li className="nav-item nav__links">
                  <Link to='/account' className="nav-link">Mi Cuenta</Link>
                </li>
                <li className="nav-item nav__links">
                  <Link to='/help' className="nav-link">Ayuda</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <RGBbar/>
    </div>

  )
}

export default NavbarBs
