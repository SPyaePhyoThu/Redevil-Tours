import React from "react";
import HeaderPage from "./component/FirstPage/HeaderPage";
import About from "./component/secondPage/About";
import RedCafe from "./component/FourthPage/RedCafe";
import Gallery from "./component/SeventhPage/Gallery";
import FAQ from "./component/EighthPage/FAQ";
import QuoteSection from "./component/ThirdPage/QuoteSection";
import BuyTicketPage from "./component/SixthPage/TourTicketPage";
const HomePage = () => {
  return (
    <div>
      <HeaderPage />
      <About />
      <RedCafe />
      <QuoteSection />
      <BuyTicketPage />
      <Gallery />
      <FAQ />
    </div>
  );
};

export default HomePage;
