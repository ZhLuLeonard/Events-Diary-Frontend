import React from 'react'
import Preview from './Preview.js';

class Preview_list extends React.Component{
    render(){
        var previews = []
        for(var i=0; i<this.props.eventlist.size; i++){
            previews.push(<Preview key={i} index={i}/>)
        }
    return (
    <div>
        {previews}
    </div>
    )
    }
}


export default Preview_list;
