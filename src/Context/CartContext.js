import { useState, useContext, createContext } from "react";

const CartContext =  createContext([]) 

export function useCartContext() {
    return useContext(CartContext)
};


export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState ([])

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
            addToCart,
            cleanCart,
            deleteItem,
            totalPrice}}>
        
            {children}
        </CartContext.Provider> 

    )
}