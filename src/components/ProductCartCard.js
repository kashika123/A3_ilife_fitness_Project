import React, { useState } from 'react'
import "../styles/ProductCartCard.css";
import { apiUrl } from '../services/apiurl'
import { SlButton } from "@shoelace-style/shoelace/dist/react";
import { addProductToCart } from '../services/car-shopping-api';
import { deleteProductToCart } from '../services/car-shopping-api';




const ProductCartCard = ({ product, update, updateValue }) => {


    const handleDelete = (event) => {
        deleteProductToCart({ "productId": event.target.id }).then(res => {
            if (res.status === 200) {
                update(!updateValue)
            }
        }).catch(err => console.log(err))
    }

    const handleAdd = (value) => {

        if (value + product.quantity < 1) {
            return
        }

        addProductToCart({
            products: [{
                productId: product.productId._id,
                quantity: product.quantity + value
            }]
        }).then(res => update(!updateValue)).catch(err => console.log(err))
    }



    return (
        <div className='wrapper' >
            <div className='container-wrapper'>
                <div className='container-product'>
                    <img src={apiUrl + product.productId.img} alt='/' className='imageClass' />
                    <div className='container-infos'>
                        <spans>{product.productId.name}</spans>
                        <p>{product.productId.promotionPrice && <span >Rs {product.productId.promotionPrice}.00</span>}<div style={{ "fontWeight": "bold" }} className={product.productId.promotionPrice && "text-rod"}>Rs {product.productId.normalPrice}.00 </div></p>
                    </div>
                    <span aria-hidden="true" className='delete-btn' id={product.productId._id} onClick={handleDelete} >&times;</span>
                </div>
                <div className='container-price'>
                    <div className='quantity'>
                        <SlButton variant='text' size='small' onClick={() => handleAdd(-1)}>
                            -
                        </SlButton>
                        <span className='i'>{product.quantity}</span>
                        <SlButton variant='text' size='small' onClick={() => handleAdd(+1)}>
                            +
                        </SlButton>
                    </div>

                </div>
                <div className='subtotal-cart'>
                    <p>SUBTOTAL</p>
                    <p>Rs {product.quantity * (product.productId.promotionPrice ? product.productId.promotionPrice : product.productId.normalPrice)}.00</p>
                </div>

            </div>

            <hr style={{ 'color': 'red' }} />
        </div>
    )
}

export default ProductCartCard