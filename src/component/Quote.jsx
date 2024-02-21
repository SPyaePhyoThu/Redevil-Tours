import React, { useContext } from "react";
import classes from "./css/Quote.module.css";
import QuoteContext from "../store/quote-context";

const Quote = () => {
  const quoteCtx = useContext(QuoteContext);
  const [item] = quoteCtx.item;
  const nextBtnHandler = () => {
    quoteCtx.nextHandler();
  };
  return (
    <div className={classes.quoteContainer}>
      <div className={classes.topSection}>
        <img src={item.img} alt="Quote-images" className={classes.image} />
        <div className={classes.text}>
          <p className={classes.name}>{item.name}</p>
          <p className={classes.occupation}>{item.occupation}</p>
        </div>
      </div>

      <blockquote className={classes.quote}>
        <span className={classes.dQuote}> &#x275D; </span>
        <div className={classes.paragraph}>{item.quote}</div>
      </blockquote>

      <button onClick={nextBtnHandler} className={classes.btn}>
        Next
      </button>
    </div>
  );
};

export default Quote;
