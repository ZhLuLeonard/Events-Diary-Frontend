import React from 'react'
import './DetailWhen.css'

var styleTitle = {
    "textAlign": "left",
    "position": "relative"
}

var styleBox1 = {
    "position": "absolute",
    "width": "100px",
    "top": "15px",
    "left": "30px"
}

var styleBox2 = {
    "position": "absolute",
    "width": "100px",
    "top": "15px",
    "left": "180px"
}

var styleBigBox = {
    "position": "relative",
    "top":"2px",
    "height":"95px"
}

class DetailWhen extends React.Component {
    render(){
        return(
            <div>
                <hr className="marker1"/>
                <div style = {styleTitle}>
                    <hr className="marker2"/>
                    <div className="when" > When </div>
                </div>
                <div className="bigBox" style = {styleBigBox}>
                    <div className="box1" style={styleBox1}>
                        <img src="/entry-task/SVGs/date-from.svg" className="image1" />
                        <div className="startDate"> {this.props.startDate} </div>
                    </div>
                    <div className="startTime"> {this.props.startTime.split(" ")[0]} </div>
                    <div className="apm"> {this.props.startTime.split(" ")[1]} </div>
                    <hr className="marker3" />
                    <div className="box2" style={styleBox2}>
                        <img src="/entry-task/SVGs/date-to.svg" className="image2" />
                        <div className="endDate"> {this.props.endDate} </div>
                    </div>
                </div>
                <hr className="marker4" />
            </div>
        )
    }
}

export default DetailWhen