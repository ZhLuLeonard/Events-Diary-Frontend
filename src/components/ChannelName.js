import React from 'react'
import clas from 'classnames'

var channelBox = {
    'border-radius': '50px',
    'border': 'solid 1px #8560A9',
    'font-size': '10px',
    'text-align': 'center',
    'padding-left':'5px',
    'padding-right': '5px',
    'padding-bottom': '2px'
}

export default class ChannelName extends React.Component {
    render(){
        return(
            <text className={clas(this.props.className,"channelBox")} style={channelBox}> {this.props.channelName} </text>
        )
    }
}

