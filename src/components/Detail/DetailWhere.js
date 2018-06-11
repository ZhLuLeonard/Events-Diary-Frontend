import React from 'react'
import './DetailWhere.css'

class DetailWhere extends React.Component {
    render(){
        return (
            <div>
                <div >
                <hr className="markerWhere"/>
                <div className="where" > Where </div>
                </div>
                <div className = "addressName" > {this.props.addressName} </div>
                <div className = "address" > {this.props.address} </div>
                <img className = "gMap" src="/entry-task/Imgs/gmap.png" />
                <hr className="markerEndWhere"/>
            </div>
        )
    }
}

export default DetailWhere