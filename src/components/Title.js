import React from 'react' 
import clas from 'classnames'

var titlestyle = {
    "paddingTop": "12px",
    'paddingLeft': '10px',
    'fontSize': '18px',
    'width': '280px',
    "color": "#453257",
    "fontWeight":"bold"
}

class Title extends React.Component{
    render(){
        return(
            <div className={clas(this.props.className)} style={titlestyle}>
               {this.props.title}
            </div>
        )
    }
}

export default Title;