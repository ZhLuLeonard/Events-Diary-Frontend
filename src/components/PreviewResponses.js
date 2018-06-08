import React from 'react'
import Going from './Going.js'
import Like from './Like'

var responseLineStyle = {
    "padding-top": "5px",
    "padding-bottom": "20px"
}

class PreviewResponses extends React.Component {
    render(){
        return(
            <div style={responseLineStyle}>
                <Going goingText="I am going" />
                <Like likeText="I like it" />
            </div>
        )
    }
}

export default PreviewResponses
