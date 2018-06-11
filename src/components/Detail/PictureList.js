import React from 'react'

var style = {
    "height": "100px",
    "width": "150px",
    "borderRadius": "10%",
    "display": "inline-block",
    "marginRight":"10px",
}

var scrollMenu = {
    "overflow": "auto",
    "whiteSpace": "nowrap",
    "marginLeft": "15px",
    "marginTop": "10px",
    "width":"300px"
}

class PictureList extends React.Component {
    render(){
        if(this.props.imageList===[]){
            return (
                <div />
            )
        }
        else {
            return (
                <div className="imageList" style={scrollMenu}>
                    {this.props.imageList.map((image, index) => (<img style={style} key={index} src={image} />))}
                 </div>
             )
        }
    }
}

export default PictureList