import React, { useState } from 'react'
import { Drawer } from '@material-ui/core'
import { Box } from '@material-ui/core'
import ShoppingCart from './ShoppingCart'


const ShoppingCartDrawerUI = () => {


    const [anchor, setAnchor] = useState(false)

    const toggleDrawer = (event) => {
        if (event.type === "keydown") {
            setAnchor(true)
        }
    }

    return (
        <div className='drawer'>
            <Drawer
                anchor='right'
                open="true"
                onClose={toggleDrawer(anchor)}
            >
                <div style={{ "width": "300px", "height": "100vh", "backgroundColor": "#201f1d", pointerEvents: 'none' }} >
                    <ShoppingCart />
                </div>


            </Drawer >

        </div >
    )
}

export default ShoppingCartDrawerUI