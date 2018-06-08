import React from 'react'
import Preview_header from './Preview-header'
import DatelineContainer from '../containers/DatelineContainer'
import Text from './Text'
import PreviewResponses from './PreviewResponses'
import TitleContainer from '../containers/TitleContainer';
import TextContainer from '../containers/TextContainer';
import PreviewHeaderContainer from '../containers/Preview-header-container';

var previewStyle = {
    "height": "245px",
    "position": "relative",
}

var dividerStyle = {
    "width": "310px",
    "background-color": "#D3C1E5"
}

export default class Preview extends React.Component{
    render(){
        return (
        <div style={previewStyle}>    
            <PreviewHeaderContainer className = "leonardHeader" index={this.props.index}/>
            <TitleContainer className = "previewTitle" index={this.props.index}/>
            <DatelineContainer index={this.props.index}/>
            <TextContainer className="leonardEvent"  index={this.props.index}/>
            <PreviewResponses  className = "previewResponses" index={this.props.index}/>
            <hr style={dividerStyle}/>
        </div>)
    }
}