import { useCartContext } from '../../Context/CartContext';
import './CartItem.css';
import {BsFillTrashFill} from 'react-icons/bs'

const CartItem = ({item}) => {

    const{deleteItem} = useCartContext()

    function deleteProduct(){
        deleteItem(item)
        console.log("Producto eliminado")
    }

    return (
        <div className = "cart__border">

            <div className = "cart__detail col-md-4 col-lg-4">
                <img src={item.img} alt={`${item.brand} ${item.name}`} style={{width: '50px'}}/>
                <li>{item.brand} {item.name}</li>
            </div>

            <div className = "col-md-4 cart__qty">
                {item.qty} unidad/es
            </div>

            <div className = "cart__price col-md-2">
                ${item.price*item.qty}
            </div>

            <div className = "col-md-2">
                <BsFillTrashFill className = "deleteProduct" onClick={deleteProduct}/>
            </div>

        </div>
    )
};


export default CartItem;
