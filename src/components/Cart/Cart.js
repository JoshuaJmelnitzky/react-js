import { useCartContext } from '../../Context/CartContext';
import React from 'react';
import  './Cart.css';

const Cart = () => {

    const { cartList, cleanCart} = useCartContext()

    return (
        <div className='cart'>

            {cartList.map(prod => <li key={prod.id}>{prod.brand} {prod.model} --- cant: {prod.qty}</li>)}

            {cartList.length > 0? <button onClick={cleanCart}>Vaciar carrito</button>: "no hay nada en el carrito :( "}
        </div>
    )
}

export default Cart


