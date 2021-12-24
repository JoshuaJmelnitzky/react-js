import React from 'react'
import { FaCartPlus } from 'react-icons/fa';
import './Navbar.css'

const CartWidget = () => {
    return (
        <div>
            <FaCartPlus className='cartwidget'/>
        </div>
    )
}

export default CartWidget
