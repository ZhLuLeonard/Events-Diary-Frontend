import React from 'react'
import clas from 'classnames'

var channelBox = {
    'borderRadius': '50px',
    'border': 'solid 1px #D3C1E5',
    'fontSize': '10px',
    'textAlign': 'center',
    'paddingLeft':'8px',
    'paddingRight': '8px',
    'paddingBottom': '2px',
    "paddingTop":"2px",
    "color": '#8560A9'
}

export default class ChannelName extends React.Component {
    render(){
        return(
            <div className={clas(this.props.className,"channelBox")} style={channelBox}> {this.props.channelName} </div>
        )
    }
}

