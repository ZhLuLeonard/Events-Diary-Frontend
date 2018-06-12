import {connect} from 'react-redux'
import Title from '../components/Title'

const mapStateToProps = (state,ownprops) => {
    return {
        title: state.getIn(["EVENTS_ARRAY", ownprops.index,"Content","Title"])
    }
}

const TitleContainer = connect(
    mapStateToProps
)(Title)

export default TitleContainer