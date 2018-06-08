import React from 'react'

var styleLogo= {
    'height': '12px',
    "padding-right": "5px",
    "margin-top": "1px",
    "position": "absolute"
}
var styleDateline = {
    'height': '15px',
    "margin-top": "10px",
    "padding-left": "10px"
}
var styleText = {
    "font-size": "12px",
    'color': '#8560A9',
    "margin-bottom": "0px",
    "position": "absolute",
    "padding-left": "20px"
}

export default class Dateline extends React.Component {
    render(){
        return (
            <div style={styleDateline}>
                <img src="/entry-task/SVGs/time.svg" style={styleLogo} fill="#8560A9"/>
                <div style={styleText}> {this.props.time1}  -  {this.props.time2}</div>
            </div>
        )
    }
}