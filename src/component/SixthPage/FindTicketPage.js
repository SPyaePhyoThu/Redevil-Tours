import React from "react";
import classes from "./css/FindTicketPage.module.css";
import ButtonWhite from "../../UI/ButtonWhite";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const FindTicketPage = () => {
  const naviagte = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    naviagte("/AvailableTour");
  };
  return (
    <div className={classes.page}>
      <h1 className={classes.mainHeading}>Redevil Tours</h1>
      <div className={classes.container}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: [-300, 300, 0] },
          }}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring" }}
          className={classes.findTicket}
        >
          <h1 className={classes.heading}>Buy Ticket</h1>
          <form id="fromId" onSubmit={submitHandler} className={classes.form}>
            <div className={classes.typeBox}>
              <label className={classes.label}>Type</label>
              <select className={classes.select}>
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
              />
            </div>

            <ButtonWhite type="submit" className={classes.btn}>
              Find Ticket
            </ButtonWhite>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default FindTicketPage;
