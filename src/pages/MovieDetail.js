import React from "react";

// Import Lib
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();
  return (
    <div style={{ marginTop: "500px" }}>
      <h1>Movie Detail</h1>
      <p>{id}</p>
    </div>
  );
};

export default MovieDetail;
