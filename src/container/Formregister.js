import { connect } from 'react-redux'
import Formregister from '../pages/Formregister'



const mapStateToProps = state => {
    return {
        formRegisterRedux: state.formRegister
    }
}


const CoachCardContainer = connect(mapStateToProps)(Formregister)

export default CoachCardContainer