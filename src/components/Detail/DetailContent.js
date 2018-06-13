import React from 'react'

var style = {
    "paddingLeft": "15px", 
    "paddingTop":"0px",
    "fontSize": "15px",
    "position":"relative",
    "width": "290px"
}

class DetailContent extends React.Component {
    render(){
        return(
            <p style={style}> {this.props.content} </p>
        )
    }
}

export default DetailContent