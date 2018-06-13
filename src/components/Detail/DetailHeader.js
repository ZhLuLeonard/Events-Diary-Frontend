import React from 'react'
import ChannelNameContainer from '../../containers/ChannelNameContainer'
import TitleContainer from '../../containers/TitleContainer'
import Icon from '../Icon'
import DetailUserContainer from '../../containers/Detail/DetailUserContainer'
import './DetailHeader.css'
import ButtonLine from './ButtonLine'

class DetailHeader extends React.Component {
    render(){
        return (
            <div className="detailHeader">
                <ChannelNameContainer className="detailChannel" index={this.props.index} />
                <TitleContainer className="detailTitle" index={this.props.index} />
                <div className="detailUser">
                    <DetailUserContainer className="detailUser" index={this.props.index}/>
                </div>
                <div className="detailDivider">
                    <hr style={{"background":"#DFDFDF", "height":"1px", "border": "none", "width":"320px","position":"relative", "marginLeft":"0px"}}/>
                </div>
                <ButtonLine className="buttonLine" />
            </div>
        )
    }
}

export default DetailHeader
