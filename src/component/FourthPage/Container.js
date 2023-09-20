import React, { useState } from "react";
import Image from "./Image";
import OpeningHours from "./OpeningHours";
import classes from "./css/Container.module.css";
import { AnimatePresence } from "framer-motion";

import Menu from "./Menu";

const Container = () => {
  const welcome = (
    <div className={classes.welcome}>
      <h1 className={classes.heading}>Welcome</h1>
      <p className={classes.text}>
        You can find the Red Café on Level 3 of the Sir Alex Ferguson stand,
        opposite the entrance to the Museum & Stadium Tour Enjoy delicious
        meals, tasty snacks and refreshing drinks from our extensive menu in the
        Red Café. <br /> From breakfast options to start your day with us,
        through to cakes and puddings to round off a great day out, there's sure
        to be something for everyone, even the fussy ones!
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
    <div className={classes.container}>
      <div className={classes.details}>
        <Image onChoose={chooseHandler} />
        <AnimatePresence>{content}</AnimatePresence>
      </div>
    </div>
  );
};

export default Container;
