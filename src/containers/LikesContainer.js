import { connect } from 'react-redux'
import Like from '../components/Like'
import { addLike, removeLike } from '../actions'

const mapStateToProps = (state, ownprops) => {
    var goingsList = state.getIn(["USERS_ARRAY",state.get("DEFAULT_USER"),"likes"]);
    return {
        isLiked: goingsList.indexOf(ownprops.index)>=0,
        numLikes: state.getIn(["EVENTS_ARRAY",ownprops.index,"likes"]).size
    }
}

const mapDispatchToProps = (dispatch,ownprops) => {
    return {
        onClick1: () => {dispatch(addLike(ownprops.index))},
        onClick2: () => {dispatch(removeLike(ownprops.index))}
    }
}

const LikeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Like)

export default LikeContainer

