import React, { useState } from "react";

// Import Lib
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  pageAnimation,
  fadeAnimation,
  photoAnimation,
  lineAnimation,
} from "../styles/animations";

// Import data
import MoviesData from "../data/movieData";

const OurWork = () => {
  // State
  const [movies] = useState(MoviesData());
  return (
    <StyledWork
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      {movies.map((movie) => (
        <StyledMovie key={movie.id}>
          <motion.h2 variants={fadeAnimation}>{movie.title}</motion.h2>
          <motion.div variants={lineAnimation} className="line" />
          <Link to={`/work/${movie.id}`}>
            <StyledImg>
              <motion.img
                variants={photoAnimation}
                src={movie.mainImg}
                alt={movie.title}
              />
            </StyledImg>
          </Link>
        </StyledMovie>
      ))}

      {/* <StyledMovie>
        <h2>The Athlete</h2>
        <div className="line" />
        <Link to="/work/athlete">
          <img src={athleteImage} alt="athlete pic" />
        </Link>
      </StyledMovie> */}

      {/* <StyledMovie>
        <h2>The Racer</h2>
        <div className="line" />
        <Link to="/work/racer">
          <img src={theRacerImage} alt="racer pic" />
        </Link>
      </StyledMovie>

      <StyledMovie>
        <h2>The Good Times</h2>
        <div className="line" />
        <Link to="/work/good">
          <img src={goodTimesImage} alt="good times pic" />
        </Link>
      </StyledMovie> */}
    </StyledWork>
  );
};

// Styled
const StyledWork = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  overflow: hidden;

  h2 {
    padding: 1rem 0rem;
  }
`;

const StyledMovie = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    margin-bottom: 3rem;
    background: #23d997;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledImg = styled.div`
  overflow: hidden;
`;

export default OurWork;
