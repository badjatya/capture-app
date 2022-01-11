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
  sliderContainer,
  slider,
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
      <motion.div variants={sliderContainer}>
        <StyledFrame1 variants={slider}></StyledFrame1>
        <StyledFrame2 variants={slider}></StyledFrame2>
        <StyledFrame3 variants={slider}></StyledFrame3>
        <StyledFrame4 variants={slider}></StyledFrame4>
      </motion.div>

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

//Frame Animation
const StyledFrame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const StyledFrame2 = styled(StyledFrame1)`
  background: #ff8efb;
`;
const StyledFrame3 = styled(StyledFrame1)`
  background: #8ed2ff;
`;
const StyledFrame4 = styled(StyledFrame1)`
  background: #8effa0;
`;

export default OurWork;
