import React from "react";

//icons
import spinner from "./../gif/spinner.gif";

const Loader = () => {
  return (
    <div>
      <h2> Loading... </h2>
      <img src={spinner} alt="spiner" />
    </div>
  );
};

export default Loader;
