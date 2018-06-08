import React from 'react'
import {Icon} from '../components/Icon.js'
import ChannelNameContainer from '../containers/ChannelNameContainer'
import './Preview-header.css'

const changeUsernameToDirectory = (userName) => {
    return "/icons/"+userName+".png";
}

export default class Preview_header extends React.Component {
    render(){
        return(
        <div className="preview-header1">
            <Icon className = "userIcon2" userIconSrc={changeUsernameToDirectory(this.props.userName)}/>
            <p className = "previewUsername"> {this.props.userName} </p>
            <ChannelNameContainer className = "channelName" index={this.props.index}/>
        </div>
        )
    }
}

