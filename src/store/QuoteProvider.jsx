import React, { useState } from "react";
import QuoteContext from "./quote-context";

const QuoteProvider = (props) => {
  const [filteredArray, setFilteredArray] = useState([
    {
      id: 1,
      img: "https://images2.alphacoders.com/117/1174878.jpg",
      name: "Xavi Hernandez",
      occupation: "Football Manager",
      quote:
        " Favorite Stadium? I have good memories of my CL debut at Old Trafford,spectacular atmosphere. The Theatre of Dreams as they say.",
    },
  ]);

  const [quoteArray, setQuoteArray] = useState([
    {
      id: 1,
      img: "https://images2.alphacoders.com/117/1174878.jpg",
      name: "Xavi Hernandez",
      occupation: "Football Manager",
      quote:
        " Favorite Stadium? I have good memories of my CL debut at Old Trafford,spectacular atmosphere. The Theatre of Dreams as they say.",
    },
    {
      id: 2,
      img: "https://wallpapercave.com/wp/wp1951246.jpg",
      name: "Marcos Rojo",
      occupation: "Football Player",
      quote:
        " I have played in many stadia around the  world but the atmosphere when you come out of the tunnel at Old Trafford is like nothing I’ve ever experienced before at any of my former club .",
    },
    {
      id: 3,
      img: "https://media.asroma.com/prod/images/landscape_medium_fill/b7c6d8262c9b-card-jm.png",
      name: "Jose Mourinho",
      occupation: "Football Manager",
      quote:
        " Old Trafford is a Phenomenal Place to play football. I have been here so many times and i always love it.",
    },
    {
      id: 4,
      img: "https://i0.wp.com/thesefootballtimes.co/wp-content/uploads/2017/05/evra.jpg?fit=1600%2C1059&ssl=1",
      name: "Patrice Evra",
      occupation: "Football Player",
      quote:
        " I know the city and the club , and I can say that when you play for Manchester United at Old Trafford, you no longer need to see the sunshine every day.",
    },
    {
      id: 5,
      img: "https://cdn.vox-cdn.com/thumbor/ABhfudt3Ictst5TudDnzAJsCqiw=/0x0:599x399/1200x800/filters:focal(0x0:599x399)/cdn.vox-cdn.com/uploads/chorus_image/image/33061037/GYI0063629203.0.jpg",
      name: "Louis Van Gaal",
      occupation: "Football Manager",
      quote:
        " I have managed in games at Old Trafford before and know what an incredible arena Old Trafford is .",
    },
    {
      id: 6,
      img: "https://s.yimg.com/ny/api/res/1.2/qGH1BuC4CwackFUsE6NhOA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/men_s_journal_718/27639d9456581a6f199144ce263dae12",
      name: "Cristiano Ronaldo",
      occupation: "Football Player",
      quote:
        " I spent six years at United and I owe them everything that i am today.I made history at United and won many trophies . It was a pleasure to play at Old Trafford.",
    },
    {
      id: 7,
      img: "https://images.squarespace-cdn.com/content/v1/57cf2f5437c581cd57255b3c/1473196522421-TUIADF3XU1S4UTQYBO3V/Demian-Bichir.jpg",
      name: "Demian Bichir",
      occupation: "HollyWood Star",
      quote:
        "One of my dreams is to become sufficiently famous that i can play this charity match that happens every year or two with celebrities at Old Trafford, at the house of Manchester United.",
    },
    {
      id: 8,
      img: "https://wallpapercave.com/wp/wp1951246.jpg",
      name: "Marcos Rojo",
      occupation: "Football Player",
      quote:
        " I have played in many stadia around the  world but the atmosphere when you come out of the tunnel at Old Trafford is like nothing I’ve ever experienced before at any of my former club .",
    },
    {
      id: 9,
      img: "https://wallpapercave.com/wp/wp1951246.jpg",
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
