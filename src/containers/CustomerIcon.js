import { connect } from 'react-redux'
import { Icon } from '../components/Icon'
import clas from 'classnames'
import { Map } from 'immutable'
const { fromJS } = require('immutable')

const changeUsernameToDirectory = (userName) => {
    return "/icons/"+userName+".png";
}

const mapStateToProps = (state,ownprops) => {
    //console.log(state)
    return{
        userIconSrc: changeUsernameToDirectory(state.get("USER_NAME")),
        className: clas(ownprops.className, state.get("USER_NAME")+"Icon")
    }
}

const CustomerIcon = connect(
    mapStateToProps
)(Icon)

export default CustomerIcon