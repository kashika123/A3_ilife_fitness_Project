import { connect } from 'react-redux'
import PrivateRoute from '../components/PrivateRoute'
import { setAuthenticated } from '../store'


const mapStateToProps = state => {
    return {
        authenticatedRedux: state.authenticated
    }

}

const mapDispatchToProps = dispatch => {
    return {
        setAuthenticated: (value) => dispatch(setAuthenticated(value))
    }
}

const PrivateContainer = connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)

export default PrivateContainer