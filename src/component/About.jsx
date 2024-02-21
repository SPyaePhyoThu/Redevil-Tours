import React from "react";
import classes from "./css/About.module.css";
import Header from "./Header";
import OpeningTime from "./OpeningTime";
import Price from "./Price";
import Experience from "./Experience";
import Accessiblity from "./Accessiblity";
import Football from "../ui/BigFootball";
import { AnimatePresence, motion } from "framer-motion";

const About = () => {
  const screenWidth = window.innerWidth;
  const fadeIn = {
    initial: {
      opacity: 0,
      x: screenWidth > 768 ? -1000 : -600,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <AnimatePresence>
      <motion.div
        variants={screenWidth > 770 ? fadeIn : ""}
        initial="initial"
        whileInView="animate"
        transition={{ type: "spring", duration: 5 }}
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
