import { useCartContext } from '../../Context/CartContext';
import CloseButton from 'react-bootstrap/CloseButton'
import './CartItem.js'
;


const CartItem = ({item}) => {

    const{deleteItem} = useCartContext()

    function deleteProduct(){
        deleteItem(item)
        console.log("Producto eliminado")
    }


    const subtotal=(item.price*item.qty)
    return (
                    <tr key={item.id} className='w-100'>
                            <td><img src={item.photo} alt={`${item.brand} ${item.model}`} style={{width: '50px'}}/></td>
                            <td>{item.brand}</td>
                            <td>{item.model}</td>
                            <td>${item.price}</td>
                            <td>{item.qty}</td>
                            <td></td>
                            <td><CloseButton onClick={deleteProduct}/></td>
                    </tr>

    )
};


export default CartItem;
