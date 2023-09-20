import React, { useContext } from "react";
import classes from "./css/Quote.module.css";
import QuoteContext from "../../store/quote-context";
import { AnimatePresence, motion } from "framer-motion";

const Quote = () => {
  const quoteCtx = useContext(QuoteContext);
  const [item] = quoteCtx.item;
  const nextBtnHandler = () => {
    quoteCtx.nextHandler();
  };
  return (
    <div className={classes.quote}>
      {" "}
      <img src={item.img} alt="Quote-images" className={classes.image} />
      <blockquote className={classes.text}>
        <span className={classes.dQuote}>"</span>
        {item.quote}
        <span className={classes.name}>{item.name}</span>
      </blockquote>
      <motion.button
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500 }}
        onClick={nextBtnHandler}
        className={classes.btn}
      >
        Next
      </motion.button>
    </div>
  );
};

export default Quote;
