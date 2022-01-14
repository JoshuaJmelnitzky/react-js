import React from 'react'
import ItemCount from '../../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({product}) => {
    return (
        <div className='row productDetail'>

            <div className='col-md-4 productDetail--list'>
                <div >
                    <img className='photo' src={product.photo} alt={product.brand + ' ' + product.model} />
                </div>
            </div>

            <div className='col-md-4 productDetail--list'>
                <div className='product-Content'>
                    <h2 className = "product-title">{product.brand + ' ' + product.model}</h2>

                </div>

                <div className = "product-price">
                    <p className = "price">Precio: <span>${product.price}</span></p>
                </div>

                <div className = "product-detail">
                    <h2>Sobre este producto: </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
                 </div>

                 <div className = "purchase-info">
                    <ItemCount max={10}/>    
                </div>

            </div>

        </div>
    )
}

export default ItemDetail
