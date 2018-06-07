import React, {Component} from 'react';
import clas from 'classnames';
import CustomerIcon from '../containers/CustomerIcon'
import './Header-banner.css'

export default class Headerbannder extends Component{
    render(){
        return(
            <div className="header_banner">
                <svg className = {clas(this.props.className, "searchIcon")} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>search</title><path d="M20.67,18.67H19.61l-0.37-.36a8.68,8.68,0,1,0-.93.93l0.36,0.37v1.05l6.67,6.65,2-2Zm-8,0a6,6,0,1,1,6-6A6,6,0,0,1,12.67,18.67Z"/></svg>
                <svg className = {clas(this.props.className, "logoCat")} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><title>logo-cat</title><polygon points="26.47 14.44 23.07 19.93 23.07 27.38 25.83 29.84 19.2 29.84 21.89 27.36 21.89 19.72 15.69 10.95 19.62 10.95 21.48 9.19 18.18 4.17 14.73 3.14 15.15 -0.03 9.92 4.17 2.83 17.38 7.78 28.12 5.51 30.53 5.51 31.97 9.26 31.97 10.18 31.48 10.93 31.97 29.94 31.97 29.94 30.25 25.68 25.99 25.68 20.55 27.96 16.84 28.78 16.84 29.2 20.08 30.4 20.08 30.71 14.44 26.47 14.44"/></svg>
                <CustomerIcon className = "userIcon" />
            </div>
        )
    }
}