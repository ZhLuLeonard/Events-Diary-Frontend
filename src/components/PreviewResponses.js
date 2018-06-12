import React from 'react'
import GoingContainer from '../containers/GoingContainer'
import Like from './Like'
import LikeContainer from '../containers/LikesContainer';

var responseLineStyle = {
    "paddingTop": "20px",
    "paddingBottom": "20px",
}

class PreviewResponses extends React.Component {
    render(){
        return(
            <div style={responseLineStyle}>
                <GoingContainer index={this.props.index} />
                <LikeContainer index={this.props.index} />
            </div>
        )
    }
}

export default PreviewResponses
