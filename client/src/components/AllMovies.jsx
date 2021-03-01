import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import "../app.css";

function AllMovies(props) {
  let [films, setFilms] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/get-all-movies")
    .then(res => {
      // console.log('res.data', res.data)
      // let copyFilms = res.data
      // console.log('copyFilms', copyFilms)
      setFilms(res.data)
    })

    
  }, []);

  console.log('films', films)

  const displayMovies = () => {
    return films.map(eachMovie => {
      return (
        <div>
        <img src={eachMovie.image} alt={eachMovie.title} />
        <p>{eachMovie.title}</p>
        <Link to={`/AllMovies/${eachMovie._id}`}>
        <p>Click for Detail</p>
        {/* <li key={eachMovie._id}>Click for detail</li> */}
        </Link>
        </div>
      )
    })
  }



  return (
    <div>
      <h1>IRONHACK CINEMA</h1>
      <h3>Click on the movie to see the showtimes.</h3>
      <div className="movieList"> 
      {displayMovies()}
      </div>
    </div>
  );
}



export default AllMovies;
