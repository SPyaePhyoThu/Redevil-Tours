import React, { useState } from "react";
import classes from "./css/TourPage.module.css";
import LegendTour from "./Tours/LegendTour";
import { useParams } from "react-router-dom";
import VIPTours from "./Tours/VIPTours";
import LookIns from "./Tours/Look-ins";
import SchoolTrips from "./Tours/SchoolTrips";

const TourPage = () => {
  const params = useParams();
  console.log(params);
  let content;
  switch (params.tourId) {
    case "LegendTour":
      content = <LegendTour />;
      break;
    case "VIPTour":
      content = <VIPTours />;
      break;
    case "Look-ins":
      content = <LookIns />;
      break;
    case "SchoolTrip":
      content = <SchoolTrips />;
      break;
  }

  return <div className={classes.tourPage}>{content}</div>;
};

export default TourPage;
