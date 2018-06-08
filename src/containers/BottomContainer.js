import {connect} from 'react-redux'
import Bottom from '../bottom'
import {userLogin} from '../actions'


const mapStateToProps = (state) => {
    //console.log(state.DEFAULT_USER)
    return{
        className: "App-bottom",
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onClick: () => {dispatch(userLogin())}
    }
}

const BottomContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Bottom)

export default BottomContainer