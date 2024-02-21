import React, { useState } from "react";
import classes from "./css/Tickets.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Tickets = () => {
  const [click, setClick] = useState(false);
  const [tour, setTour] = useState("Legend Tour");
  const [adult, setAdult] = useState(0);
  const [junior, setJunior] = useState(0);
  const [date, setDate] = useState(null);

  const screenWidth = window.innerWidth;

  const fadeIn = {
    initial: {
      opacity: 0,
      y: screenWidth > 1025 ? -300 : -200,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  const flipIn = {
    initial: {
      opacity: 0,
      rotateY: 90,
    },
    animate: {
      opacity: 1,
      rotateY: 0,
    },
  };

  const submitHandler = () => {
    setClick(true);
  };
  const clickHandler = () => {
    setClick(false);
  };
  return (
    <div className={classes.ticketSection}>
      <h1 className={classes.heading}>Tickets</h1>

      <div className={classes.bottomSection}>
        {click ? (
          <motion.div
            variants={flipIn}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", duration: 3 }}
            className={classes.ticketsConfirm}
          >
            <p className={classes.date}>Date : {date}</p>
            <h1 className={classes.headingSecondary}>{tour}</h1>
            <p className={classes.text}>Adult - {adult}</p>
            <p className={classes.text}>Junior - {junior}</p>
            <div className={classes.buttonBox}>
              <Link to="/payment">
                <button className={classes.button}>Buy</button>
              </Link>
              <button onClick={clickHandler} className={classes.button}>
                Cancel
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", duration: 3 }}
            className={classes.form}
            onSubmit={submitHandler}
          >
            <div className={classes.typeBox}>
              <label className={classes.label}>Type</label>
              <select
                className={classes.select}
                onChange={(e) => {
                  setTour(e.target.value);
                }}
              >
                <option value="Legend Tour" className={classes.option}>
                  Legend Tour
                </option>
                <option value="VIP Tour" className={classes.option}>
                  VIP Tour
                </option>
                <option value="Look-ins" className={classes.option}>
                  Look-ins
                </option>
                <option value="School Trip" className={classes.option}>
                  School Trip
                </option>
              </select>
            </div>
            <div>
              <label className={classes.label} htmlFor="date">
                Date
              </label>
              <input
                id="date"
                className={classes.dateInput}
                type="date"
                required
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </div>
            <div>
              <label className={classes.label} htmlFor="number">
                Adult
              </label>
              <input
                id="number"
                className={classes.input}
                type="number"
                required
                min="0"
                onChange={(e) => {
                  setAdult(e.target.value);
                }}
              />
            </div>
            <div>
              <label className={classes.label} htmlFor="number1">
                Junior
              </label>
              <input
                id="number1"
                className={classes.input}
                type="number"
                required
                min="0"
                onChange={(e) => {
                  setJunior(e.target.value);
                }}
              />
            </div>
            <button className={classes.button}>Buy</button>
          </motion.form>
        )}
      </div>
    </div>
  );
};

export default Tickets;
