import { connect } from 'react-redux'
import { Icon } from '../components/Icon'

const changeUsernameToDirectory = (userName) => {
    link = "/icons/"+userName+".png";
    return link;
}

const mapStateToProps = state => {
    return{
        userIconSrc: changeUsernameToDirectory(state.DEFAULT_USER),
        className: state.DEFAULT_USER+"Icon"
    }
}

const CustomerIcon = connect(
    mapStateToProps
)(Icon)

export default CustomerIcon