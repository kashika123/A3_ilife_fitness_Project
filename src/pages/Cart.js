import React, { useEffect, useState } from 'react'
import '../styles/Cart.css'
import { apiUrl } from '../services/apiurl'
import { SlButton } from '@shoelace-style/shoelace/dist/react'
import { deleteProductToCart } from '../services/car-shopping-api'
import { getProductToCart } from '../services/car-shopping-api'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import PaypalButtonWrapper from '../container/PaypalButtonWrapper'
import Modal from '../components/Modal'




const Cart = ({ cartRedux, authenticatedRedux, setCartToStore, modalRedux, setModalToStore }) => {

    const [update, setUpdate] = useState(false)

    const initialOptions = {
        "client-id": "AV9eMYunAxrOtuX5Ky_14msXauYgpjAUAn4GiJNWpVhcyEM6HIE1UFgIeUYa3-W7AdAGzj0sRKf-kJYY",
        currency: "USD",
        intent: "capture"
    };

    useEffect(() => {
        if (localStorage.getItem("userLogged") === "true") {
            getProductToCart().then(res => {
                setCartToStore(res.data)
            })
        }
    }, [update])



    const handleDelete = (event) => {
        deleteProductToCart({ "productId": event.target.id }).then(res => {
            if (res.status === 200) {
                setUpdate(!update)
            }
        }).catch(err => console.log(err))
    }

    const closeModal = (value) => {
        setModalToStore(value)
    }



    return (
        <div className='container' >
            <div className='row justify-content-center'>
                {modalRedux && <Modal close={closeModal} />}
                <div className='col col-md-8 col-lg-9 mt-5'>
                    <div className='productsInCart'>
                        <h1>My Cart</h1>
                        <hr />
                        <div className='product-item'>

                            {cartRedux &&
                                cartRedux.products.length > 0 ?

                                cartRedux.products.map(product => {
                                    return (
                                        <>
                                            <div className='container-product' key={product.productId._id}>

                                                <div className='row align-items-center justify-content-center'>
                                                    <div className='col-12 col-lg-9 '>
                                                        <div className='container-product-infos'>
                                                            <img src={apiUrl + product.productId.img} alt='/' className='image-cart' />
                                                            <div className='cart-product-info'>
                                                                <p>{product.productId.name}</p>
                                                                <p>{product.productId.promotionPrice && <span >Rs {product.productId.promotionPrice}.00  </span>}<span style={{ "fontWeight": "bold" }} className={product.productId.promotionPrice && "text-rod"}>Rs {product.productId.normalPrice}.00 </span></p>
                                                                <p>Quantity : {product.quantity}</p>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className='col-12 col-lg-3 text-center'>
                                                        <div className='row justify-content-center align-items-center'>
                                                            <div className='col-6 col-lg-10 '>
                                                                <p style={{ "fontSize": "1.2rem" }} className='m-0'>Rs {product.quantity * (product.productId.promotionPrice ? product.productId.promotionPrice : product.productId.normalPrice)}.00
                                                                </p>
                                                            </div>
                                                            <div className='col-6 col-lg-2 text-center'>

                                                                <div aria-hidden="true" className='delete-btn col text-center' id={product.productId._id} onClick={handleDelete}>&times;</div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </div>

                                            </div>
                                        </>
                                    )
                                })
                                : (<p>No Products in the cart</p>)
                            }
                        </div>
                    </div>
                </div>


                <div className='col-8 col-sm-7 col-md-4 col-lg-3 text-center mt-5'>
                    <div className='checkoutCarts' >
                        <h1>Order Summary</h1>
                        <hr />
                        <div className='checkout' slot='footer'>
                            <div className='container-checkout'>
                                <div className='subtotal'>
                                    <span>Subtotal</span>
                                    <span>Rs {cartRedux.totalPrice}.00</span>
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
                                    <span>Rs {cartRedux.totalPrice}.00</span>
                                </div>
                            </div>


                            <hr />
                            {cartRedux && cartRedux.products.length > 0 &&
                                <PayPalScriptProvider options={initialOptions}>
                                    <PaypalButtonWrapper
                                        currency={"USD"}
                                        showSpinner={false}
                                        amount={cartRedux.totalPriceUSD}
                                    />
                                </PayPalScriptProvider>
                            }



                        </div>
                    </div>
                </div>


            </div>

        </div >
    )
}

export default Cart