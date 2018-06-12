import React from 'react'
import Headerbanner from '../Header-banner'
import DetailUserContainer from '../../containers/Detail/DetailUserContainer'
import ChannelNameContainer from '../../containers/ChannelNameContainer' 
import TitleContainer from '../../containers/TitleContainer'
import clas from 'classnames'
import DetailHeader from './DetailHeader'
import DetailContentContainer from '../../containers/Detail/DetailContentContainer';
import PictureListContainer from '../../containers/Detail/PictureListContainer';
import DetailWhenContainer from '../../containers/Detail/DetailWhenContainer';
import DetailWhereContainer from '../../containers/Detail/DetailWhereContainer'


var biggerStyle = {
    "position": "relative",
    "height": "400px",
}

export default class Detail extends React.Component{
    render(){
        console.log(this.props.index)
        return (
            <div className={clas(this.props.className)}>
                <Headerbanner />
                <DetailHeader index={this.props.index}/>
                <div className="contentBox" style={biggerStyle}>
                <PictureListContainer index={this.props.index} />
                <DetailContentContainer className="content" index={this.props.index} />
                <DetailWhenContainer className="detailWhen" index={this.props.index} />
                <DetailWhereContainer className="detailWhere" index={this.props.index} />
                </div>
            </div>
        )
    }
}