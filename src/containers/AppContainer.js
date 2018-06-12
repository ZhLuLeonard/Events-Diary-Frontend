import {connect} from 'react-redux'
import App from '../App'

const mapStateToProps = (state) => {
    return{
        events: state.get("EVENTS_ARRAY"),
    }
}

const AppContainer = connect(
    mapStateToProps,
)(App)

export default AppContainer