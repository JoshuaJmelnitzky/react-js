import React from 'react'
import { FaCartPlus } from 'react-icons/fa';
import { useCartContext } from "../../Context/CartContext"
import './CartWidget.css'

const CartWidget = ({show}) => {

    const {countItems} =  useCartContext()
    const cartItems = countItems()

    return (
        <div className='cartWidget'>
            
            {cartItems? <div>
                            {show? <div className='cartWidget--circle'>
                            <p>{cartItems}</p>
                        </div>: ''}

                        </div>: <div></div>}

            <FaCartPlus className='cartWidget--icon'/>
        </div>
    )
}


export default CartWidget
