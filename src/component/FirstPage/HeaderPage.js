import React, { useState } from "react";
import classes from "./css/HeaderPage.module.css";

import UnitedIconBig from "../../UI/UnitedIconBig";

import ButtonRed from "../../UI/ButtonRed";
import NavCheckBox from "./NavCheckBox";
import Menu from "./Menu";
import img1 from "./img/1.png";
import { AnimatePresence } from "framer-motion";

const HeaderPage = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const displayMenuHandler = () => {
    setDisplayMenu(true);
    console.log("ok");
  };
  const hideMenuHandler = () => {
    setDisplayMenu(false);
  };

  return (
    <div className={classes.home}>
      <AnimatePresence>
        {displayMenu && <Menu onClose={hideMenuHandler} />}
      </AnimatePresence>
      <div className={classes.frame}>
        {" "}
        <NavCheckBox onDisplay={displayMenuHandler} className={classes.nav} />
        <img className={classes.img} src={img1} alt="Old Trafford" />
        <div className={classes.box}>
          <h1 className={classes.heading}>
            Redevil <UnitedIconBig className={classes.icon} />
          </h1>
          <h2 className={classes.heading__secondary}>
            Old Trafford (aka) The Theatre of Dreams
          </h2>
          <p className={classes.text}>
            Join our Redevil tours and
            <br /> Visit the Stadium of Manchester United
          </p>
          <div className={classes.btnContainer}>
            <a href="#TourTickets" className={classes.btnBox}>
              <ButtonRed className={classes.btn}>Buy Tickets</ButtonRed>
            </a>
            <a href="#TourTickets" className={classes.btnBox}>
              <ButtonRed className={classes.btn}>Tours</ButtonRed>
            </a>
          </div>
        </div>
      </div>

      {/* <AnimatePresence>
        {displayMenu && <Menu onClose={hideMenuHandler} />}
      </AnimatePresence>

      <NavCheckBox onDisplay={displayMenuHandler} className={classes.nav} />

      <div className={classes.container}>
        <div className={classes.box}>
          <h1 className={classes.heading}>
            Redevil <UnitedIconBig className={classes.icon} />
          </h1>
          <h2 className={classes.heading__secondary}>
            Old Trafford (aka) The Theatre of Dreams
          </h2>
          <p className={classes.text}>
            Join our Redevil tours and
            <br /> Visit the Stadium of Manchester United
          </p>
        </div>
        <img className={classes.img} src={img1} alt="Old Trafford" />
      </div>
      <div className={classes.btnContainer}>
        <a href="#TourTickets" className={classes.btnBox}>
          <ButtonRed className={classes.btn}>Buy Tickets</ButtonRed>
        </a>
        <a href="#TourTickets" className={classes.btnBox}>
          <ButtonRed className={classes.btn}>Tours</ButtonRed>
        </a>
      </div> */}
    </div>
  );
};

export default HeaderPage;
