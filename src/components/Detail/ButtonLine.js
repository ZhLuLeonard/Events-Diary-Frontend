import React from 'react'
import './ButtonLine.css'

class ButtonLine extends React.Component {
    render(){
        return (
            <div className="buttonLine">
<img className="timeImage" src="/entry-task/SVGs/info.svg" height="16px" />
                    <div className="details"> Details </div>
                <hr className="divider1"/>
                    <img className="peopleImage"  src="/entry-task/SVGs/people-outline.svg" height="18px" />
                    <div className="participants"> Participants </div>
                <hr className="divider2"/>
                    <img className="messageImage" src="/entry-task/SVGs/comment-outline.svg" height="17px" />
                    <div className="comments"> Comments </div>
                <hr className="divider3"/>
            </div>
        )
    }
}

export default ButtonLine