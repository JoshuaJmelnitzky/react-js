import { useCartContext } from '../../Context/CartContext';
import './CartItem.js'
import { AiOutlineClose } from 'react-icons/ai'
;


const CartItem = ({item}) => {

    const{deleteItem} = useCartContext()

    function deleteProduct(){
        deleteItem(item)
        console.log("Producto eliminado")
    }

    return (
                    <tr key={item.id} className='w-100'>
                            <td><img src={item.img} alt={`${item.brand} ${item.name}`} style={{width: '50px'}}/></td>
                            <td>{item.brand}</td>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <td>{item.qty}</td>
                            <td>{item.qty * item.price}</td>
                            <td></td>
                            <td><AiOutlineClose className = "deleteProduct" onClick={deleteProduct}/></td>
                    </tr>

    )
};


export default CartItem;
