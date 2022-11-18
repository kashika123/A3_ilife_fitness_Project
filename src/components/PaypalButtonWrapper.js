import React, { useEffect, useState } from 'react'
import { deleteCart } from '../services/car-shopping-api';
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { createOrder, modifyOrder } from '../services/checkoutApi';

const currency = "USD";
const style = { "layout": "vertical" };


const PaypalButtonWrapper = ({ currency, showSpinner, amount, setModalToStore, setCartToStore }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    return (
        <>
            {(showSpinner) && <div className="spinner" />}
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data, actions) => {
                    return actions.order
                        .create({
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency,
                                        value: amount.$numberDecimal,
                                    },
                                },
                            ],
                        })
                        .then((orderId) => {
                            // Your code here after create the order

                            createOrder({ paypalId: orderId }).then(res => {
                                if (res.status === 201) {
                                }
                            })


                            return orderId;
                        });
                }}
                onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                        // Your code here after capture the order
                        modifyOrder({ paypalId: data.orderID }).then(res => console.log(res))
                        deleteCart().then(res => {
                            if (res.status === 201) {
                                setCartToStore("")
                            }
                        })
                        setModalToStore(true)

                    });
                }}
            />
        </>
    )
}

export default PaypalButtonWrapper