import React from "react";
import classes from "./css/details.module.css";
import { motion } from "framer-motion";
const OpeningHours = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 1 }}
      className={classes.container}
    >
      <h1 className={classes.heading}>Opening Hours</h1>
      <p className={classes.text}>Sun : 0900-1700</p>
      <p className={classes.text}>Fri & Sat : 0900-1800</p>
      <p className={classes.text}>Mon to Thurs : 0900-1600</p>
    </motion.div>
  );
};
export default OpeningHours;
