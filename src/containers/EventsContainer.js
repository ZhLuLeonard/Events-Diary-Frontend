import {connect} from 'react-redux'
import Events from '../Events'

const mapStateToProps = (state) => {
    return{
        text: state.DEFAULT_USER
    }
}

const EventsContainer = connect(
    mapStateToProps
)(Events)

export default EventsContainer