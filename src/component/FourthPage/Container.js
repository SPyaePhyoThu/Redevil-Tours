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
        Click the following images for more information.
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
        {" "}
        <AnimatePresence>{content}</AnimatePresence>
      </div>
      <Image onChoose={chooseHandler} />
    </div>
  );
};

export default Container;
