import React from 'react'
import { useState, useEffect } from 'react'
import { getFetch } from '../../helpers/mock'
import ItemList from './ItemList'

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
            {loading? <h3>Cargando...</h3>: <ItemList products = {products}/>}
        </div>
    )
}

export default ItemListContainer
