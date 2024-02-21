import React from "react";
import HeroPage from "../component/HeroPage";
import About from "../component/About";
import RedCafe from "../component/RedCafe";
import FAQ from "../component/FAQ";
import QuoteSection from "../component/QuoteSection";
import TicketAndTour from "../component/TicketAndTour";
import classes from "./css/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={classes.homePage}>
      <HeroPage />
      <About />
      <RedCafe />
      <QuoteSection />
      <TicketAndTour />
      <FAQ />
    </div>
  );
};

export default HomePage;
