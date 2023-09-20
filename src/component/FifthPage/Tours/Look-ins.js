import React from "react";
import LK1 from "../img/LK1.jpg";
import LK2 from "../img/LK2.jpg";
import LK3 from "../img/LK3.webp";
import ButtonWhite from "../../../UI/ButtonWhite";
import ButtonRed from "../../../UI/ButtonRed";
import classes from "./css/LookIns.module.css";
import { Link } from "react-router-dom";

const LookIns = () => {
  return (
    <div className={classes.page}>
      <h1 className={classes.mainHeading}>Redevil Tours</h1>
      <div className={classes.img}>
        <img src={LK1} alt="LKImg1" className={classes.img2} />
        <img src={LK2} alt="LKImg2" className={classes.img1} />
        <img src={LK3} alt="LKImg3" className={classes.img3} />
      </div>
      <div className={classes.description}>
        <h1 className={classes.heading}>Look-ins</h1>
        <p className={classes.text}>
          Want to visit Old Trafford but pushed for time? On set dates
          throughout the year, we will be running Stadium Look-Ins to allow fans
          to see inside the Theatre of Dreams in a shorter experience priced at
          just £23 for Adults and £15 for Concessions. Visitors will get the
          opportunity to visit the Museum before seeing inside the stadium bowl,
          with plenty of photo opportunities. The experience will be led by an
          experienced Tour Guide who can answer any questions that you might
          have about the club and the world famous Old Trafford stadium.
        </p>
        <div className={classes.buttons}>
          <Link to="/tours/LegendTour">
            <ButtonRed className={classes.btn}>Legned Tours</ButtonRed>
          </Link>
          <Link to="/tours/VIPTour">
            <ButtonRed className={classes.btn}>VIP Tours</ButtonRed>
          </Link>
          <Link to="/tours/SchoolTrip">
            <ButtonRed className={classes.btn}>School Trip</ButtonRed>
          </Link>
          <Link to="../" relative="path" className={classes.link}>
            <ButtonWhite>Go Back</ButtonWhite>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LookIns;
