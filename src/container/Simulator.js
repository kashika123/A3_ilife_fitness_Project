import { connect } from 'react-redux'
import Simulator from '../forms/Simulator'
import { setBodySimulator } from '../store'


const mapStateToProps = state => {
    return {
        bodySimulatorRedux: state.bodySimulator
    }

}

const mapDispatchToProps = dispatch => {
    return {
        setBodySimulator: (value) => dispatch(setBodySimulator(value))
    }
}

const CoachContainer = connect(mapStateToProps, mapDispatchToProps)(Simulator)

export default CoachContainer