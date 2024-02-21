import React from "react";
import classes from "./css/QuoteSection.module.css";
import Quote from "./Quote";
import QuoteList from "./QuoteList";
import { AnimatePresence } from "framer-motion";
import QuoteProvider from "../store/QuoteProvider";

const QuoteSection = () => {
  return (
    <QuoteProvider>
      <div id="Quote" className={classes.quoteSection}>
        <AnimatePresence>
          <Quote />
        </AnimatePresence>
        <QuoteList />
      </div>
    </QuoteProvider>
  );
};
export default QuoteSection;
