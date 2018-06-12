import { connect } from "react-redux"
import DetailWhere from "../../components/Detail/DetailWhere";

const mapStateToProps = (state, ownprops) => {
    return {
        addressName: state.getIn(["EVENTS_ARRAY", ownprops.index,"Info","Where"]).split(", ",2)[0],
        address: state.getIn(["EVENTS_ARRAY", ownprops.index,"Info","Where"]).split(", ",2)[1],
    }
}

const DetailWhereContainer = connect(mapStateToProps)(DetailWhere)

export default DetailWhereContainer