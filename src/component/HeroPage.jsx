import React, { useState } from "react";
import classes from "./css/HeroPage.module.css";

import UnitedIconBig from "../ui/UnitedIconBig";

import ButtonRed from "../ui/ButtonRed";
import NavCheckBox from "./NavCheckBox";
import Menu from "./Menu";

import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const HeroPage = () => {
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
        <NavCheckBox onDisplay={displayMenuHandler} className={classes.nav} />
        <img
          src="https://manunitedcore.com/wp-content/uploads/2019/07/14.jpg"
          alt="old trafford"
          className={classes.img}
        />
        <div className={classes.box}>
          <UnitedIconBig className={classes.icon} />
          <h1 className={classes.heading}>Redevil</h1>
          <h2 className={classes.heading__secondary}>
            Old Trafford (aka) The Theatre of Dreams
          </h2>
          <p className={classes.text}>
            Join our Redevil tours and
            <br /> Visit the Stadium of Manchester United
          </p>
          <div className={classes.btnContainer}>
            <Link to="/tickets" className={classes.btnLink}>
              <ButtonRed className={classes.btn}>Tickets</ButtonRed>
            </Link>
            <Link to="/tours">
              <ButtonRed className={classes.btn}>Tours</ButtonRed>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
