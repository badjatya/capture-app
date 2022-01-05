import React from "react";

// Import Style
import styled from "styled-components";
import { StyledLayout } from "../styles/layoutStyles";

const FaqSection = () => {
  return (
    <StyledFaq>
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>

      <div className="question">
        <h4>How Do I Start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            optio.
          </p>
        </div>
        <div className="faq-line" />
      </div>

      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            optio.
          </p>
        </div>
        <div className="faq-line" />
      </div>

      <div className="question">
        <h4>Different payment methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            optio.
          </p>
        </div>
        <div className="faq-line" />
      </div>

      <div className="question">
        <h4>What Products do u offer?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            optio.
          </p>
        </div>
        <div className="faq-line" />
      </div>
    </StyledFaq>
  );
};

// Styles
const StyledFaq = styled(StyledLayout)`
  display: block;
  span {
    display: block;
    color: #23d997;
  }
  h2 {
    font-weight: lighter;
    padding-bottom: 4rem;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
