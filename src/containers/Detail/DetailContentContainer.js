import { connect } from 'react-redux'
import DetailContent from '../../components/Detail/DetailContent'

const mapStateToProps = (state,ownprops) => {
    return{
        content: state.getIn(["EVENTS_ARRAY", ownprops.index,"Content","Text"])
    }
}

const DetailContentContainer = connect(
    mapStateToProps
)(DetailContent)

export default DetailContentContainer