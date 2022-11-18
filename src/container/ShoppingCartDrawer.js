import { connect } from 'react-redux'
import ShoppingCartDrawer from '../components/ShoppingCartDrawer'
import { setCart, setDrawer } from '../store'


const mapStateToProps = state => {
    return {
        cartRedux: state.cart,
        drawerRedux: state.drawer,
        authenticatedRedux: state.authenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCartToStore: (value) => dispatch(setCart(value)),
        setDrawerToStore: (value) => dispatch(setDrawer(value)),

    }
}

const ShoppingCartDrawerContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingCartDrawer)

export default ShoppingCartDrawerContainer