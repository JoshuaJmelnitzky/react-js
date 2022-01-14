import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/mock'
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const {idDetail} = useParams()

    useEffect(() => {
        getFetch
        .then(resp => setProduct(resp.find(prod => prod.id === idDetail)))
    }, [idDetail])

    console.log(product)
    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer
