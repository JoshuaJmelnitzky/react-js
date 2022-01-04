import React from "react"
import Item from "../Item/Item"
import './ItemList.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const ItemList = ({products}) => {
    return (
      
        <div className='row listadoProductos--allign'>
            <div className="col-md-7 listadoProductos">
                        {products.map((product)=>(
                            <Item key={product.id} detalle = {product}/>
                        ))}
            </div>
        </div>
    )
}

export default ItemList


