import React from "react";
import OpeningTimeIcon from "../ui/OpeningTimeIcon";
import classes from "./css/Information.module.css";

const OpeningTime = () => {
  return (
    <div className={classes.details}>
      <OpeningTimeIcon className={classes.icon} />
      <h6 className={classes.heading}>Opening Times</h6>
      <p className={classes.textTop}>
        <span>Friday & Saturday 09::30 -17:00</span>
        <span>Sunday To Thursday 09:30-1600</span>
        <span>*It is closed when there is Home Match Day.</span>
      </p>
    </div>
  );
};

export default OpeningTime;
