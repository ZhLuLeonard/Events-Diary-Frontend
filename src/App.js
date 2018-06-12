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
    var routes = []
    for (var i=0; i<this.props.events.size; i++) {
      //console.log(i)
      routes.push(i)
    }
    //console.log({routes})
    return (
      <Router>
        <div>
          <Switch>
          <Route exact path="/" component={FirstPage}/>
          <Route exact path="/events" component={EventsContainer}/>
          {routes.map( i => <Route key={i} path={`/eventsdetail/${i}`} render={() => (<Detail index={i} />)}/>)}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
