import React from "react";

// Importing Styled
import styled from "styled-components";

// React Router Dom
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link className="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
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
