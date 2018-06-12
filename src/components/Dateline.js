import React from 'react'

var styleLogo= {
    'height': '12px',
    "paddingRight": "5px",
    "marginTop": "1px",
    "position": "absolute"
}
var styleDateline = {
    'height': '15px',
    "marginTop": "10px",
    "paddingLeft": "10px"
}
var styleText = {
    "fontSize": "12px",
    'color': '#8560A9',
    "marginBottom": "0px",
    "position": "absolute",
    "paddingLeft": "20px"
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