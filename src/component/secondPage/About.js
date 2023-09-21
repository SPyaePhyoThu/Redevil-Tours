import React from "react";
import classes from "./css/About.module.css";
import Header from "./Header";
import OpeningTime from "./OpeningTime";
import Price from "./Price";
import Experience from "./Experience";
import Accessiblity from "./Accessiblity";
import Football from "../../UI/BigFootball";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const About = () => {
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
    <AnimatePresence>
      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        transition={{ type: "spring", duration: 2 }}
        className={classes.section}
        id="About"
      >
        <Header />
        <div className={classes.topSection}>
          <OpeningTime />
          <Price />
        </div>
        <Football className={classes.football} />
        <div className={classes.bottomSection}>
          <Experience />
          <Accessiblity />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default About;
