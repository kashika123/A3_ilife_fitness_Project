import { connect } from 'react-redux'
import Membership from '../pages/Membership'
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

const MembershipContainer = connect(mapStateToProps, mapDispatchToProps)(Membership)

export default MembershipContainer