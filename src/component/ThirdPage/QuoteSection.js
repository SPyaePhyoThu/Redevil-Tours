import React from "react";
import tridentImage from "./images/Trident.jpg";
import classes from "./css/QuoteSection.module.css";
import Quote from "./Quote";
import QuoteList from "./QuoteList";
import { motion, AnimatePresence } from "framer-motion";
import QuoteProvider from "../../store/QuoteProvider";

const QuoteSection = () => {
  const slideInRightVariants = {
    initial: {
      opacity: 0,
      z: -35,
    },
    animate: {
      opacity: 1,
      z: 0,
      transition: {
        delay: 1,
        type: "spring",
      },
    },
  };

  return (
    <QuoteProvider>
      <div id="Quote" className={classes.quoteSection}>
        <motion.img
          variants={slideInRightVariants}
          initial="initial"
          whileInView="animate"
          src={tridentImage}
          alt="trident"
          className={classes.trident}
        />
        <AnimatePresence>
          {" "}
          <Quote />
        </AnimatePresence>
        <QuoteList />
      </div>
    </QuoteProvider>
  );
};
export default QuoteSection;
