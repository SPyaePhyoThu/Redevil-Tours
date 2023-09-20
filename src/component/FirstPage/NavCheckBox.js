import React from "react";
import classes from "./css/NavCheckBox.module.css";

const NavCheckBox = (props) => {
  return (
    <div onClick={props.onDisplay} className={props.className}>
      <div className={classes.checkbox} id="nav-checkbox" />
      <div className={classes.menu}>
        <span className={classes.icon}>&nbsp;</span>
      </div>
    </div>
  );
};
export default NavCheckBox;
