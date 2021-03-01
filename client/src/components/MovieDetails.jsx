import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import "../app.css";

function MovieDetails(props) {
  console.log(props.match.params.id)
  let [film, setFilm] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/get-one-movie/${props.match.params.id}`)
    .then(res => {
      console.log('res', res)
      // let copyFilms = res.data
      // console.log('copyFilms', copyFilms)
      // setFilms(res.data)
      // console.log('films', films)
    })
    
  }, []);

  const displayDetails = () => {
    return (
    <h1> stuff to say about movie</h1>


    )
  }


  return (
    <div>
      <h1> MOVIE DETAILS COMPONENT</h1>
      <div>{displayDetails()}</div>
      
      {/* <{displayDetails()}/> */}
    </div>
  );
}

export default MovieDetails;