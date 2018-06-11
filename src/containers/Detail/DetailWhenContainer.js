import { connect } from "react-redux"
import DetailWhen from "../../components/Detail/DetailWhen";

const mapStateToProps = (state, ownprops) => {
    return {
    startDate: state.EVENTS_ARRAY[ownprops.index].Info.When[0],
    endDate: state.EVENTS_ARRAY[ownprops.index].Info.When[1],
    startTime: "8:00 pm"
    }
}

const DetailWhenContainer = connect(mapStateToProps)(DetailWhen)

export default DetailWhenContainer