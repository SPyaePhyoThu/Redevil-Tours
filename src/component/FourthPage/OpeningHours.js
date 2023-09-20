import React from "react";
import classes from "./css/details.module.css";
import UnitedIcon from "../../UI/UnitedIcon";
import { motion } from "framer-motion";
const OpeningHours = () => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 1 }}
      className={classes.text}
    >
      <h1 className={classes.heading}>
        <UnitedIcon className={classes.icon} />
        Opening Hours
        <UnitedIcon className={classes.icon} />
      </h1>
      <p>SUN : 0900-1700</p>
      <p>FRI & SAT : 0900-1800</p>
      <p>MON to THURS : 0900-1600</p>
    </motion.div>
  );
};
export default OpeningHours;
