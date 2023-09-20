import React from "react";
import classes from "./css/Footer.module.css";
import Facebook from "../../UI/Facebook";
import Instagram from "../../UI/Instagram";
import Twitter from "../../UI/Twitter";

const Footer = () => {
  return (
    <div id="ContactUs" className={classes.footer}>
      <h1 className={classes.united}>United.</h1>
      <div className={classes.columnSection}>
        <div className={classes.firstColumn}>
          <p>Contact Us</p>
          <p>Phone :+44 161 676 7770</p>
          <p>Email : tour.enquiries@manutd.co.uk</p>
        </div>
        <div className={classes.secondColumn}>
          <a href="#TourTickets" className={classes.links}>
            Tours
          </a>
          <a href="#TourTickets" className={classes.links}>
            Buy Tickets
          </a>
        </div>
        <a href="#About" className={classes.links}>
          About
        </a>
      </div>
      <div className={classes.icon}>
        <a href="https://www.facebook.com/manchesterunited/">
          <Facebook />
        </a>
        <a href="https://www.instagram.com/manchesterunited/">
          <Instagram />
        </a>
        <a href="https://twitter.com/ManUtd">
          <Twitter />
        </a>
      </div>
      <p className={classes.copyright}>©2023 Redevil . All right reserved</p>
    </div>
  );
};
export default Footer;
