import React, { useState } from "react";
import CoffeeCup from "../ui/CoffeCup";
import OpeningHours from "./OpeningHours";
import Menu from "./RedCafeMenu";
import classes from "./css/RedCafe.module.css";
import { AnimatePresence } from "framer-motion";

const RedCafe = () => {
  const welcome = (
    <div className={classes.welcomeContainer}>
      <h1 className={classes.headerSecondary}>Welcome</h1>
      <p className={classes.text}>
        You can find the Red Café on Level 3 of the Sir Alex Ferguson stand,
        opposite the entrance to the Museum & Stadium Tour Enjoy delicious
        meals, tasty snacks and refreshing drinks from our extensive menu in the
        Red Café. From breakfast options to start your day with us, through to
        cakes and puddings to round off a great day out, there's sure to be
        something for everyone, even the fussy ones!
      </p>
    </div>
  );

  const [content, setContent] = useState(welcome);
  const chooseHandler = (id) => {
    if (id === "Menu") {
      setContent(<Menu />);
    }
    if (id === "OpeningHours") {
      setContent(<OpeningHours />);
    }
  };

  return (
    <div id="RedCafe" className={classes.container}>
      <div className={classes.details}>
        <div className={classes.heading}>
          <CoffeeCup />
          <h3 className={classes.header}>Red Cafe</h3>
        </div>
        <AnimatePresence>
          <div className={classes.contentBox}>{content}</div>
        </AnimatePresence>
        <div className={classes.buttonBox}>
          <button
            onClick={() => {
              chooseHandler("Menu");
            }}
            className={`${classes.button} ${classes.button1}`}
          >
            Menu
          </button>
          <button
            onClick={() => {
              chooseHandler("OpeningHours");
            }}
            className={classes.button}
          >
            Opening Hours
          </button>
        </div>
      </div>
    </div>
  );
};
export default RedCafe;
