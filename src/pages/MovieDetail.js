import React, { useState, useEffect } from "react";

// Import Lib
import { useParams } from "react-router-dom";
import styled from "styled-components";

// Importing Components
import Award from "../components/Award";

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
    <StyledMovieDetail>
      <StyledHeadline>
        <h2>{movie.title}</h2>
        <img src={movie.mainImg} alt={movie.title} />
      </StyledHeadline>

      <StyledAwards>
        {movie.awards.map((award) => (
          <Award
            key={award.title}
            title={award.title}
            description={award.description}
          />
        ))}
      </StyledAwards>

      <StyledSecondaryImage>
        <img src={movie.secondaryImg} alt={movie.title} />
      </StyledSecondaryImage>
    </StyledMovieDetail>
  );
};

const StyledMovieDetail = styled.div`
  margin-top: 9vh;
  color: #fff;
`;

const StyledHeadline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 71vh;
    object-fit: cover;
  }
`;

const StyledAwards = styled.div`
  min-height: 80vh;
  margin: 5rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledSecondaryImage = styled.div`
  min-height: 50vh;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

export default MovieDetail;
