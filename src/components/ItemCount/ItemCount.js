import React, { useState } from 'react';
import CartWidget from '../Navbar/CartWidget';
import './ItemCount.css';

const ItemCount = ({stock, onAdd}) => {

    const [counter, setCounter] = useState(1)

    const handleIncrement = () => {
        if (counter < stock) setCounter(prev => prev + 1)
    }

    const handleDecrement = () =>{
        if (counter > 1) setCounter(prev => prev - 1)
    }


    return (
        <div className='counter'>

            <button onClick={handleDecrement}> -</button>

            <h1>{counter}</h1>

            <button onClick={handleIncrement}>+</button>

            {
               <button className='addToCart' onClick={()=> onAdd(counter)}>Agregar al carrito <CartWidget show={false} /></button>
            }


        </div>
    )
}

export default ItemCount

