import {connect} from 'react-redux'
import Dateline from '../components/Dateline'

const mapStateToProps = (state,ownprops) => {
    return {
        time1: state.EVENTS_ARRAY[ownprops.index].Info.When[0],
        time2: state.EVENTS_ARRAY[ownprops.index].Info.When[1]
    }
}

const DatelineContainer = connect(
    mapStateToProps
)(Dateline)

export default DatelineContainer