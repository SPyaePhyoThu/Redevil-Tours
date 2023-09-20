import React from "react";
import classes from "./Button.module.css";

const ButtonWhite = (props) => {
  return (
    <button
      type={`${props.type}` || "button"}
      className={`${classes.buttonWhite} ${props.className}`}
    >
      {props.children}
    </button>
  );
};
export default ButtonWhite;
