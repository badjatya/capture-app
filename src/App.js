import React from "react";

// Importing pages
import AboutUs from "./pages/AboutUs";

// Importing Global Style
import GlobalStyle from "./styles/GlobalStyle";

// Importing Components
import Nav from "./components/Nav";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </>
  );
};

export default App;
