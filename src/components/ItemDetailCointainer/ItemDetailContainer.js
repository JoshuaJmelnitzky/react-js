import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'
import { ClipLoader} from 'react-spinners'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {idDetail} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryProd = doc(db, 'items', idDetail)

        getDoc(queryProd)
            .then(resp => setProduct({id: resp.id, ...resp.data()}))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
     

    }, [idDetail])

    return (

        <div className='itemLoading--center'>
            {loading? <ClipLoader/>: <ItemDetail  product={product}/>}
    
        </div>
    )
}

export default ItemDetailContainer
