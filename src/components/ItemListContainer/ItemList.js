import { memo } from "react"
import Item from "../Item/Item"
import './ItemList.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemList = memo( ({products}) => {

        return (
            <div className='row listadoProductos--allign'>
                <div className="col-md-7 listadoProductos">
                            {products.map((product)=>(
                                <Item key={product.id} detalle = {product}/>
                            ))}
                </div>
            </div>
        )
    }, (oldProps, newProps) => oldProps.products.lenght === newProps.products.lenght)


export default ItemList


