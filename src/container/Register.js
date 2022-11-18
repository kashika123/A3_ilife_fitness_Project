import { connect } from 'react-redux'
import Register from '../pages/Register'
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

const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register)

export default RegisterContainer