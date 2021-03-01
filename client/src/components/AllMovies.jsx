import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import "../app.css";

function AllMovies(props) {
  let [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/get-all-movies")
    .then(res => {
      console.log('res.data', res.data)
      let copyFilms = res.data
      console.log('copyFilms', copyFilms)
      setFilms(res.data)
      console.log('films', films)
    })
    
  }, []);

  const displayMovies = () => {
    return films.map(eachMovie => {
      return (
        <Link to={`/AllMovies/${eachMovie._id}`}>
        <li key={eachMovie._id}>{eachMovie.title}</li>
        </Link>
      )
    })
  }



  return (
    <div>
      <h1>IRONHACK CINEMA</h1>
      <h3>Click on the movie to see the showtimes.</h3>
      <ul>{displayMovies()}</ul>
    </div>
  );
}



export default AllMovies;
