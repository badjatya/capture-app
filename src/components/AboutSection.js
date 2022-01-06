import React from "react";

// Importing images
import home1 from "../img/home1.png";

// Importing styled
import styled from "styled-components";
import {
  StyledLayout,
  StyledDescription,
  StyledImage,
} from "../styles/layoutStyles";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <StyledHide>
          <h2>We work to make</h2>
        </StyledHide>
        <StyledHide>
          <h2>
            your <span>dreams</span>
          </h2>
        </StyledHide>
        <StyledHide>
          <h2>come true.</h2>
        </StyledHide>
        <p>
          Contact us for any photography or video graph ideas that you have. We
          have professionals with amazing skills to help you achieve it.{" "}
        </p>
        <button>Contact Us</button>
      </StyledDescription>

      <StyledImage>
        <img src={home1} alt="guy with camera" />
      </StyledImage>
    </StyledAbout>
  );
};

// Styled components
const StyledAbout = styled(StyledLayout)`
  margin-top: 5vh;
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
