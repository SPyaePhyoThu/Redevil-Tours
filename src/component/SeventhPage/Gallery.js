import React, { useState } from "react";
import classes from "./css/Gallery.module.css";
import FirstAlbum from "./FirstAlbum";
import SecondAlbum from "./SecondAlbum";
import ThirdAlbum from "./ThirdAlbum";

const Gallery = () => {
  const [page, setPage] = useState(1);

  const nextHandler = () => {
    if (page === 3) {
      setPage(1);
    } else {
      setPage((prevpage) => prevpage + 1);
    }
  };
  const prevHandler = () => {
    if (page === 1) {
      setPage(3);
    } else {
      setPage((prevpage) => prevpage - 1);
    }
  };

  let color;
  if (page === 1) {
    color = "#9F0505";
  } else if (page === 2) {
    color = "greenyellow";
  } else {
    color = "#fce6b7";
  }

  return (
    <div id="Albums" className={classes.gallery}>
      <p
        onClick={prevHandler}
        className={classes.btn1}
        style={{ color: color }}
      >
        &#10148;
      </p>
      <div className={classes.album}>
        {page === 1 && <FirstAlbum />}
        {page === 2 && <SecondAlbum />}
        {page === 3 && <ThirdAlbum />}
      </div>
      <p
        onClick={nextHandler}
        className={classes.btn2}
        style={{ color: color }}
      >
        &#10148;
      </p>
    </div>
  );
};

export default Gallery;
