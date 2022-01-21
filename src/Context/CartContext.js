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
    

    function cleanCart(){
        setCartList([])
    }

    console.log(cartList)

    return(
        <CartContext.Provider value={{
            cartList,   
            addToCart,
            cleanCart,
        }}>
        
            {children}
        </CartContext.Provider> 

    )
}