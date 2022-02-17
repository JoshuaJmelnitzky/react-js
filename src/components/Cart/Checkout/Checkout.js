import Form from 'react-bootstrap/Form'
import './Checkout.css'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { useState } from 'react';
import { useCartContext } from '../../../Context/CartContext';
import CartItem from '../CartItem';

const Checkout = () => {

    const { cartList, totalPrice} = useCartContext();

    const [ idOrden, setIdOrden] = useState('');
    
    const [ dataForm , setDataForm ] = useState({
        email: '',
        name: '',
        phone: '',
    }); 
    
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

    return (
        <div className='formContainer' >

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>

                        <Form  onSubmit={makePurchase} >

                            <Form.Group className="col-md-12 inputCheckout">
                                <Form.Label>Nombre y apellido</Form.Label>
                                <Form.Control type="text" required="required" name='name'  placeholder="Ingrese su nombre" onChange={handleChange}
                                value={dataForm.name}/>
                            </Form.Group>

                            <Form.Group className="col-md-12 inputCheckout">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control type="number" required="required"  name='phone' placeholder='teléfono' onChange={handleChange} value={dataForm.phone}/>
                            </Form.Group>

                            <Form.Group className="col-md-12 inputCheckout" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" required="required" name='email' placeholder='email' onChange={handleChange}value={dataForm.email} />
                            </Form.Group>

                            <div className='order'> 
                                {(dataForm.email !== '' && dataForm.name !== '' && dataForm.phone !== '')? <button variant="primary" type="submit" onClick={successPurchase}>Finalizar compra</button>: <button disabled>Finalizar compra</button>} 
                            </div>

                        </Form>

                    </div>

                    <div className='col-lg-6 cartBorder--checkout'> 
                        {cartList.map(cart=><CartItem key={cart.id} item={cart}/>)}
                        <div className='cartCheckout--total'>
                            Total ${totalPrice()}
                        </div>
                  
                    </div>
                    
                </div>
            </div>

        </div>
    );
}

export default Checkout