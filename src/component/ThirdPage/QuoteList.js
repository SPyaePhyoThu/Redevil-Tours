import React, { useContext } from "react";
import classes from "./css/QuoteList.module.css";
import QuoteItem from "./QuoteItem";
import { AnimatePresence } from "framer-motion";
import QuoteContext from "../../store/quote-context";

const QuoteList = () => {
  const quoteCtx = useContext(QuoteContext);
  const allItems = quoteCtx.allItems;

  return (
    <AnimatePresence>
      <div className={classes.container}>
        <ul className={classes.quoteList}>
          {allItems.map((items) => (
            <QuoteItem info={items} key={items.id} />
          ))}
        </ul>
      </div>
    </AnimatePresence>
  );
};

export default QuoteList;
