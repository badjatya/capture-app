import React from "react";

// Importing images
import home1 from "../img/home1.png";

// Importing Lib
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  StyledLayout,
  StyledDescription,
  StyledImage,
} from "../styles/layoutStyles";

// const AnimateDescription = {
//   hidden: { x: 100 },
//   show: {
//     x: 0,
//     transition: {
//       duration: 1,
//       ease: "easeOut",
//       staggerChildren: 0.5,
//     },
//   },
// };

// const AnimateTitle = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { duration: 2 },
//   },
// };

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div
        // variants={AnimateDescription}
        // initial="hidden"
        // animate="show"
        >
          <StyledHide>
            <motion.h2
            // variants={AnimateTitle}
            >
              We work to make
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2
            // variants={AnimateTitle}
            >
              your <span>dreams</span>
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2
            // variants={AnimateTitle}
            >
              come true.
            </motion.h2>
          </StyledHide>
        </motion.div>
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
  margin-top: 4vh;
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
