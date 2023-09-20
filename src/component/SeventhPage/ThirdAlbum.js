import React from "react";
import classes from "./css/ThirdAlbum.module.css";
import Rashford from "./img/3album/Rashford.jpg";
import RashfordT from "./img/3album/RashfordT.jpg";
import Toone from "./img/3album/Toone.jpg";
import TooneT from "./img/3album/TooneT.jpg";
import Martinez from "./img/3album/Martinez.jpg";
import MartinezT from "./img/3album/MartinezT.webp";

const ThirdAlbum = () => {
  return (
    <div className={classes.container}>
      <img src={Toone} className={classes.img} />
      <img src={Rashford} className={classes.img} />
      <img src={Martinez} className={classes.img} />
      <img src={TooneT} className={classes.img} />
      <img src={RashfordT} className={classes.img} />
      <img src={MartinezT} className={classes.img} />
    </div>
  );
};
export default ThirdAlbum;
