import { connect } from 'react-redux'
import PictureList from '../../components/Detail/PictureList'


const mapStateToProps = (state, ownprops) => { 
    //console.log(ownprops.index)
    //console.log(state.getIn("EVENTS_ARRAY"))
    //console.log(state.getIn(["EVENTS_ARRAY", ownprops.index]))
    //console.log(state.getIn(["EVENTS_ARRAY", ownprops.index,"pictureList"]))
    return{
    imageList: state.getIn(["EVENTS_ARRAY", ownprops.index,"pictureList"])
}
}

const PictureListContainer = connect(
    mapStateToProps
)(PictureList)

export default PictureListContainer