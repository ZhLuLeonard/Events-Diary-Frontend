import { connect } from 'react-redux'
import BigButton from '../../components/Detail/BigButton'
import { addGoing, addLike,removeGoing,removeLike } from '../../actions';

const mapStateToProps = (state, ownprops) => {
    var likesList = state.getIn(["USERS_ARRAY",state.get("DEFAULT_USER"),"likes"]);
    var goingsList = state.getIn(["USERS_ARRAY",state.get("DEFAULT_USER"),"goings"]);
    return{
        isLiked: likesList.indexOf(ownprops.index)>=0,
        isGoing: goingsList.indexOf(ownprops.index)>=0,
    }
}

const mapDispatchToProps = (dispatch, ownprops) => {
    return {
        onClicknotLiked: () => dispatch(addLike(ownprops.index)),
        onClickLiked: () => dispatch(removeLike(ownprops.index)),
        onClickGoing: () => dispatch(removeGoing(ownprops.index)),
        onClicknotGoing: () => dispatch(addGoing(ownprops.index))
    }
}

const BigButtonContainer = (connect)(mapStateToProps, mapDispatchToProps)(BigButton)

export default BigButtonContainer