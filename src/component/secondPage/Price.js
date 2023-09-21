import React from "react";
import classes from "./css/Information.module.css";

import PriceTag from "../../UI/PriceTag";

const Price = () => {
  return (
    <div className={classes.details}>
      <PriceTag className={classes.icon} />
      <h6 className={classes.heading}>Price: </h6>
      <p className={classes.textTop}>
        <span>Junior-from £ 15 , Adult - from £ 28</span>
        <span>
          Walk up prices arre higher than Online prices, <br /> so be sure to
          book online for the best proice
        </span>
      </p>
    </div>
  );
};

export default Price;
