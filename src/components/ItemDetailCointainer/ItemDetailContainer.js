import React from 'react'
import { useEffect, useState } from 'react'
import { getFetch } from '../../helpers/mock'
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        getFetch
        .then(resp => setProduct(resp.find(prod => prod.id === '4')))
    }, [])

    console.log(product)
    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer
