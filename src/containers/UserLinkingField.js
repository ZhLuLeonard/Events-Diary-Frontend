import { connect } from 'react-redux'
import { userSetup } from '../actions.js'
import Usernames from '../header/Username.js';

const mapStateToProps = (state) => {
    return{
        className: "user-name",
        value: state["USER_NAME"]
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onChange: (text) => {
            dispatch(userSetup(text))
        }
    }
}

const CustomerUserName = connect(
    mapStateToProps,
    mapDispatchToProps
)(Usernames)

export default CustomerUserName