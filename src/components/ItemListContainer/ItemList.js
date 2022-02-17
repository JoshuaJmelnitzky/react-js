import { memo } from "react"
import Item from "../Item/Item"
import './ItemList.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom"

const ItemList = memo( ({products}) => {
        console.log(products.length)

        return (
            <>
                {products.length > 0?         
                    <div className='row listadoProductos--allign'>
                        <div className="col-md-7 listadoProductos">
                                    {products.map((product)=>(
                                        <Item key={product.id} detalle = {product}/>
                                    ))}
                        </div>
                    </div>
                    
                    :
                    
                    <div className="itemCategoryEmpty">
                        <h3>No tenemos actualmente productos de esta categoría</h3>
                        <Link to='/products'><button>Volver a productos</button></Link>
                    </div>
                
                }
               
            </>
        
        )
    }, (oldProps, newProps) => oldProps.products.lenght === newProps.products.lenght)


export default ItemList


