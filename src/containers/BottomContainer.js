import {connect} from 'react-redux'
import Bottom from '../bottom'
import {userLogin} from '../actions.js'

const mapStateToProps = (state) => {
    //console.log(state.DEFAULT_USER)
    return{
        className: "App-bottom",
    }
}

const mapDispatchToProps = dispach => {
    return{
        onClick: () => {
            dispach(userLogin())
        }
    }
}

const BottomContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Bottom)

export default BottomContainer