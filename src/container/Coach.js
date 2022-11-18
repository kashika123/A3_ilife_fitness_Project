import { connect } from 'react-redux'
import Coach from '../pages/Coach'
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

const CoachContainer = connect(mapStateToProps, mapDispatchToProps)(Coach)

export default CoachContainer