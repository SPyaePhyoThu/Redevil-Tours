import React from "react";
import classes from "./css/Information.module.css";
import AccessibilityIcon from "../ui/AccessiblityIcon";

const Accessiblity = () => {
  return (
    <div className={classes.details}>
      <AccessibilityIcon className={classes.aIcon} />
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
