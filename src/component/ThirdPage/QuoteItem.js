import React, { useContext } from "react";
import classes from "./css/QuoteItem.module.css";
import { motion } from "framer-motion";
import { useRef } from "react";
import QuoteContext from "../../store/quote-context";

const QuoteItem = (props) => {
  const quoteCtx = useContext(QuoteContext);
  const ref = useRef();

  const slideInLeftVariants = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: (id) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.05 * id,
      },
    }),
  };

  const clickHandler = (e) => {
    quoteCtx.clickHandler(ref.current.id);
  };

  return (
    <motion.li
      ref={ref}
      id={props.info.id}
      variants={slideInLeftVariants}
      initial="initial"
      whileInView="animate"
      whileHover={{ scale: 1.19 }}
      custom={props.info.id}
      className={classes.item}
      onClick={clickHandler}
    >
      <img src={props.info.img} alt="player" className={classes.image} />
      <div className={classes.text}>
        <p>{props.info.name}</p>
        <p>{props.info.occupation}</p>
      </div>
    </motion.li>
  );
};
export default QuoteItem;
