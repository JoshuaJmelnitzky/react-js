import React from 'react'
import { Card } from 'react-bootstrap';
import './Item.css'

const Item = ({detalle}) => {
    return (
        <div className='mb-3 productText productMargin'>
            <Card style={{ width: '18rem' }}>

                <Card.Img variant="top" src={detalle.photo} alt={detalle.brand + ' ' + detalle.model} />
                <Card.Body>
                    <Card.Title className='productBrand'>{detalle.brand}</Card.Title>
                    <Card.Text className='productModel'>{detalle.model}</Card.Text>
                    <Card.Text className='productPrice'>${detalle.price}</Card.Text>

                </Card.Body>
            </Card>
        </div>
    )
}

export default Item
