import { connect } from 'react-redux'
import Going from '../components/Going.js'

function isGoing (list,event) {
    return (list.indexOf(event)!=-1)
}

const mapStateToProps = (state,ownprops) => {
    return{
        isGoing: isGoing(state.DEFAULT_USER.goings,state.EVENTS_ARRAY[ownprops.index]),
        numberGoing: state.DEFAULT_USER.goings.length()
    }
}

const GoingContainer = connect(
    mapStateToProps
)(Going)

export default GoingContainer