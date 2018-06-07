import React from 'react'

var styleLogo= {
    'height': '10px',
    "padding-right": "5px"
}
var styleDateline = {
    "padding-top": "0px",
    "padding-left": "10px"
}
var styleText = {
    "font-size": "10px"
}

export default class Dateline extends React.Component {
    render(){
        return (
            <div style={styleDateline}>
                <img src="/entry-task/SVGs/time.svg" style={styleLogo}/>
                <text style={styleText}>{this.props.time1}  -  {this.props.time2}</text>
            </div>
        )
    }
}