import { connect } from 'react-redux'
import Going from '../components/Going.js'
import { addGoing, removeGoing } from '../actions'

function isGoing (list,event) {
    return (list.indexOf(event)!=-1)
}

const mapStateToProps = (state,ownprops) => {
    //console.log(state.get("EVENTS_ARRAY"))
    //console.log(ownprops.index)
    //console.log(state.getIn(["EVENTS_ARRAY", ownprops.index]))
    var goingsList = state.getIn(["USERS_ARRAY",state.get("DEFAULT_USER"),"goings"]);
    //console.log(goingsList.indexOf(ownprops.index))
    return{
        isGoing: goingsList.indexOf(ownprops.index)>=0,
        numberGoing: state.getIn(["EVENTS_ARRAY",ownprops.index,"goings"]).size
    }
}

const mapDispatchToProps = (dispatch,ownprops) => {
    return {
        onClick1: () => {dispatch(addGoing(ownprops.index))},
        onClick2: () => {dispatch(removeGoing(ownprops.index))}
    }
}

const GoingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Going)

export default GoingContainer