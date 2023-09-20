import React from "react";
import Lengend1 from "../img/Legend1.png";
import Lengend2 from "../img/Legend2.jpg";
import Lengend3 from "../img/Legend3.jpg";
import ButtonWhite from "../../../UI/ButtonWhite";
import ButtonRed from "../../../UI/ButtonRed";
import classes from "./css/LegendTour.module.css";
import { Link } from "react-router-dom";

const LegendTour = () => {
  return (
    <div className={classes.page}>
      <h1 className={classes.mainHeading}>Redevil Tours</h1>
      <div className={classes.img}>
        <img src={Lengend2} alt="LegendImg2" className={classes.img2} />
        <img src={Lengend1} alt="LegendImg1" className={classes.img1} />
        <img src={Lengend3} alt="LegendImg3" className={classes.img3} />
      </div>
      <div className={classes.description}>
        <h1 className={classes.heading}>Legend Tours</h1>
        <p className={classes.text}>
          Tour Old Trafford in the company of iconic players and you will be
          transported back to the biggest victories and most precious club
          moments in the best way possible – through the words of those who
          lived, breathed and created them. A once in a lifetime experience, and
          a must for all dedicated fans.
        </p>
        <div className={classes.buttons}>
          <Link to="/tours/SchoolTrip">
            <ButtonRed className={classes.btn}>School Trip</ButtonRed>
          </Link>
          <Link to="/tours/VIPTour">
            <ButtonRed className={classes.btn}>VIP Tours</ButtonRed>
          </Link>
          <Link to="/tours/Look-ins">
            <ButtonRed className={classes.btn}>Look-ins</ButtonRed>
          </Link>
          <Link to="../" relative="path" className={classes.link}>
            <ButtonWhite>Go Back</ButtonWhite>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LegendTour;
