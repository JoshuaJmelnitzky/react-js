import React from 'react'
import { Card } from 'react-bootstrap';

const Item = ({detalle}) => {
    return (
        <div key={detalle.id}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={detalle.photo} />
                <Card.Body>
                    <Card.Title>{detalle.brand}</Card.Title>
                    <Card.Text>{detalle.model}</Card.Text>
                    <Card.Text>${detalle.price}</Card.Text>

                </Card.Body>
            </Card>
        </div>
    )
}

export default Item
