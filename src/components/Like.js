import React from 'react'

var textStyle = {
    "font-size": "12px",
    "position": "absolute",
    "left": "130px",
    "color": "#453257"
}

var logoStyle = {
    "position": "absolute",
    "left": "110px",
    "padding-top": "1px"
}

class Like extends React.Component {
    render(){
        return(
            <div>
                <svg style={logoStyle}fill="red" height="12px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>like-outline</title><path id="Shape" d="M22,4a8,8,0,0,0-6,2.79A8,8,0,0,0,10,4a7.26,7.26,0,0,0-7.33,7.33c0,5,4.53,9.15,11.4,15.39L16,28.47l1.93-1.76c6.87-6.23,11.4-10.33,11.4-15.37A7.26,7.26,0,0,0,22,4h0Z"/></svg>
                <div color="#453257" style={textStyle}> {this.props.likeText} </div>
            </div>
        )
    }
}

export default Like