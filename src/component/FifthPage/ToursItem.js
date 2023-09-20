import React from "react";
import classes from "./css/ToursItem.module.css";
import ButtonRed from "../../UI/ButtonRed";
import ButtonWhite from "../../UI/ButtonWhite";
import { Link } from "react-router-dom";

const ToursItem = () => {
  return (
    <div className={classes.container}>
      <div>
        <Link to="/tours/LegendTour">
          <div className={classes.legend}>Legend Tour</div>
        </Link>
        <Link to="/tours/VIPTour">
          {" "}
          <div className={classes.vip}>VIP Tour</div>
        </Link>
        <Link to="/tours/Look-ins">
          {" "}
          <div className={classes.lookins}>Look-ins</div>
        </Link>
        <Link to="/tours/SchoolTrip">
          {" "}
          <div className={classes.school}>School Trip</div>
        </Link>
      </div>
      <div className={classes.textSection}>
        <h1 className={classes.heading}>Redevil Tours</h1>
        <p className={classes.text}>
          Old Trafford Stadium is the world-famous home of Manchester United.
          Join Our Redevil Tours and Visit the Stadium on a non-matchday and
          enjoy a behind the scenes Stadium Tour and get a delicious bite to eat
          in the Red Cafe.{" "}
        </p>
        <Link to="/FindTicket" className={classes.btnBox}>
          <ButtonRed className={classes.btn}>Buy Tickets</ButtonRed>
        </Link>
        <Link to="../" relative="route" className={classes.link}>
          <ButtonWhite>Go Back</ButtonWhite>
        </Link>
      </div>
    </div>
  );
};

export default ToursItem;
