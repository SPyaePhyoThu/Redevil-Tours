import React, { useEffect, useState } from "react";
import QuoteContext from "./quote-context";
import xavi from "../component/ThirdPage/images/xavi.jpg";
import rojo from "../component/ThirdPage/images/rojo.jpg";
import jose from "../component/ThirdPage/images/jose.jpg";
import evra from "../component/ThirdPage/images/evra.jpg";
import Louis from "../component/ThirdPage/images/Louis.jpg";
import CR7 from "../component/ThirdPage/images/CR7.jpg";
import Db from "../component/ThirdPage/images/Db.jpg";

const QuoteProvider = (props) => {
  const [filteredArray, setFilteredArray] = useState([
    {
      id: 1,
      img: xavi,
      name: "Xavi Hernandez",
      occupation: "Football Manager",
      quote:
        " Favorite Stadium? I have good memories of my CL debut at Old Trafford,spectacular atmosphere. The Theatre of Dreams as they say.",
    },
  ]);

  const [quoteArray, setQuoteArray] = useState([
    {
      id: 1,
      img: xavi,
      name: "Xavi Hernandez",
      occupation: "Football Manager",
      quote:
        " Favorite Stadium? I have good memories of my CL debut at Old Trafford,spectacular atmosphere. The Theatre of Dreams as they say.",
    },
    {
      id: 2,
      img: rojo,
      name: "Marcos Rojo",
      occupation: "Football Player",
      quote:
        " I have played in many stadia around the  world but the atmosphere when you come out of the tunnel at Old Trafford is like nothing I’ve ever experienced before at any of my former club .",
    },
    {
      id: 3,
      img: jose,
      name: "Jose Mourinho",
      occupation: "Football Manager",
      quote:
        " Old Trafford is a Phenomenal Place to play football. I have been here so many times and i always love it.",
    },
    {
      id: 4,
      img: evra,
      name: "Patrice Evra",
      occupation: "Football Player",
      quote:
        " I know the city and the club , and I can say that when you play for Manchester United at Old Trafford, you no longer need to see the sunshine every day.",
    },
    {
      id: 5,
      img: Louis,
      name: "Louis Van Gaal",
      occupation: "Football Manager",
      quote:
        " I have managed in games at Old Trafford before and know what an incredible arena Old Trafford is .",
    },
    {
      id: 6,
      img: CR7,
      name: "Cristiano Ronaldo",
      occupation: "Football Player",
      quote:
        " I spent six years at United and I owe them everything that i am today.I made history at United and won many trophies . It was a pleasure to play at Old Trafford.",
    },
    {
      id: 7,
      img: Db,
      name: "Demian Bichir",
      occupation: "HollyWood Star",
      quote:
        "One of my dreams is to become sufficiently famous that i can play this charity match that happens every year or two with celebrities at Old Trafford, at the house of Manchester United.",
    },
    {
      id: 8,
      img: rojo,
      name: "Marcos Rojo",
      occupation: "Football Player",
      quote:
        " I have played in many stadia around the  world but the atmosphere when you come out of the tunnel at Old Trafford is like nothing I’ve ever experienced before at any of my former club .",
    },
    {
      id: 9,
      img: rojo,
      name: "Marcos Rojo",
      occupation: "Football Player",
      quote:
        " I have played in many stadia around the  world but the atmosphere when you come out of the tunnel at Old Trafford is like nothing I’ve ever experienced before at any of my former club .",
    },
  ]);

  const clickHandler = (id) => {
    const item = quoteArray.filter((quote) => quote.id === +id);
    setFilteredArray(item);
  };
  const nextHandler = () => {
    const newId = filteredArray[0].id === 9 ? 1 : filteredArray[0].id + 1;
    const item = quoteArray.filter((quote) => quote.id === newId);
    setFilteredArray(item);
  };

  const quoteContext = {
    allItems: quoteArray,
    item: filteredArray,
    clickHandler,
    nextHandler,
  };

  return (
    <QuoteContext.Provider value={quoteContext}>
      {props.children}
    </QuoteContext.Provider>
  );
};

export default QuoteProvider;
