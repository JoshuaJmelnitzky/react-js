import React from 'react'
import { useState, useEffect } from 'react'
import { getFetch } from '../../helpers/mock'
import Item from './Item'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
    
        getFetch
        .then(resp => setProducts(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    
    }, [])


    return (

        <div>
            <h1>{greeting}</h1>
            { loading? <h2>Cargando ...</h2>:
            
            products.map (prod => <Item detalle = {prod.id, prod.brand, prod.model, prod.photo} />
                
            )}
        </div>
    )
}

export default ItemListContainer
