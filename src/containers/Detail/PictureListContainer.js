import { connect } from 'react-redux'
import PictureList from '../../components/Detail/PictureList'

const mapStateToProps = (state, ownprops) => { return{
    imageList: state.EVENTS_ARRAY[ownprops.index].pictureList
}
}

const PictureListContainer = connect(
    mapStateToProps
)(PictureList)

export default PictureListContainer