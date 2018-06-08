import React from 'react'

var style = {
    "padding": "15px",
    "font-size": "15px",
    "height": "100px",
    "top": "200px",
    "position":"absolute"
}

class DetailContent extends React.Component {
    render(){
        return(
            <p style={style}> {this.props.content} </p>
        )
    }
}

export default DetailContent