import React from "react";
import classes from "./css/VIPTours.module.css";
import VIP1 from "../img/VIP1.webp";
import VIP2 from "../img/VIP2.jpg";
import VIP3 from "../img/VIP3.webp";
import ButtonRed from "../../../UI/ButtonRed";
import ButtonWhite from "../../../UI/ButtonWhite";
import { Link } from "react-router-dom";

const VIPTours = () => {
  return (
    <div className={classes.page}>
      <h1 className={classes.mainHeading}>Redevil Tours</h1>
      <div className={classes.img}>
        <img src={VIP2} alt="VIPImg2" className={classes.img2} />
        <img src={VIP1} alt="VIPImg1" className={classes.img1} />
        <img src={VIP3} alt="VIPImg3" className={classes.img3} />
      </div>
      <div className={classes.description}>
        <h1 className={classes.heading}>
          A once-in-a-lifetime stadium tour experience of Old Trafford
        </h1>
        <h2 className={classes.heading2}>
          Your very own private tour guide will escort you on a VIP tour
          experience with no other members of the public.
        </h2>
        <ul className={classes.text}>
          <h6 className={classes.heading3}>The tour includes</h6>
          <li> A 1-hour private, exclusive guided tour of Old Trafford.</li>
          <li>
            Minimum 2 persons per group (NB – Guests may attend on their own but
            must pay the cost of a second person)
          </li>
          <li>
            Tour highlights include the Home and Away Dressing Rooms, Press
            Room, Player’s Tunnel and Pitchside.
          </li>
          <li>
            Trophy photograph with Manchester United FC trophy collection (1
            photo per person).
          </li>
          <li>Delicious 2 course meal at Red Cafe at Old Trafford. </li>
          <li>
            Access to Manchester United FC Museum before and/or after tour.
          </li>
          <li>
            Manchester United FC souvenir guidebook. Manchester United FC
            souvenir lanyard.
          </li>
        </ul>
        <div className={classes.buttons}>
          <Link to="/tours/LegendTour">
            <ButtonRed className={classes.btn}>Legned Tours</ButtonRed>
          </Link>
          <Link to="/tours/SchoolTrip">
            <ButtonRed className={classes.btn}>School Trip</ButtonRed>
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

export default VIPTours;
