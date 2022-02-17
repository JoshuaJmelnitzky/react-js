import { Link } from 'react-router-dom';
import { useCartContext } from '../../../Context/CartContext';
import './BuyDetail.css'
import {BsCartCheckFill} from 'react-icons/bs'

const BuyDetail = () => {

const {rebootCart, idOrder} = useCartContext();
  return (
    <div className ='buyDetail offset-md-4 cart__border col-md-4'>
        <h3>Gracias por su compra</h3>
        <BsCartCheckFill/>
        <p>Su número de orden es: {idOrder}</p>
        <Link to='/'><button onClick={rebootCart}>Volver al inicio</button></Link>
    </div>
  )
}

export default BuyDetail