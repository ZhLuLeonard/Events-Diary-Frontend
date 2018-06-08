import { connect } from 'react-redux'
import Preview_header from '../components/Preview-header.js'

const mapStateToProps = (state,ownprops) => {
    return{
        userName: state.EVENTS_ARRAY[ownprops.index].User.userName
    }
}

const PreviewHeaderContainer = connect(
    mapStateToProps
)(Preview_header)

export default PreviewHeaderContainer