import React from "react";
import classes from "./css/RedCafe.module.css";
import CoffeeCup from "../../UI/CoffeCup";

import Container from "./Container";

const RedCafe = () => {
  return (
    <div id="RedCafe" className={classes.redCafe}>
      <h2>
        <CoffeeCup /> Red Cafe
      </h2>
      <Container />
    </div>
  );
};
export default RedCafe;
