import React from 'react'
import {Icon} from '../../components/Icon'
import './DetailGoings.css'

const changeUsernameToDirectory = (userName) => {
    return "/icons/"+userName+".png";
}

var preLogoStyle = {
    "height": "15px",
    "position": "absolute",
    "top":"25px"
}

var words = {
    "fontSize":"16px",
    "position": "absolute",
    "left":"25px",
    "top":"23px"
}

var hrStyle = {
    "position":"relative",
    "width":"300px",
    "height":"1px",
    "border":"none",
    "background":"#DFDFDF",
    "bottom":"0px",
    "paddingBottom":"0px",
    "marginLeft": "11px"
}

var goingsLineStyle = {
    "position":"relative",
    "left":"14px",
    "height":"45px"
}


class DetailGoings extends React.Component {
    render(){
        var iconList = []
        //console.log(this.props.likesList)
        for(var userName of this.props.goingsList){
            //console.log(changeUsernameToDirectory(userName))
            iconList.push(<Icon key={this.props.goingsList.indexOf(userName)} className="goingsIcon" userIconSrc={changeUsernameToDirectory(userName)}/>)
        }
        //console.log(iconList)
        return (
            <div>
            <div style={goingsLineStyle}>
                <img style={preLogoStyle} src="/entry-task/SVGs/check-outline.svg" />
                <div style = {words}> {this.props.numGoing} going </div>
                <div> {iconList} </div>
            </div>
                <hr style={hrStyle} />
            </div>
        )
    }
}

export default DetailGoings
