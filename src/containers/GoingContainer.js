import { connect } from 'react-redux'
import Going from '../components/Going.js'
import { addGoing } from '../actions'

function isGoing (list,event) {
    return (list.indexOf(event)!=-1)
}

const mapStateToProps = (state,ownprops) => {
    return{
        isGoing: isGoing(state.USERS_ARRAY[state.DEFAULT_USER].goings,ownprops.index),
        numberGoing: state.USERS_ARRAY[state.DEFAULT_USER].goings.length
    }
}

const mapDispatchToProps = (dispatch,ownprops) => {
    return {
        onClick: () => {console.log("hi");dispatch(addGoing(ownprops.index))}
    }
}

const GoingContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Going)

export default GoingContainer