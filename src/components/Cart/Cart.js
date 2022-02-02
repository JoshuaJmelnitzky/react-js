import { useCartContext } from '../../Context/CartContext';
import  './Cart.css';
import CartItem from './CartItem';
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
import { BsCartX } from 'react-icons/bs'
import { addDoc, collection, getFirestore } from 'firebase/firestore'

const Cart = () => {

    const { cartList, cleanCart, totalPrice} = useCartContext()

    const makePurchase = async () => {
        let order = {}
        order.buyer = {name: 'Joshua', email: 'joshuajmelnitzkysj@gmail.com', phone: 123456789}
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
        .then(resp => console.log(resp))
        .catch(err => console.log(err))

    }

    return (
        <div className='cart'>

            {cartList.length > 0?   <div>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Foto</th>
                                                    <th>Marca</th>
                                                    <th>Modelo</th>
                                                    <th>Precio</th>
                                                    <th>cantidad</th>
                                                    <th>Subtotal</th>  
                                                    <th></th>
                                                </tr>
                                            </thead>

                                            <tbody className='justify-content-center'>
                                                {cartList.map(cart=>
                                                    <CartItem key={cart.id} item={cart}/>)}
                                            </tbody>
                                        </Table>


                                        <div className='cleanCart'>
                                            <button onClick={cleanCart}>Vaciar carrito</button>
                                        </div>,
                                        
                                        <div className='order'>
                                            <button onClick={makePurchase}>Generar orden</button>
                                        </div>,

                                    </div>
            
                                   
            
                                :   <div className='emptyCart'>
                                        <h2>No hay productos en el carrito</h2>
                                        <div className='cartIcon'>
                                            <BsCartX/>
                                        </div>
                                        <Link to = '/'>
                                            <button> Ver productos </button>
                                        </Link>
                                    </div>}
        </div>
    )
}

export default Cart

