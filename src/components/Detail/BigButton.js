import React from 'react'

var messageStyle = {
    "width":"50px",
    "height":"35px",
    "backgroundColor":"#8560A9",
    "position":"absolute"
}

var loveStyle = {
    "width":"50px",
    "height":"35px",
    "backgroundColor":"#8560A9",
    "position":"relative"
}

var loginStyle = {
    "width":"200px",
    "height":"35px",
    "backgroundColor":"#D5EF7F",
    "position":"relative"
}

var logoMes = {
    "height":"10px"
}

var logoHeart = {
    "height": "10px"
}

var logoJoin = {
    "height": "10px"
}

class BigButton extends React.Component {
    render() {
    return(
    <div>
        <button style={messageStyle} >
            <img src="/entry-task/SVGs/comment-outline.svg" style={logoMes} />
        </button>
        <button style={loveStyle}>
            <img src="/entry-task/SVGs/like-outline.svg" style={logoHeart} />
        </button>
        <button style={loginStyle}>
            <img src="/entry-task/SVGs/check-outline.svg" style={logoJoin} />
        </button>
    </div>
    )
}
}

export default BigButton