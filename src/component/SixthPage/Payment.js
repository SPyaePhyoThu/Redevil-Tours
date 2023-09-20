import React from "react";
import classes from "./css/Payement.module.css";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <div className={classes.page}>
      <div className={classes.box}>
        <form className={classes.paymentInfo}>
          <h1 className={classes.heading}>Payment</h1>
          <input
            type="text"
            className={classes.input}
            placeholder="Card Number"
          />
          <input
            type="text"
            className={classes.input}
            placeholder="Card Owner Name"
          />
          <input type="email" className={classes.input} placeholder="E-mail" />

          <div className={classes.smallBoxes}>
            <input
              type="text"
              placeholder="Expires"
              className={classes.smallInput1}
            />
            <input
              type="text"
              placeholder="CVC"
              className={classes.smallInput2}
            />
          </div>
          <div className={classes.btn}>
            <button className={classes.payNow}>
              <Link to="../" relative="route" className={classes.link2}>
                Pay Now
              </Link>
            </button>
            <button className={classes.cancel}>
              {" "}
              <Link to="../" relative="path" className={classes.link}>
                Cancel
              </Link>
            </button>
          </div>
        </form>
        <div className={classes.colorBox}></div>
      </div>
    </div>
  );
};

export default Payment;
