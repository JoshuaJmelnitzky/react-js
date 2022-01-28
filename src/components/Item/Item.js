import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css'

const Item = ({detalle}) => {
    return (
        <div className='mb-3 productText productMargin'>
            <Card style={{ width: '18rem' }}>

                <Card.Img variant="top" src={detalle.img} alt={detalle.brand + ' ' + detalle.name} />
                <Card.Body>
                    <Card.Title className='productBrand'>{detalle.brand}</Card.Title>
                    <Card.Text className='productModel'>{detalle.name}</Card.Text>
                    <Card.Text className='productPrice'>${detalle.price}</Card.Text>
                    <Link to={`/ItemDetail/${detalle.id}`}>
                        <button>
                            Detalle del producto
                        </button>
                    </Link>
               
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item


