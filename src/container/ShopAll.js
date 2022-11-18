import React from 'react'
import { connect } from 'react-redux'
import ShopAll from '../pages/ShopAll'
import { setDrawer } from '../store'


const mapStateToProps = state => {
    return {
        drawerRedux: state.drawer,
        modalCartRedux: state.modalCart
    }
}


const mapDispatchToProps = dispatch => {
    return {
        setDrawerToStore: (value) => dispatch(setDrawer(value)),
    }
}

const ShopAllContainer = connect(mapStateToProps, mapDispatchToProps)(ShopAll)

export default ShopAllContainer