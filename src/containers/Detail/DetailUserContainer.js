import { connect } from 'react-redux'
import DetailUser from '../../components/Detail/DetailUser'

const mapStateToProps = (state, ownprops) => {
    return{
        userName: state.getIn(["EVENTS_ARRAY", ownprops.index,"User","userName"]),
        pubDate: state.getIn(["EVENTS_ARRAY", ownprops.index,"Info","Pubtime"])
    }
}

const DetailUserContainer = connect(
    mapStateToProps
)(DetailUser)

export default DetailUserContainer