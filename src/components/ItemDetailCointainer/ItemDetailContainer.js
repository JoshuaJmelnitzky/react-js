import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../../helpers/mock'
import ItemDetail from './ItemDetail/ItemDetail'
import { ClipLoader} from 'react-spinners'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const {idDetail} = useParams()

    useEffect(() => {
        getFetch
        .then(resp => setProduct(resp.find(prod => prod.id === idDetail)))
        .finally(() => setLoading(false))
    }, [idDetail])

    console.log(product)
    return (
        <div>
            {loading? <ClipLoader/>: <ItemDetail product={product}/>}
        </div>
    )
}

export default ItemDetailContainer
