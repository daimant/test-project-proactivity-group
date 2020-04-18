import preloader from "../../../assets/images/preloader.svg";
import React from "react";
import classes from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={classes.img}>
      <img src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;
