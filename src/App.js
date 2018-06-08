import React, { Component } from 'react';
//import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import './App.css';
import Headers from './header/header.js'
import EventsContainer from './containers/EventsContainer'
import BottomContainer from './containers/BottomContainer'
import Detail from './components/Detail/Detail'

class FirstPage extends Component{
  render() {
    return(
        <div className="Apper">
          <Headers className='App-head'/>
          <BottomContainer className='App-bottom'/>
        </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
          <Route exact path="/" component={FirstPage}/>
          <Route exact path="/events" component={EventsContainer}/>
          {this.props.events.map((event,index) =>
          (<Route key={index} path={`/eventsdetail/${index}`} render={(props)=> <Detail index={index} {...props}/>}/>))}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
