import { connect } from 'react-redux'
import Cart from '../pages/Cart'
import { setCart, setDrawer, setModal } from '../store'


const mapStateToProps = state => {
    return {
        cartRedux: state.cart,
        drawerRedux: state.drawer,
        authenticatedRedux: state.authenticated,
        modalRedux: state.modal

    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCartToStore: (value) => dispatch(setCart(value)),
        setDrawerToStore: (value) => dispatch(setDrawer(value)),
        setModalToStore: (value) => dispatch(setModal(value))

    }
}

const Cartcontainer = connect(mapStateToProps, mapDispatchToProps)(Cart)

export default Cartcontainer