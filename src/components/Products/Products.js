import { Link } from "react-router-dom";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import './Products.css'

const Products = () => {
  return (
    <div className="container clasificacion">
        <div className="row clasificacion__mobile--justify">
        {/* <!-- Clasificación de productos --> */}
            <div className="col-lg-3 clasificacion__background">
                <div  className="clasificacion__item">
                    <h2 className="clasificacion__titulo  clasificacion__border">Categorías</h2>
                    <ul>    
                        <Link to='/category/proccessor'><li>Procesadores</li></Link>
                        <Link to='/category/case'><li>Gabinetes</li></Link>
                        <Link to='/category/motherboard'><li>Motherboard</li></Link>
                        <Link to='/category/gpu'><li>Placas de video</li></Link>
                        <Link to='/category/ram'><li>Memorias RAM</li></Link>
                        <Link to='/category/fuentes'><li>Fuentes</li></Link>
                        <Link to='/category/ssd'><li>Almacenamiento</li></Link>
                        <Link to='/category/waterColling'><li>Disipador</li></Link>
                    </ul>
                </div>
                <div className="clasificacion__item">
                    <h2 className="clasificacion__titulo  clasificacion__border">Buscar</h2>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </div>

                <div>
                    <h2 className="clasificacion__titulo clasificacion__border">Filtros</h2>
                    <input className="filtros filtros__width btn__filtrar__campos" type="text" placeholder="min"/>
                    <span>a</span>
                    <input className="filtros filtros__width btn__filtrar__campos" type="text" placeholder="max"/>
                    <button className="btn btn-outline-success btn__filtrar" type="submit">Filtrar</button>
                </div>
        </div>

        {/*  Listado de productos */}
        <div className="col-lg-9 col-10 productos productos__flex" id="container">
            <ItemListContainer/>
        </div>

    </div>
  </div>

  )
}

export default Products