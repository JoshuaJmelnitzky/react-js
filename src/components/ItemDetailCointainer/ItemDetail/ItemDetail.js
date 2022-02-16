import ItemCount from '../../ItemCount/ItemCount'
import './ItemDetail.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../Context/CartContext'
import Products from '../../Products/Products'
import Swal from 'sweetalert2'

const ItemDetail = ({product}) => {

    let urlExist = Object.values(product).length
 
    const [show, setShow] = useState(true)

    const {addToCart} = useCartContext()

    const onAdd = (contador) => {
        setShow(false)
        addToCart( {...product, qty: contador} )
    }

    function urlFailed() {
        Swal.fire({
            timer: 2000,
            title: 'No se ha encontrado el producto ingresado',
            icon: 'error',
            showConfirmButton: false,
        })
        
    }

    return (
        <div className='container productDetail'>

            {urlExist > 1? 
            
                <div className='row col-lg-12 col-md-12 productPhoto'>
                    <div className='col-lg-6 col-md-6 productDetail--border productPhoto--height'>
                        <img className='photo' src={product.img} alt={product.brand + ' ' + product.name} />
                    </div>

                    <div className='col-lg-6 col-md-6 productDetail--border productDetail--height'>
                        <div className='product-Content'>
                            <h2 className = "product-title">{product.brand + ' ' + product.name}</h2>
                        </div>

                        <div className = "product-price">
                            <p className = "price">Precio: <span>${product.price}</span></p>
                        </div>

                        <div className = "product-detail">
                            <h2>Sobre este producto: </h2>
                            <p>{product.text1}</p>
                            <p>{product.text2}</p>
                            <p>{product.text3}</p>
                        </div>

                        <div className = "purchase-info">
                            {
                                show? <ItemCount stock={product.stock} onAdd={onAdd}/> :
                                <div className='buttonsCart'>
                                    <Link to='/cart'><button className='goToCart'>Terminar la compra</button></Link>
                                    <Link to='/products'><button className='goToHome'>Seguir comprando</button></Link>
                                </div>
                            }
                        </div>
                        
                    </div>
                </div>
            : (urlFailed(), <Products/>)}
        </div>
    )
}

export default ItemDetail


