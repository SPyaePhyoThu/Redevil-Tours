import React from "react";
import classes from "./css/TicketAndTour.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const TicketAndTour = () => {
  const screenWidth = window.innerWidth;
  const fadeIn = {
    initial: {
      opacity: 0,
      x: screenWidth > 768 ? -900 : -600,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <div id="TourTickets" className={classes.ticketAndTourPage}>
      <h1 className={classes.heading}>
        A home <br /> for <span className={classes.highlight}> Red Devils</span>
      </h1>
      <h3 className={classes.headingSecondary}>A hell for opponents</h3>
      <motion.div
        variants={screenWidth > 770 ? fadeIn : ""}
        initial="initial"
        whileInView="animate"
        transition={{ type: "spring", duration: 5 }}
        className={classes.frame}
      >
        <div className={classes.ticketAndTourSection}>
          <div className={classes.descriptionSection}>
            <h3 className={classes.paragraphHeading}>We Organize Your Tour </h3>
            <p className={classes.paragraph}>
              Immerse yourself in the rich history and legendary moments of
              Manchester United by embarking on a captivating tour of Old
              Trafford .We invite you to check out our variety of tours.
            </p>
            <div className={classes.buttonBox}>
              <Link to="/tours" className={classes.buttonLink}>
                <button className={classes.button}>Tours</button>
              </Link>
              <Link to="/tours">
                <button className={classes.button}>Tickets</button>
              </Link>
            </div>
          </div>
          <img
            src="https://www.icons.com/media/catalog/product/cache/a96918c7a34e3adbc471d6a40dca14fe/a/l/alex_ferguson_signed_lego_pitch_piece_-_stadium_2.png"
            alt="old trafford"
            className={classes.image}
          />
        </div>
      </motion.div>
    </div>
  );
};
export default TicketAndTour;
