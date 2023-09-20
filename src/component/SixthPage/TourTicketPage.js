import React, { useState } from "react";
import classes from "./css/TicketPage.module.css";
import Football from "../../UI/BigFootball";
import { useNavigate } from "react-router-dom";
import Whistle from "../../UI/Whistle";
import { Link } from "react-router-dom";
import { motion, spring } from "framer-motion";

const TourTicketPage = () => {
  const navigate = useNavigate();
  const [click, setClick] = useState();
  const ballClickHandler = () => {
    setTimeout(() => {
      navigate("/FindTicket");
    }, 600);
  };
  const whistleClickHandler = () => {
    setClick(true);
    console.log("hey");
  };
  return (
    <div id="TourTickets" className={classes.ticketPage}>
      <div className={classes.section1}>
        {click && (
          <Link to="/tours" className={classes.link}>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, skew: -10 }}
              transition={{ type: "spring", duration: 2 }}
              className={classes.cards}
            >
              <h1 className={classes.heading}>Tours</h1>
              <motion.figure
                initial={{ x: -20 }}
                whileInView={{ x: 20 }}
                transition={{ delay: 1 }}
                className={classes.arrow}
              >
                →
              </motion.figure>{" "}
            </motion.div>
          </Link>
        )}
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 0.9 }}
          transition={{ type: "spring", repeat: Infinity, repeatDelay: 1 }}
          onClick={whistleClickHandler}
          className={classes.whistle}
        >
          <Whistle />
        </motion.div>
      </div>
      <div className={classes.section2}>
        <input
          onClick={ballClickHandler}
          type="checkbox"
          id="click"
          className={classes.input}
        />
        <div className={classes.rollBox}>
          <label htmlFor="click">
            <Football className={classes.football} />
          </label>
          <div className={classes.circle}></div>
        </div>
      </div>
    </div>
  );
};
export default TourTicketPage;
