import { useCartContext } from '../../Context/CartContext';
import  './Cart.css';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { BsCartX } from 'react-icons/bs'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useState } from 'react';
import Swal from 'sweetalert2'

const Cart = () => {

    const { cartList, cleanCart, totalPrice} = useCartContext();

    const [ idOrden, setIdOrden] = useState('');

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
        .then(resp => setIdOrden(resp.id))
        .catch(err => console.log(err))
    }

    function handleChange(e) {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }


    function successPurchase() {
        Swal.fire({
            timer: 3000,
            title: 'Producto añadido',
            text: `El número de orden es ${idOrden}`,
            icon: 'success',
            showConfirmButton: false,
            backdrop:  `rgba(0,0,0,0.6)
                        left top
                        no-repeat
                        `
        })
        
    }

    return (
        <div className='cart'>

            {cartList.length > 0?   <>
                                        <section class="col-lg-6 col-md-6 cart__list" id="cart">
                                            {cartList.map(cart=><CartItem key={cart.id} item={cart}/>)}
                                        </section>

                                        <section class = "col-md-4 col-lg-4 cart__total" id="checkout">
                                            <div class = "col-md-10 col-lg-10 cart__border cart__checkout">
                                                <h2>Resumen del pedido</h2>
                                                <h3>${totalPrice()}</h3>
                                            </div>
                                        </section>

                                        <div className='cleanCart'>
                                            <button onClick={cleanCart}>Vaciar carrito</button>
                                        </div>,

                                    </>

                                                    
                                :   <div className='emptyCart'>
                                        <h2>No hay productos en el carrito</h2>
                                        <div className='cartIcon'>
                                            <BsCartX/>
                                        </div>
                                        <Link to = '/products'>
                                            <button> Ver productos </button>
                                        </Link>

                                    </div>}
        </div>
    )
}

export default Cart

