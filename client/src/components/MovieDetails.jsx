import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import "../app.css";

function MovieDetails(props) {
  console.log(props.match.params.id);
  let [film, setFilm] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/get-one-movie/${props.match.params.id}`)
      .then((res) => {
        console.log("res", res);

        setFilm(res.data);
      });
  }, []);

  const displayDetails = () => {
    return (
      film ? 
      <div>
        <img src={film.image} alt={film.title} />
        <p>{film.title}</p>
        <h1> stuff to say about movie</h1>
        <p>{film.director}</p>
        <p>{film.description}</p>
        {/* <ul>
          {film.stars.map((eachActor) => {
            <li key={eachActor}>{eachActor}</li>;
          })}
        </ul> */}
      </div>
      : <div>Loading Movie .....</div>
    );
  };

  return (
    <div>
      <h1> MOVIE DETAILS COMPONENT</h1>
      <div>{displayDetails()}</div>

      {/* <{displayDetails()}/> */}
    </div>
  );
}

export default MovieDetails;
