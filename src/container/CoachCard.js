import { connect } from 'react-redux'
import CoachCard from '../components/CoachCard'
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

const CoachCardContainer = connect(mapStateToProps, mapDispatchToProps)(CoachCard)

export default CoachCardContainer