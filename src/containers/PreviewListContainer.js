import { connect } from 'react-redux'
import Preview_list from '../components/Preview-list.js'

const mapStateToProps = (state) => {
    return{
        eventlist: state.EVENTS_ARRAY
    }
}

const PreviewListContainer = connect(
    mapStateToProps
)(Preview_list)

export default PreviewListContainer