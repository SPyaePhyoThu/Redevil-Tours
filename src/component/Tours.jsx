import React from "react";
import classes from "./css/Tours.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Tours = () => {
  const screenWidth = window.innerWidth;
  const fadeIn = {
    initial: {
      opacity: 0,
      y: screenWidth > 768 ? 300 : 150,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const leftSideFadeIn = {
    initial: {
      opacity: 0,
      x: screenWidth > 768 ? 300 : 150,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };
  const rightSideFadeIn = {
    initial: {
      opacity: 0,
      x: screenWidth > 768 ? -300 : -150,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <div className={classes.tours}>
      <h1 className={classes.heading}>Redevil Tours</h1>
      <p className={classes.text}>
        Old Trafford Stadium is the world-famous home of Manchester United. Join
        Our Redevil Tours and Visit the Stadium on a non-matchday and enjoy a
        behind the scenes Stadium Tour and get a delicious bite to eat in the
        Red Cafe.{" "}
      </p>

      <div className={classes.toursContainer}>
        <div className={classes.tour}>
          <motion.img
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", duration: 3 }}
            src="https://marriottnews.brightspotcdn.com/af/c3/78eca51f4508a97feae809ce1730/new-suite1-marriottbonvoy-suite-of-dreams.jpg"
            alt="VipTour"
            className={classes.image}
          />
          <motion.div
            variants={leftSideFadeIn}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", duration: 3 }}
            className={classes.paragraph}
          >
            <h1 className={classes.headingSecondary}>VIP Tours</h1>
            <p>
              Your very own private tour guide will escort you on a VIP tour
              experience with no other members of the public.
            </p>
            <p>The tour includes</p>
            <ul className={classes.lists}>
              <li className={classes.list}>
                A 1-hour private, exclusive guided tour of Stamford Bridge.
              </li>
              <li className={classes.list}>
                Minimum 2 persons per group (NB – Guests may attend on their own
                but must pay the cost of a second person).
              </li>
              <li className={classes.list}>
                Tour highlights include the Home and Away Dressing Rooms, Press
                Room, Player’s Tunnel and Pitch side.
              </li>
              <li className={classes.list}>
                Trophy photograph with Chelsea FC trophy collection (1 photo per
                person).
              </li>
              <li className={classes.list}>
                Delicious 2 course meal at Frankie’s Sports Bar and Grill at
                Stamford Bridge.
              </li>
              <li className={classes.list}>
                Access to Chelsea FC Museum before and/or after tour.
              </li>
            </ul>
            <Link to="/tickets" className={classes.link}>
              <button className={classes.button}>Tickets</button>
            </Link>
          </motion.div>
        </div>
        <div className={classes.tour}>
          <motion.div
            variants={rightSideFadeIn}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", duration: 3 }}
            className={classes.paragraph1}
          >
            <h1 className={classes.headingSecondary}>Look-ins</h1>
            <p className={classes.pargraphContext}>
              Want to visit Old Trafford but pushed for time? On set dates
              throughout the year, we will be running Stadium Look-Ins to allow
              fans to see inside the Theatre of Dreams in a shorter experience
              priced at just £23 for Adults and £15 for Concessions. The
              experience will be led by an experienced Tour Guide who can answer
              any questions that you might have about the club and the world
              famous Old Trafford stadium.
            </p>

            <Link to="/tickets" className={classes.link}>
              <button className={classes.button}>Tickets</button>
            </Link>
          </motion.div>
          <motion.img
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", duration: 3 }}
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Manchester_United_trophy_cabinet.jpg"
            alt="LookIn"
            className={classes.image}
          />
        </div>
        <div className={classes.tour}>
          <motion.img
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", duration: 3 }}
            src="https://pbs.twimg.com/media/F0MAg3KWcAIcS4u?format=jpg&name=large"
            alt="StudentTour"
            className={classes.image}
          />
          <motion.div
            variants={leftSideFadeIn}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", duration: 3 }}
            className={classes.paragraph1}
          >
            <h1 className={classes.headingSecondary}>Educational Tours</h1>
            <p className={classes.pargraphContext}>
              Old Trafford is the ideal place to hold your next school trip.
              With prices starting from just £7.50 per student, our
              award-winning Learning Experience provides a stimulating learning
              environment to bring subjects to life in a vibrant and exciting
              environment, with a range of workshops designed to complement your
              learning plans. Our unique programme can be tailored to your needs
              on a diverse range of subject areas.
            </p>

            <Link to="/tickets" className={classes.link}>
              <button className={classes.button}>Tickets</button>
            </Link>
          </motion.div>
        </div>
        <div className={`${classes.tour} ${classes.lastTour}`}>
          <motion.div
            variants={rightSideFadeIn}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", duration: 3 }}
            className={classes.paragraph1}
          >
            <h1 className={classes.headingSecondary}>Legend Tours</h1>
            <p className={classes.pargraphContext}>
              Tour Old Trafford in the company of iconic players and you will be
              transported back to the biggest victories and most precious club
              moments in the best way possible – through the words of those who
              lived, breathed and created them. A once in a lifetime experience,
              and a must for all dedicated fans.
            </p>

            <Link to="/tickets" className={classes.link}>
              <button className={classes.button}>Tickets</button>
            </Link>
          </motion.div>
          <motion.img
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            transition={{ type: "spring", duration: 3 }}
            src="https://assets.manutd.com/AssetPicker/images/0/0/19/81/1266103/f3671873_b2de_427e_988d_2552a7302d711698504996313_large.jpg"
            alt="LegendTour"
            className={classes.image}
          />
        </div>
      </div>
    </div>
  );
};

export default Tours;
