import React from "react";
import classes from "./css/FirstAlbum.module.css";
import group from "./img/1album/Group.jpg";
import group2 from "./img/1album/Group2.jpg";
import wilson from "./img/1album/wilson.jpg";
import blind from "./img/1album/Blind.jpg";
import shaw from "./img/1album/Shaw.jpg";
import herrea from "./img/1album/herrea.jpg";
import S from "./img/1album/S.webp";
import Young from "./img/1album/Young.jpg";
import { motion } from "framer-motion";

const FirstAlbum = () => {
  const photoArray = [
    { src: group, figClass: classes.image1 },
    { src: group2, figClass: classes.image8 },
    { src: wilson, figClass: classes.image2 },
    { src: blind, figClass: classes.image3 },
    { src: shaw, figClass: classes.image4 },
    { src: herrea, figClass: classes.image5 },
    { src: S, figClass: classes.image6 },
    { src: Young, figClass: classes.image7 },
  ];

  return (
    <div className={classes.container}>
      {photoArray.map((photo) => (
        <motion.figure
          key={photo.src}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2, duration: 2 }}
          className={`${classes.img} ${photo.figClass}`}
        >
          <img src={photo.src} alt="Red Devils" className={classes.image} />
        </motion.figure>
      ))}
    </div>
  );
};
export default FirstAlbum;
