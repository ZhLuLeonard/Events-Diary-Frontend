import React from 'react';
import Headerbannder from './components/Header-banner'
import PreviewListContainer from './containers/PreviewListContainer';

export default class Events extends React.Component{
    render(){
      return(
        <div>
          <Headerbannder />
          <PreviewListContainer />
          <div>{this.props.children}</div>  
        </div>
      )
    }
  }