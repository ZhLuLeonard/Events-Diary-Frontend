import React from 'react'
import {Icon} from '../../components/Icon'
import './DetailLikesLine.css'

const changeUsernameToDirectory = (userName) => {
    return "/icons/"+userName+".png";
}

var preLogoStyle = {
    "height": "15px",
    "position": "absolute",
    "top":"3px"
}

var words = {
    "fontSize":"16px",
    "position": "absolute",
    "left":"25px",
    "top":"2px"
}

var hrStyle = {
    "position":"relative",
    "width":"300px",
    "height":"1px",
    "border":"none",
    "background":"#DFDFDF",
    "marginLeft":"11px"
}

var likesLineStyle = {
    "position":"relative",
    "left":"14px",
    "top":"2px",
    "height":"25px"
}


class DetailLikesLine extends React.Component {
    render(){
        var iconList = []
        //console.log(this.props.likesList)
        for(var userName of this.props.likesList){
            //console.log(changeUsernameToDirectory(userName))
            iconList.push(<Icon key={this.props.likesList.indexOf(userName)} className="likesIcon" userIconSrc={changeUsernameToDirectory(userName)}/>)
        }
        //console.log(iconList)
        return (
            <div>
            <div style={likesLineStyle}>
                <img style={preLogoStyle} src="/entry-task/SVGs/like-outline.svg" />
                <div style = {words}> {this.props.numLikes} likes </div>
                <div> {iconList} </div>
            </div>
                <hr style={hrStyle} />
            </div>
        )
    }
}

export default DetailLikesLine