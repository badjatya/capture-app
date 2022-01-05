// Import styled components
import styled from "styled-components";

export const StyledLayout = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: #fff;
`;

export const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

export const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;