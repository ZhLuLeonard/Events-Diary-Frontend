import React from 'react';
import Headerbannder from './components/Header-banner'
import Preview_list from './components/Preview-list'

export default class Events extends React.Component{
    render(){
      return(
        <div>
          <Headerbannder />
          <Preview_list />
        </div>
      )
    }
  }