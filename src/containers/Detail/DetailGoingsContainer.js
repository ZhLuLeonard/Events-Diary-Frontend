import { connect } from 'react-redux'
import DetailGoings from '../../components/Detail/DetailGoings'

const mapStateToProps = (state, ownprops) => {
    var goingsList = state.getIn(["EVENTS_ARRAY",ownprops.index, "goings"])
    //console.log(likesList)
    var newList = []
    for(var index=0; index<goingsList.size; ++index){
        newList.push(state.getIn(["USERS_ARRAY", goingsList.get(index), "userName"]))
    }
    console.log(newList)
    return {
        numGoing: goingsList.size,
        goingsList: newList
    }
}

const DetailGoingsContainer = (connect)(mapStateToProps)(DetailGoings)

export default DetailGoingsContainer