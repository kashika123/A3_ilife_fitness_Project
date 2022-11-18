import { connect } from 'react-redux'
import Login from '../pages/Login'
import { setAuthenticated, setFormRegister } from '../store'


const mapStateToProps = state => {
    return {
        authenticatedRedux: state.authenticated
    }

}

const mapDispatchToProps = dispatch => {
    return {
        setAuthenticated: (value) => dispatch(setAuthenticated(value)),
        setFormRegister: (value) => dispatch(setFormRegister(value))
    }
}

const LayoutContainer = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LayoutContainer