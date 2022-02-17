import Form from 'react-bootstrap/Form'
import './Checkout.css'
import { Button} from 'react-bootstrap'
import { useCartContext } from '../../../Context/CartContext';
import CartItem from '../CartItem';
import BuyDetail from '../BuyDetail/BuyDetail';

const Checkout = () => {

    const { cartList, totalPrice, makePurchase, dataForm, setDataForm, generatedOrder} = useCartContext();
    
    function handleChange(e) {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            {!generatedOrder?   <div className='formContainer' >
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
                                    <Button variant="primary" type="submit">Finalizar compra</Button>
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

            </div>: <BuyDetail/>}
        </>
 
    );
}

export default Checkout