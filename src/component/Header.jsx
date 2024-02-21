import React from "react";
import classes from "./css/Header.module.css";

const Header = () => {
  return (
    <h1 className={classes.header}>
      <span className={classes.header1}>
        Visit the Stadium Tour at Old Trafford and
      </span>
      <span className={classes.header2}>
        Walk in the Footsteps of Greatness
      </span>
    </h1>
  );
};

export default Header;
