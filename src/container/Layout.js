import { connect } from 'react-redux'
import Layout from '../pages/Layout'
import { setCart, setDrawer, setAuthenticated } from '../store'


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
        setAuthenticated: (value) => dispatch(setAuthenticated(value))

    }
}

const LayoutContainer = connect(mapStateToProps, mapDispatchToProps)(Layout)

export default LayoutContainer