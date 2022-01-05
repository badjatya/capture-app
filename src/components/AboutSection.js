import React from "react";

// Importing images
import home1 from "../img/home1.png";

// Importing styled
import styled from "styled-components";

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
const StyledAbout = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #fff;
`;

const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
