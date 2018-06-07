import {connect} from 'react-redux'
import Events from '../Events'
import {userLogin} from '../actions.js'

const mapStateToProps = (state) => {
    return{
        text: state.USER_NAME
    }
}

const EventsContainer = connect(
    mapStateToProps,
)(Events)

export default EventsContainer