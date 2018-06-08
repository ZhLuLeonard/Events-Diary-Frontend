import { connect } from 'react-redux'
import Text from '../components/Text'
const mapStateToProps = (state,ownprops) => {
    return{
        text: state.EVENTS_ARRAY[ownprops.index].Content.Text
    }
}

const TextContainer = connect(
    mapStateToProps
)(Text)

export default TextContainer