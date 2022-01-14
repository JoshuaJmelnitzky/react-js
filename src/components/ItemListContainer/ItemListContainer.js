import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/mock'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {idCategory} = useParams()

    useEffect(() => {
        if(idCategory){
    
            getFetch
            .then(resp => setProducts(resp.filter(prod => prod.category === idCategory)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

        }else{
            getFetch
            .then(resp => setProducts(resp))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }

    }, [idCategory])


    return (

        <div>
            <h1>{greeting}</h1>
            {loading? <h3>Cargando...</h3>: <ItemList products = {products}/>}
        </div>
    )
}

export default ItemListContainer
