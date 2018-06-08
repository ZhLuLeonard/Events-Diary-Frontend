import React from 'react'
import clas from 'classnames'

var channelBox = {
    'borderRadius': '50px',
    'border': 'solid 1px #D3C1E5',
    'font-size': '10px',
    'text-align': 'center',
    'padding-left':'8px',
    'padding-right': '8px',
    'padding-bottom': '2px',
    "padding-top":"2px",
    "color": '#8560A9'
}

export default class ChannelName extends React.Component {
    render(){
        return(
            <text className={clas(this.props.className,"channelBox")} style={channelBox}> {this.props.channelName} </text>
        )
    }
}

