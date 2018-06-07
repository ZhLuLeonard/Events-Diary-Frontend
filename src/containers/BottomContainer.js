import {connect} from 'react-redux'
import Bottom from '../bottom'

const mapStateToProps = (state) => {
    //console.log(state.DEFAULT_USER)
    return{
        className: "App-bottom",
    }
}

const BottomContainer = connect(
    mapStateToProps,
)(Bottom)

export default BottomContainer