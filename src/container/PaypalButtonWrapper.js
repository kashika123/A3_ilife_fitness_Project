import { connect } from 'react-redux'
import PaypalButtonWrapper from '../components/PaypalButtonWrapper'
import { setModal, setCart } from '../store'


const mapStateToProps = state => {
    return {
        modalRedux: state.modal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setModalToStore: (value) => dispatch(setModal(value)),
        setCartToStore: (value) => dispatch(setCart(value)),

    }
}

const PaypalButtonWrappercontainer = connect(mapStateToProps, mapDispatchToProps)(PaypalButtonWrapper)

export default PaypalButtonWrappercontainer