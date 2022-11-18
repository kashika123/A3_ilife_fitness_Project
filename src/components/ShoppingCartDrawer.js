import "../styles/ShoppingCartDrawer.css";
import React, { useState, useEffect } from 'react'
import { SlButton, SlDrawer, SlInput } from '@shoelace-style/shoelace/dist/react';
import { getProductToCart } from "../services/car-shopping-api";
import { useNavigate } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";

import ProductCartCard from "./ProductCartCard";



const ShoppingCartDrawer = ({ setCartToStore, cartRedux, drawerRedux, setDrawerToStore, authenticatedRedux }) => {

    const navigate = useNavigate();

    const [cart, setCart] = useState([])
    const [update, setUpdate] = useState()
    const [spinner, setSpinner] = useState(false)

    const handleCart = () => {
        navigate('/cart')
    }

    useEffect(() => {
        setSpinner(true)
        if (authenticatedRedux) {
            getProductToCart().then(res => {
                if (res.data) {
                    setSpinner(false)

                }
                setCartToStore(res.data)
            })
        }

    }, [drawerRedux, update])

    useEffect(() => {
        //   setSpinner(true)
        setCart(cartRedux)
    }, [cartRedux])

    const [open, setOpen] = useState(false);

    return (
        <> {cartRedux && (

            <SlDrawer label="Cart" open={drawerRedux} onSlAfterHide={() => setDrawerToStore(false)}>

                <div className="drawer" >
                    <div className='shoppingCartWrapper'>
                        {spinner ?
                            <div className="col text-center mt-5">
                                <div className="spinner-grow" role="status">
                                </div>
                            </div> :
                            <div>
                                {cart.products && (cart.products.length > 0 ? cart.products.map(product => {
                                    return (<ProductCartCard product={product} update={setUpdate} updateValue={update} key={product.productId._id} />)
                                }) : <p>No products in the cart</p>)
                                }

                            </div>
                        }



                    </div>

                </div>

                {cart.products &&

                    (<div className='checkout' slot='footer'>
                        <div className='container-checkout'>
                            <div className='subtotal'>
                                <span>Subtotal</span>
                                <span>Rs {cart.totalPrice}.00</span>
                            </div>
                            <div className='shipping-price'>
                                <span>Shipping</span>
                                <span>FREE</span>
                            </div>
                            <div className='shipping'>
                                <span>MAURITIUS</span>

                            </div>

                            <div className='subtotal'>
                                <span>Total</span>
                                <span>Rs {cart.totalPrice}.00</span>
                            </div>
                        </div>


                        <hr />
                        <div className='btn'>

                            <div className='btn-checkout btn-checkout-cart' onClick={handleCart}>
                                View Cart
                            </div>
                        </div>

                    </div>
                    )

                }

            </SlDrawer>

        )}


        </>
    )
}

export default ShoppingCartDrawer
