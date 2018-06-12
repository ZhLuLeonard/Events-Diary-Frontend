import { connect } from 'react-redux'
import DetailLikesLine from '../../components/Detail/DetailLikesLine'

const mapStateToProps = (state, ownprops) => {
    var likesList = state.getIn(["EVENTS_ARRAY",ownprops.index, "likes"])
    //console.log(likesList)
    var newList = []
    for(var index=0; index<likesList.size; ++index){
        newList.push(state.getIn(["USERS_ARRAY", likesList.get(index), "userName"]))
    }
    //console.log(newList)
    return {
        numLikes: likesList.size,
        likesList: newList
    }
}

const DetailLikesContainer = (connect)(mapStateToProps)(DetailLikesLine)

export default DetailLikesContainer