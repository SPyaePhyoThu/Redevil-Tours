import React from "react";
import classes from "./css/Button.module.css";

const ButtonRed = (props) => {
  return (
    <button className={`${classes.buttonRed} ${props.className}`}>
      {props.children}
    </button>
  );
};
export default ButtonRed;
