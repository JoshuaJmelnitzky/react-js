import React, { useState } from 'react';
import CartWidget from '../Navbar/CartWidget';
import './ItemCount.css';

const ItemCount = ({max}) => {

    const [counter, setCounter] = useState(1)
    const [cart, setCart] = useState(true)


    const handleIncrement = () => {
        setCart(true)
        counter < max? setCounter(prev => prev + 1): setCart(false)
    }

    const handleDecrement = () =>{
        setCart(true)
        counter > 1? setCounter(prev => prev - 1): setCart(false)
    }

    const onAdd = () =>{
        alert("Se ha añadido el producto al carrito")
    }

    return (
        <div className='counter'>

            <button onClick={handleDecrement}> -</button>

            <h1>{counter}</h1>

            <button onClick={handleIncrement}>+</button>

            {
                cart? <button className='addToCart' onClick={onAdd}>Agregar al carrito <CartWidget/>  </button>: <button disabled>Agregar al carrito</button>
            }


        </div>
    )
}

export default ItemCount

