import React from "react";
import classes from "./css/toursSection.module.css";
import { motion } from "framer-motion";
import ToursItem from "./ToursItem";

const Tours = () => {
  const fadeIn = {
    initial: {
      opacity: 0,
      y: 300,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.div
      id="VariousTours"
      variants={fadeIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ type: "spring", duration: 2 }}
      className={classes.toursSection}
    >
      <h1 className={classes.mainHeading}>Old Trafford Stadium Tours</h1>
      <ToursItem />
    </motion.div>
  );
};

export default Tours;
