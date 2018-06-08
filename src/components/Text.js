import React from 'react'
import clas from 'classnames'

var textStyle = {
    'width': '300px',
    'font-size': '15px',
    'padding': '10px',
    'color': '#67616D'
}

class Text extends React.Component {
    render(){
        return(
            <div className={clas(this.props.className, "eventText")} style={textStyle} > {this.props.text} </div>
        )
    }
}

export default Text;