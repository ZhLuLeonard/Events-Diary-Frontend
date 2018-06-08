import React from 'react'
import {Icon} from '../Icon'
import './DetailUser.css'

const changeUsernameToDirectory = (userName) => {
    return "/icons/"+userName+".png";
}

var detailUserStyle = {
    "position": "relative",
    "height": "50px",
}

var detailUserNameStyle = {
    "position": "absolute",
    "fontSize": "13px",
    "left": "60px",
    "top": "12px",
    "color":"#666666"
}

var detailPublishStyle = {
    "position": "absolute",
    "fontSize": "10px",
    "left": "60px",
    "top": "31px",
    "color": "#BABABA"
}

class DetailUser extends React.Component {
    render() {
        return (
            <div style={detailUserStyle}>
                <Icon className = "userIcon3" userIconSrc={changeUsernameToDirectory(this.props.userName)} />
                <div style={detailUserNameStyle} className = "detailUserName"> {this.props.userName} </div>
                <div style={detailPublishStyle} className = "detailePublish"> Published at {this.props.pubDate} </div>
            </div>
        )
    }
}

export default DetailUser