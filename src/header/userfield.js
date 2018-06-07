import React from 'react';
import CustomerUserName from '../containers/UserLinkingField'

export default class Userfield extends React.Component{
    render(){
        return(
            <div className="user-field">
                <svg className="user-icon" fill="white" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>user</title><path d="M16,1.94A14.06,14.06,0,1,0,30.06,16,14.06,14.06,0,0,0,16,1.94Zm0,4.22a4.22,4.22,0,1,1-4.22,4.22A4.21,4.21,0,0,1,16,6.16Zm0,20a10.12,10.12,0,0,1-8.43-4.53c0-2.8,5.62-4.33,8.43-4.33s8.39,1.53,8.43,4.33A10.12,10.12,0,0,1,16,26.12Z"/></svg>
                <CustomerUserName className="user-name"/>
            </div>
        )
    }
}