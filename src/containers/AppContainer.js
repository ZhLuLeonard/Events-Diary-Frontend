import {connect} from 'react-redux'
import App from '../App'

const mapStateToProps = (state) => {
    //console.log(state.DEFAULT_USER)
    return{
        events: state.EVENTS_ARRAY,
    }
}

const AppContainer = connect(
    mapStateToProps,
)(App)

export default AppContainer