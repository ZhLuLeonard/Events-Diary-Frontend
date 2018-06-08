import React from 'react'
import Preview from './Preview.js';

class Preview_list extends React.Component{
    render(){
    return (
    <div>
        {this.props.eventlist.map((event,index) =>
            (<Preview index={index}/>))
        }
    </div>
    )
    }
}


export default Preview_list;
