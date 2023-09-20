import React from "react";
import classes from "./css/AvailableTickets.module.css";
import LTImage from "../FifthPage/img/Legend1.png";
import VIPImage from "../FifthPage/img/VIP.jpg";
import STImage from "../FifthPage/img/ST1.jpg";
import LKImage from "../FifthPage/img/LK.jpg";
import ButtonWhite from "../../UI/ButtonWhite";
import { Link } from "react-router-dom";
import Oldtrafford from "../../img/alex_ferguson_signed_lego_pitch_piece_-_stadium_2.png";

const AvailableTickets = () => {
  const ticketArray = [
    { img: LTImage, title: "Legend Tour", number: 1 },
    { img: VIPImage, title: "VIP Tour", number: 2 },
    { img: STImage, title: "School Trip", number: 2 },
    { img: LKImage, title: "Look-ins", number: 4 },
  ];

  return (
    <div className={classes.page}>
      <div className={classes.ticketContainer}>
        <h1 className={classes.heading}>
          Available Tickets
          <span className={classes.text}>(for selected day)</span>{" "}
        </h1>

        <ul className={classes.ticketBox}>
          {ticketArray.map((ticket) => (
            <Link
              key={ticket.title}
              to="/AvailableTour/Payment"
              className={classes.book}
            >
              <li className={classes.ticket}>
                <img
                  className={classes.img}
                  src={ticket.img}
                  alt={ticket.title}
                />
                <p>{ticket.title}</p>
                <p className={classes.ticketNo}>{ticket.number}</p>
              </li>
            </Link>
          ))}
        </ul>
        <ButtonWhite className={classes.btn}>
          <Link to="../" relative="path" className={classes.link}>
            Cancel
          </Link>
        </ButtonWhite>
      </div>
      <img
        src={Oldtrafford}
        alt="Old trafford"
        className={classes.oldTrafford}
      />
    </div>
  );
};

export default AvailableTickets;
