import React from 'react'
import { connect } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { setDrawer, setModalCart } from '../store'

const mapStateToProps = state => {
    return {
        drawerRedux: state.drawer,
        authenticatedRedux: state.authenticated

    }
}

const mapDispatchToProps = dispatch => {
    return {
        setDrawerToStore: (value) => dispatch(setDrawer(value)),
        setModalToStore: (value) => dispatch(setModalCart(value)),

    }
}

const ProductCardContainer = connect(mapStateToProps, mapDispatchToProps)(ProductCard)

export default ProductCardContainer