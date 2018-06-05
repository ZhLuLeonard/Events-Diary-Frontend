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
import In from './In.js'

class FirstPage extends Component{
  render() {
    return(
        <div className="Apper">
          <Headers className='App-head'/>
          <Bottom className='App-bottom'/>
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
          <Route path="/logged-in" component={In}/>
        </div>
      </Router>
    );
  }
}

export default App;
