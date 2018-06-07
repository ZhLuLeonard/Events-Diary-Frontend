import React from 'react'
import Preview_header from './Preview-header'
import Title from './Title.js'
import './Preview.css'
import Dateline from './Dateline'

export default class Preview extends React.Component{
    render(){
        return (    
        <div>
            <Preview_header className = "leonardHeader" userName = "Leonard"/>
            <Title className = "previewTitle" title = "Mr. Trump is going to find Mr. Kim very soon" />
            <Dateline time1="2008/2/2" time2="2009/2/1" />
        </div>)
    }
}