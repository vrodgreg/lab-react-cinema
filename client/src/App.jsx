import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Axios from 'axios';
import Home from './components/Home';
import Movies from './components/Movies';
import AddMovie from './components/AddMovie'


class App extends Component {
  render() {
    return (
      <div className='App'>
{/* 
<Home /> */}

      <Switch>
        <Route exact path="/" render={(props) => < Home {...props} />} />
        <Route exact path="/movies" render={(props) => < Movies {...props} />} />
        <Route exact path="/addMovie" render={(props) => < AddMovie {...props} />} />
      </Switch>

      </div>
    );
  }
}

export default App;
