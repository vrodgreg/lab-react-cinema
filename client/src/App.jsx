import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
// import Axios from 'axios';
import Home from './components/Home';
import AllMovies from './components/AllMovies';
import AddMovie from './components/AddMovie'
import './app.css';
import MovieDetails from './components/MovieDetails';


class App extends Component {
  render() {
    return (
      <div className='App'>
{/* 
<Home /> */}

      <Switch>
        <Route exact path="/" render={(props) => < Home {...props} />} />
        <Route exact path="/allMovies" render={(props) => < AllMovies {...props} />} />
        <Route exact path="/allMovies/:id" render={(props) => < MovieDetails {...props} />} />
        <Route exact path="/addMovie" render={(props) => < AddMovie {...props} />} />
      </Switch>

      </div>
    );
  }
}

export default App;
