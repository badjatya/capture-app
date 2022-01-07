import React from "react";

// Importing images
import home1 from "../img/home1.png";

// Importing Lib
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  titleAnimation,
  fadeAnimation,
  photoAnimation,
} from "../styles/animations";
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
          <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
        </StyledHide>
        <StyledHide>
          <motion.h2 variants={titleAnimation}>
            your <span>dreams</span>
          </motion.h2>
        </StyledHide>
        <StyledHide>
          <motion.h2 variants={titleAnimation}>come true.</motion.h2>
        </StyledHide>
        <motion.p variants={fadeAnimation}>
          Contact us for any photography or video graph ideas that you have. We
          have professionals with amazing skills to help you achieve it.{" "}
        </motion.p>
        <motion.button variants={fadeAnimation}>Contact Us</motion.button>
      </StyledDescription>

      <StyledImage>
        <motion.img
          variants={photoAnimation}
          src={home1}
          alt="guy with camera"
        />
      </StyledImage>
    </StyledAbout>
  );
};

// Styled components
const StyledAbout = styled(StyledLayout)`
  margin-top: 4vh;
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
