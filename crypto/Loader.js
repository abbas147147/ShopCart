import React from "react";

//icons
import spinner from "./../gif/spinner.gif";
//css
import styles from "./loader.module.css";

const Loader = () => {
  return (
    <div className={styles.container}>
      <h2> Loading... </h2>
      <img src={spinner} alt="spiner" />
    </div>
  );
};

export default Loader;
