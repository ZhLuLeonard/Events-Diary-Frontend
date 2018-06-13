import React from 'react'

var textStyle = {
    "fontSize": "12px",
    "color": "#453257",
    "position": "absolute",
    "paddingLeft": "17px",
}

var goingStyle = {
    "paddingLeft": "10px",
}

var logoStyle = {
    "position": "absolute",
    "height": "12px",
    "fill": "#AECB4F",
    "paddingTop":"1px"
}

class Going extends React.Component {
    render(){
        if(this.props.isGoing){
        return(
        <div onClick = {(e) => this.props.onClick2()} style={goingStyle} >
            <svg style={logoStyle} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path class="cls-1" d="M31.34,10.06L12.68,29.22a1,1,0,0,1-1.43,0L0.66,19.14a1,1,0,0,1,0-1.4L5,13.55a1,1,0,0,1,1.43,0L11.22,18,24.88,3.77a1,1,0,0,1,1.44,0l5,4.89A1,1,0,0,1,31.34,10.06Z"/></svg>
            <div style = {textStyle}> I am going! </div>
        </div>
    )
}
else{
    return(
        <div style={goingStyle} onClick={(e) => this.props.onClick1()}>
            <svg style={logoStyle} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path class="cls-1" d="M31.34,10.06L12.68,29.22a1,1,0,0,1-1.43,0L0.66,19.14a1,1,0,0,1,0-1.4L5,13.55a1,1,0,0,1,1.43,0L11.22,18,24.88,3.77a1,1,0,0,1,1.44,0l5,4.89A1,1,0,0,1,31.34,10.06ZM25.63,5.89L12,20.14a1,1,0,0,1-1.43,0L5.68,15.64,2.81,18.44l9.14,8.66L29.21,9.38Z"/></svg>
            <div style = {textStyle}> {this.props.numberGoing} Going </div>
        </div>
    )
}
    }
}

export default Going