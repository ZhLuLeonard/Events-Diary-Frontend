import React from 'react'

var messageStyle = {
    "width":"80px",
    "height":"40px",
    "backgroundColor":"#8560A9",
    "position":"absolute",
    "left":"5px",
    "border":"none"
}

var loveStyle = {
    "width":"80px",
    "height":"40px",
    "backgroundColor":"#8560A9",
    "position":"absolute",
    "left":"80px",
    "border":"none"
}

var loginStyle = {
    "width":"155px",
    "height":"40px",
    "backgroundColor":"#D5EF7F",
    "position":"absolute",
    "left":"160px",
    "border":"none"
}

var logoMes = {
    "height":"15px"
}

var logoHeart = {
    "height": "15px"
}

var logoJoin = {
    "height": "15px"
}

class BigButton extends React.Component {
    
    render() {
    return(
    <div>
        <button style={messageStyle} onClick={this.props.onClick1}>
            <img src="/entry-task/SVGs/comment-single.svg" style={logoMes} />
        </button>
        <button style={loveStyle} onClick={this.props.isLiked ? this.props.onClickLiked : this.props.onClicknotLiked}>
            {this.props.isLiked ? (<svg style={logoHeart} fill="red" height="12px" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>like-outline</title><path id="Shape" d="M22,4a8,8,0,0,0-6,2.79A8,8,0,0,0,10,4a7.26,7.26,0,0,0-7.33,7.33c0,5,4.53,9.15,11.4,15.39L16,28.47l1.93-1.76c6.87-6.23,11.4-10.33,11.4-15.37A7.26,7.26,0,0,0,22,4h0Z"/></svg>) :
            (<img src="/entry-task/SVGs/like-outline.svg" style={logoHeart} />)
            }
        </button>
        <button style={loginStyle} onClick={this.props.isGoing ? this.props.onClickGoing : this.props.onClicknotGoing}>
            {this.props.isGoing? (<svg style={logoJoin} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path class="cls-1" d="M31.34,10.06L12.68,29.22a1,1,0,0,1-1.43,0L0.66,19.14a1,1,0,0,1,0-1.4L5,13.55a1,1,0,0,1,1.43,0L11.22,18,24.88,3.77a1,1,0,0,1,1.44,0l5,4.89A1,1,0,0,1,31.34,10.06Z"/></svg>) :
                (<img src="/entry-task/SVGs/check-outline.svg" style={logoJoin} />)
            }
        </button>
    </div>
    )
}
}

export default BigButton