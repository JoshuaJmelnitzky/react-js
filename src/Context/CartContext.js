import { useState, useContext, createContext } from "react";
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const CartContext =  createContext([]) 

export function useCartContext() {
    return useContext(CartContext)
};


export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState ([])

    const [idOrder, setIdOrder] = useState('');

    const[ generatedOrder, setGeneratedOrder ] = useState(false)

    const [ dataForm , setDataForm ] = useState({
        email: '',
        name: '',
        phone: '',
    }); 


    const makePurchase = async (e) => {
        e.preventDefault()
        let order = {}
        order.buyer = dataForm
        order.total = totalPrice();
    
        order.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const name = cartItem.name;
            const price = cartItem.price * cartItem.qty;
    
            return {id, name, price}
        })
    
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        await addDoc(orderCollection, order)
        .then(resp => setIdOrder(resp.id))
        .catch(err => console.log(err))
        .finally(()=>setGeneratedOrder(true))
    }


    function addToCart(items) {

        const id = cartList.findIndex(i => i.id === items.id)

        if (id > -1){

            const oldQty = cartList[id].qty

            let newQty = oldQty + items.qty

            cartList[id].qty = newQty

            let sndArray = [...cartList]
            
            setCartList(sndArray)

        }else{
            setCartList([...cartList, items])
        }

    }

    function rebootCart(){
        setCartList([])
        setGeneratedOrder(false)
        setDataForm({   email: '',
                        name: '',
                        phone: '',})
        setIdOrder('')
        }


    function countItems(){
        return cartList.map(productosCart=>productosCart.qty).reduce((prev,next) => prev+next,0)
    }
    
    function totalPrice(){
        return cartList.reduce((acum, prod) => acum + (prod.qty * prod.price), 0)
    }

    function cleanCart(){
        setCartList([])
    }

    
    function deleteItem(item){
        const itemID = cartList.findIndex(i => i.id === item.id)
        cartList.splice(itemID,1)
        setCartList([...cartList])

    }

    return(
        <CartContext.Provider value={{
            cartList,   
            dataForm,
            idOrder,
            generatedOrder,
            rebootCart,
            addToCart,
            cleanCart,
            deleteItem,
            totalPrice,
            countItems,
            makePurchase,
            setDataForm,
            setGeneratedOrder}}>
        
            {children}
        </CartContext.Provider> 

    )
}