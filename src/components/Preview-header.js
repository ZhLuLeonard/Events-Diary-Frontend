import React from 'react'
import CustomerIcon from '../containers/CustomerIcon.js'
import ChannelName from './ChannelName.js'
import './Preview-header.css'

export default class Preview_header extends React.Component {
    render(){
        return(
        <div className="preview-header1">
            <CustomerIcon className = "userIcon2"/>
            <p className = "previewUsername"> {this.props.userName} </p>
            <ChannelName className = "channelName" channelName="This is a very long channel name"/>
        </div>
        )
    }
}

