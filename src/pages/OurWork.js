import React from "react";

// Import Lib
import styled from "styled-components";
import { Link } from "react-router-dom";

// Import Images
import athleteImage from "../img/athlete-small.png";
import theRacerImage from "../img/theracer-small.png";
import goodTimesImage from "../img/goodtimes-small.png";

const OurWork = () => {
  return (
    <StyledWork>
      <StyledMovie>
        <h2>The Athlete</h2>
        <div className="line" />
        <Link to="/work/athlete">
          <img src={athleteImage} alt="athlete pic" />
        </Link>
      </StyledMovie>

      <StyledMovie>
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
      </StyledMovie>
    </StyledWork>
  );
};

// Styled
const StyledWork = styled.div`
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
    background: #ccc;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
