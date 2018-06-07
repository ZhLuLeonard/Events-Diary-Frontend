import { connect } from 'react-redux'
import { Icon } from '../components/Icon'
import clas from 'classnames'

const changeUsernameToDirectory = (userName) => {
    return "/icons/"+userName+".png";
}

const mapStateToProps = (state,ownprops) => {
    return{
        userIconSrc: changeUsernameToDirectory(state.USER_NAME),
        className: clas(ownprops.className, state.USER_NAME+"Icon")
    }
}

const CustomerIcon = connect(
    mapStateToProps
)(Icon)

export default CustomerIcon