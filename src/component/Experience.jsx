import React from "react";
import StadiumExperience from "../ui/StadiumExperienc";
import classes from "./css/Information.module.css";

const Experience = () => {
  return (
    <div className={classes.details}>
      <StadiumExperience className={classes.icon} />
      <h6 className={classes.heading}>Experience</h6>
      <p className={classes.textBottom}>
        Old Trafford Stadium is the world-famous home of Manchester United,
        <br />
        so make the most of your visit with the Old trafford Experience.
      </p>
    </div>
  );
};

export default Experience;
