import React from 'react'
import Headerbanner from '../Header-banner'
import DetailUserContainer from '../../containers/Detail/DetailUserContainer'
import ChannelNameContainer from '../../containers/ChannelNameContainer' 
import TitleContainer from '../../containers/TitleContainer'
import clas from 'classnames'
import DetailHeader from './DetailHeader'
import DetailContentContainer from '../../containers/Detail/DetailContentContainer';

export default class Detail extends React.Component{
    render(){
        return (
            <div className={clas(this.props.className)}>
                <Headerbanner />
                <div>
                <DetailHeader index={this.props.index}/>
                <DetailContentContainer className="content" index={this.props.index} />
                </div>
            </div>
        )
    }
}