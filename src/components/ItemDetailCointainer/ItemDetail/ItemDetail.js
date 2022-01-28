import ItemCount from '../../ItemCount/ItemCount'
import './ItemDetail.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../../Context/CartContext'

const ItemDetail = ({product}) => {

    const [show, setShow] = useState(true)

    const {addToCart} = useCartContext()

    const onAdd = (contador) => {
        setShow(false)
        addToCart( {...product, qty: contador} )
    }


    return (
        <div className='row productDetail'>

            <div className='col-md-4 productDetail--list'>
                <div >
                    <img className='photo' src={product.img} alt={product.brand + ' ' + product.name} />
                </div>
            </div>

            <div className='col-md-4 productDetail--list'>
                <div className='product-Content'>
                    <h2 className = "product-title">{product.brand + ' ' + product.name}</h2>

                </div>

                <div className = "product-price">
                    <p className = "price">Precio: <span>${product.price}</span></p>
                </div>

                <div className = "product-detail">
                    <h2>Sobre este producto: </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
                 </div>

                 <div className = "purchase-info">
                     {
                         show? <ItemCount stock={product.stock} onAdd={onAdd}/> :
                         <div className='buttonsCart'>
                            <Link to='/cart'><button className='goToCart'>Terminar la compra</button></Link>
                            <Link to='/'><button className='goToHome'>Seguir comprando</button></Link>
                         </div>
                     }
                 
                </div>

            </div>

        </div>
    )
}

export default ItemDetail
