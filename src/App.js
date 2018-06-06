import React, { Component } from 'react';
//import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';
import Headers from './header/header.js'
import Bottom from './bottom.js'
import EventsContainer from './containers/EventsContainer'
import BottomContainer from './containers/BottomContainer'

class FirstPage extends Component{
  render() {
    return(
        <div className="Apper">
          <Headers className='App-head'/>
          <BottomContainer className='App-bottom'/>
          <EventsContainer />
        </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={FirstPage}/>
          <Route path="/events" component={EventsContainer}/>
        </div>
      </Router>
    );
  }
}

export default App;
