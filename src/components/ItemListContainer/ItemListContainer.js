import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ClipLoader} from 'react-spinners'
import ItemList from './ItemList'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategory} = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = idCategory? query(collection(db, 'items'), where('category', '==', idCategory)): query(collection(db, 'items'))

        getDocs(queryCollection)
            .then(resp => setProducts(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))


    }, [idCategory])

    return (
        <div className='itemLoading--center'>
            {loading? <ClipLoader/>: <ItemList products = {products}/>}
        </div>
    )

}

export default ItemListContainer
