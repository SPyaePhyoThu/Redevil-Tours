import React from "react";
import classes from "./css/Information.module.css";
import UnitedIcon from "../../UI/UnitedIcon";

const Accessiblity = () => {
  return (
    <div className={classes.details}>
      <UnitedIcon className={classes.icon} />
      <h6 className={classes.heading}>Accessibility</h6>
      <p className={classes.textBottom}>
        If you have any access requirements please get in touch to discuss
        <br />
        before you visit or book by emailing museum.enquiries@manuted.co.uk
      </p>
    </div>
  );
};

export default Accessiblity;
