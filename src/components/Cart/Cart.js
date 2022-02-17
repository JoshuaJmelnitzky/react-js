import { useCartContext } from '../../Context/CartContext';
import  './Cart.css';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { BsCartX } from 'react-icons/bs'

const Cart = () => {

    const { cartList, cleanCart, totalPrice} = useCartContext();

    return (
        <div className='cart'>

            {cartList.length > 0?   <>
                                        <section className="col-lg-6 col-md-6 cart__list" id="cart">
                                            {cartList.map(cart=><CartItem key={cart.id} item={cart}/>)}
                                        </section>

                                        <section className = "col-md-4 col-lg-4 cart__total" id="checkout">
                                            <div className = "col-md-10 col-lg-10 cart__border cart__checkout">
                                                <h2>Resumen del pedido</h2>
                                                <h3>${totalPrice()}</h3>
                                            </div>

                                            <div className='buttonCart'>
                                                <div className='cleanCart'>
                                                    <button onClick={cleanCart}>Vaciar carrito</button>
                                                </div>

                                                <Link to='/checkout'><button>Checkout</button></Link>   
                                             
                                            </div>

                                        </section>

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

