import React from 'react'
import { FaCartPlus } from 'react-icons/fa';
import './CartWidget.css'

const CartWidget = ({show}) => {

    return (
        <div className='cartWidget'>
            {show? <div className='cartWidget--circle'>

            </div>: ''}

            <FaCartPlus className='cartWidget--icon'/>
        </div>
    )
}

export default CartWidget
