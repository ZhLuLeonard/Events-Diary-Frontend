import React from 'react' 
import clas from 'classnames'

var titlestyle = {
    'padding': '10px',
    'font-size': '20px',
    'width': '280px'
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