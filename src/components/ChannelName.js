import React from 'react'
import clas from 'classnames'

var channelBox = {
    'borderRadius': '50px',
    'border': 'solid 1px #D3C1E5',
    'font-size': '12px',
    'text-align': 'center',
    'padding-left':'7px',
    'padding-right': '7px',
    'padding-bottom': '2px',
    "padding-top":"2px"
}

export default class ChannelName extends React.Component {
    render(){
        return(
            <text className={clas(this.props.className,"channelBox")} style={channelBox}> {this.props.channelName} </text>
        )
    }
}

