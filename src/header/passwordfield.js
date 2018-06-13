import React from 'react';
import Password from './Password.js';

export default class Passwordfield extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isSelected: false,
            actualText: "",
        }
        this.onTextChange = this.onTextChange.bind(this);
    }
    onTextChange(text){
        this.setState({
            actualText: text
        })
    }
    render(){
        return(
            <div className="password-field">
                <svg className="password-icon" fill="white" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>password</title><path d="M13.33,30.67h5.33V28H24V22.67H18.67v-5.8a8,8,0,1,0-5.33,0v13.8ZM16,12a2.67,2.67,0,1,1,2.67-2.67A2.67,2.67,0,0,1,16,12Z"/></svg>
                <Password className="pass-word" value={this.actualText} onChange={this.onTextChange}/>
            </div>
        )
    }
}