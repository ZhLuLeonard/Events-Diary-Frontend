import React from 'react' 
import clas from 'classnames'

var titlestyle = {
    "padding-top": "12px",
    'padding-left': '10px',
    'font-size': '18px',
    'width': '280px',
    "color": "#453257"
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