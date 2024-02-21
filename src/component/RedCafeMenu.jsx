import React from "react";
import classes from "./css/details.module.css";

import { motion } from "framer-motion";
const Menu = () => {
  const menu1 = [
    {
      title: "Hot Drinks",
      food: [
        { name: "Coffee", price: "€3" },
        { name: "Tea", price: "€3" },
        { name: "Hot Chocolate", price: "€3" },
      ],
    },
    {
      title: "Snacks",
      food: [
        { name: "Crisps", price: "€3" },
        { name: "Mars Duo", price: "€3" },
        { name: "Twix Xtra", price: "€3" },
      ],
    },
    {
      title: "GRAB BAGS",
      food: [
        { name: "Skittles", price: "€3" },
        { name: "Minstrels", price: "€3" },
        { name: "Maltesers", price: "€3" },
      ],
    },
  ];
  const menu2 = [
    {
      title: "Cold Drinks",
      food: [
        { name: "Singha", price: "€3" },
        { name: "Boddingtons", price: "€3" },
        { name: "Bulmers", price: "€3" },
        { name: "Coke,Diet,Fanta", price: "€3" },
        { name: "Water", price: "€3" },
      ],
    },
    {
      title: "Hot Food",
      food: [
        { name: "Meat & Potato Pie", price: "€3" },
        { name: "Chicken Balti Pie", price: "€3" },
        { name: "Pepppered Steak Pie", price: "€3" },
        { name: "Cheese & Potatop Pie", price: "€3" },
        { name: "Hot Dog", price: "€3" },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 1 }}
      className={classes.menu}
    >
      <h1 className={classes.header}>Menu</h1>
      <div className={classes.catogery}>
        <div className={classes.menu1Box}>
          {menu1.map((item) => (
            <div key={item.name} className={classes.eachItem}>
              <p className={classes.title}>{item.title}</p>
              <div>
                {item.food.map((f) => (
                  <div className={classes.details}>
                    <div className={classes.name}>{f.name}</div>
                    <div className={classes.price}>{f.price}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className={classes.menu2Box}>
          {menu2.map((item) => (
            <div key={item.name} className={classes.eachItem}>
              <p className={classes.title}>{item.title}</p>
              <div className={classes.itemBox}>
                {item.food.map((f) => (
                  <div className={classes.details}>
                    <div className={classes.name}>{f.name}</div>
                    <div className={classes.price}>{f.price}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default Menu;
