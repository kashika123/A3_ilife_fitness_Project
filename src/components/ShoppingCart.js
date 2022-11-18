import React, { useState, useEffect } from 'react'
import { getProductToCart } from '../services/car-shopping-api'
import ProductCartCard from './ProductCartCard'

const ShoppingCart = () => {

    useEffect(() => {
        getProductToCart().then(res => setCart(res.data))

    }, [])

    const [cart, setCart] = useState([])

    return (
        <div className='shoppingCartWrapper'>
            <div>
                {cart.products && cart.products.map(product => {
                    return (<ProductCartCard product={product} />)
                })
                }

            </div>


        </div>
    )
}

export default ShoppingCart