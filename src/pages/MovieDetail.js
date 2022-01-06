import React, { useState, useEffect } from "react";

// Import Lib
import { useParams } from "react-router-dom";

// Import data
import MoviesData from "../data/movieData";

const MovieDetail = () => {
  // Parameter
  const { id } = useParams();
  // State
  const [movies] = useState(MoviesData());
  const [movie, setMovie] = useState(movies[0]);

  // finding movie
  useEffect(() => {
    const currentMovie = movies.find((movie) => movie.id === id);
    setMovie(currentMovie);
  }, [id, movies]);

  return (
    <div style={{ marginTop: "500px" }}>
      <h1>Movie Detail</h1>
      <p>{movie.title}</p>
    </div>
  );
};

export default MovieDetail;
