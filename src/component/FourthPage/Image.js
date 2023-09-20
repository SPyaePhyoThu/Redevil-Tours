import React from "react";
import classes from "./css/Image.module.css";
import { motion, AnimatePresence } from "framer-motion";

const Image = (props) => {
  const clickHandler1 = () => {
    props.onChoose("OpeningHours");
  };
  const clickHandler2 = () => {
    props.onChoose("Menu");
  };

  return (
    <motion.div
      initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: "spring" }}
      className={classes.images}
    >
      <div onClick={clickHandler1} className={classes.img1}>
        <p className={classes.caption1}>Opening Hours</p>
      </div>
      <div onClick={clickHandler2} className={classes.img2}>
        <p className={classes.caption2}>Menu</p>
      </div>
    </motion.div>
  );
};

export default Image;
