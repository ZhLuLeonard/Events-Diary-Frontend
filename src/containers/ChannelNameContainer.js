import { connect } from 'react-redux'
import ChannelName from '../components/ChannelName'

const mapStateToProps = (state,ownprops) => {
    return{
        channelName: state.getIn(["EVENTS_ARRAY", ownprops.index,"Info","Channel_name"])
    }
}

const ChannelNameContainer = connect(
    mapStateToProps
)(ChannelName)

export default ChannelNameContainer