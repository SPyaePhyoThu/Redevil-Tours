import React from "react";
import classes from "./css/SecondAlbum.module.css";
import CR7 from "./img/2album/CR7.webp";
import Bruno from "./img/2album/Bruno.jpg";
import Tominey from "./img/2album/Tominey.jpg";
import Toone from "./img/2album/Toone.jpg";
import FemalePlayer from "./img/2album/FemalePlayer.jpg";
import hannibal from "./img/2album/hannibal.png";
import maleDuel from "./img/2album/maleDuel.jpg";
import Russo from "./img/2album/Russo.png";
import Duet from "./img/2album/Duel.jpg";
import Sancho from "./img/2album/Sancho.jpg";
import Iceman from "./img/2album/Iceman.png";
import Fred from "./img/2album/Fred.jpg";

import { motion } from "framer-motion";

const SecondAlbum = () => {
  const playerArray = [
    {
      src: CR7,
      aClass: "slideList1",
      id: "slide1",
      figClass1: "slideList",
      figClass2: classes.slideList13,
    },
    {
      src: Bruno,
      aClass: "slideList2",
      id: "slide2",
      figClass1: "slideList",
      figClass2: classes.slideList14,
    },
    {
      src: Tominey,
      aClass: "slideList3",
      id: "slide3",
      figClass1: "slideList",
      figClass2: classes.slideList15,
    },
    {
      src: Toone,
      aClass: "slideList4",
      id: "slide4",
      figClass1: "slideList",
      figClass2: classes.slideList16,
    },
    {
      src: FemalePlayer,
      aClass: "slideList5",
      id: "slide5",
      figClass1: "slideList",
      figClass2: classes.slideList17,
    },
    {
      src: hannibal,
      aClass: "slideList6",
      id: "slide6",
      figClass1: "slideList",
      figClass2: classes.slideList18,
    },
    {
      src: maleDuel,
      aClass: "slideList7",
      id: "slide7",
      figClass1: "slideList",
      figClass2: classes.slideList19,
    },
    {
      src: Russo,
      aClass: "slideList8",
      id: "slide8",
      imgClass: "slideImage",
      figClass1: "slideList",
      figClass2: classes.slideList20,
    },
    {
      src: Duet,
      aClass: "slideList9",
      id: "slide9",
      figClass1: "slideList",
      figClass2: classes.slideList21,
    },
    {
      src: Sancho,
      aClass: "slideList10",
      id: "slide10",
      figClass1: "slideList",
      figClass2: classes.slideList22,
    },
    {
      src: Iceman,
      aClass: "slideList11",
      id: "slide11",
      figClass1: "slideList",
      figClass2: classes.slideList23,
    },
    {
      src: Fred,
      aClass: "slideList12",
      id: "slide12",
      figClass1: "slideList",
      figClass2: classes.slideList24,
    },
  ];

  return (
    <div className={classes.container}>
      {playerArray.map((player) => (
        <motion.a
          key={player.id}
          initial={{ skew: 40 }}
          whileInView={{ skew: 0 }}
          transition={{ type: "spring", delay: 0.2, duration: 2 }}
          href={`#${player.id}`}
          className={`classes.${player.aClass}`}
        >
          <img src={player.src} alt="" className={classes.slideImage} />
        </motion.a>
      ))}

      {playerArray.map((player) => (
        <figure
          key={player.id}
          id={player.id}
          className={` ${classes.slideList} ${player.figClass2}`}
        >
          <img src={player.src} alt="" className={classes.slideImage} />
        </figure>
      ))}
    </div>
  );
};
export default SecondAlbum;
