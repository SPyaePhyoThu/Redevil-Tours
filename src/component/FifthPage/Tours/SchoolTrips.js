import React from "react";
import ST1 from "../img/ST1.jpg";
import ST2 from "../img/ST2.jpg";
import ST3 from "../img/ST3.jpg";
import ButtonWhite from "../../../UI/ButtonWhite";
import ButtonRed from "../../../UI/ButtonRed";
import classes from "./css/SchoolTrips.module.css";
import { Link, useNavigate } from "react-router-dom";

const SchoolTrips = () => {
  // const navigate = useNavigate();
  // const clickHandler = () => {
  //   console.log("click");
  //   navigate("/FindTicket");
  // };
  return (
    <div className={classes.page}>
      <h1 className={classes.mainHeading}>Redevil Tours</h1>
      <div className={classes.img}>
        <img src={ST1} alt="LegendImg2" className={classes.img2} />
        <img src={ST2} alt="LegendImg1" className={classes.img1} />
        <img src={ST3} alt="LegendImg3" className={classes.img3} />
      </div>
      <div className={classes.description}>
        <h1 className={classes.heading}>
          EDUCATIONAL VISITS AT MANCHESTER UNITED
        </h1>
        <p className={classes.text}>
          Old Trafford is the ideal place to hold your next school trip. With
          prices starting from just £7.50 per student, our award-winning
          Learning Experience provides a stimulating learning environment to
          bring subjects to life in a vibrant and exciting environment, with a
          range of workshops designed to complement your learning plans. Our
          unique programme can be tailored to your needs on a diverse range of
          subject areas.
        </p>
        <div className={classes.buttons}>
          <Link to="/tours/LegendTour">
            <ButtonRed className={classes.btn}>Legned Tours</ButtonRed>
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

export default SchoolTrips;
