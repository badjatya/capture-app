import React from "react";

// Import Styled
import styled from "styled-components";

const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
};

// Styles
const StyledAward = styled.div`
  padding: 4rem;

  h2 {
    font-size: 2rem;
  }

  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }

  p {
    padding: 2rem 0rem;
    font-size: 1rem;
  }
`;

export default Award;
