import React, { useState } from "react";
import Football from "../../UI/SmallFootball";
import classes from "./css/Menu.module.css";
import Modal from "../../UI/Modal";
import Fred from "./img/FredTheRed.png";

const Menu = (props) => {
  const [click, setClick] = useState(null);

  const menuItems = [{ id: "About" }, { id: "RedCafe" }, { id: "Quote" }];
  const menuItems2 = [{ id: "Albums" }, { id: "FAQs" }, { id: "ContactUs" }];

  return (
    <Modal onClose={props.onClose} className={classes.menu}>
      <div className={classes.cross} onClick={props.onClose}></div>
      <div key="column1" className={classes.menuItem}>
        {menuItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={props.onClose}
            className={classes.menuList}
          >
            <Football className={classes.ball} />
            {item.id}
          </a>
        ))}
      </div>
      <div key="column2" className={classes.menuItem}>
        {menuItems2.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={props.onClose}
            className={classes.menuList}
          >
            <Football className={classes.ball} />
            {item.id}
          </a>
        ))}
      </div>

      <div className={classes.container}>
        <h1 className={classes.text}>Welcome</h1>
        <div className={classes.fredBox}>
          <img src={Fred} alt="Fred the Red" className={classes.fred} />
        </div>
      </div>
    </Modal>
  );
};
export default Menu;
