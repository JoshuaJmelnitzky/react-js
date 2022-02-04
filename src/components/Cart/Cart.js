import { useCartContext } from '../../Context/CartContext';
import  './Cart.css';
import CartItem from './CartItem';
import Table from 'react-bootstrap/Table'
import { Link } from 'react-router-dom';
import { BsCartX } from 'react-icons/bs'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import {Container} from 'react-bootstrap'
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
        
        setDataForm({
            email: '',
            name: '',
            phone: '',
        })
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

                                        <Container className='formContainer' >
                                            <Form  onSubmit={makePurchase} >

                                            <Form.Group className="mb-3">
                                                <Form.Label>Nombre y apellido</Form.Label>
                                                <Form.Control type="text" required="required" name='name'  placeholder="Ingrese su nombre" onChange={handleChange}
                                                value={dataForm.name}/>
                                            </Form.Group>

                                            <Form.Group className="mb-3">
                                                <Form.Label>Telefono</Form.Label>
                                                <Form.Control type="number" required="required"  name='phone' placeholder='tel' onChange={handleChange} value={dataForm.phone}/>
                                            </Form.Group>


                                                
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" required="required" name='email' placeholder='email' onChange={handleChange}value={dataForm.email} />
                                            </Form.Group>

                                            <div className='order'> 
                                                <button variant="primary" type="submit" onClick={successPurchase}>Finalizar compra</button>
                                            </div>
                                        
                                            </Form>
                                        </Container>

                
                                        <div className='cleanCart'>
                                            <button onClick={cleanCart}>Vaciar carrito</button>
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

