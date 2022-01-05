import React from "react";

// Importing Styled
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a className="logo" href="/">
          Capture
        </a>
      </h1>
      <ul>
        <li>
          <a href="/">About Us</a>
        </li>
        <li>
          <a href="/">Our Work</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
      </ul>
    </StyledNav>
  );
};

// Styles
const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 1rem 10rem;
  background: #282828;

  a {
    color: #fff;
    text-decoration: none;
  }

  ul {
    list-style: none;
    display: flex;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: lighter;
    font-family: "Lobster", cursive;
  }
`;

export default Nav;
