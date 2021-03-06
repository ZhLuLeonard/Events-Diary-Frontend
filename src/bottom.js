import React from 'react';
import cls from 'classnames';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

export default class Bottom extends React.Component{
    render(){
        return(
            <div>
                <button type="button" onClick={this.props.onClick}>
                    <Link className={cls(this.props.className, "login-button")}  to="/events" onClick={(e) => this.props.onClick}> SIGN IN </Link>
                </button>
            </div>
        )
    }
}