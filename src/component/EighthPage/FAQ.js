import React, { useState, useRef } from "react";
import classes from "./css/FAQ.module.css";
import shirt from "../../img/shirt.png";

const FAQ = () => {
  const [click, setClick] = useState(false);

  const questionArray = [
    {
      id: 1,
      Q: "CAN I TAKE PHOTOGRAPHS AND VIDEOS WHILE ON MY STADIUM TOUR?",
      A: "Yes, it's the best football club stadium in the world so you will have a number of photo opportunities while on your stadium tour – including the dressing room and dugouts. You are not able to take videos, but you can take as many photos as you wish!",
    },
    {
      id: 2,
      Q: "IS THERE A RESTAURANT OR CAFE AT OLD TRAFFORD?",
      A: "Yes, the Red Café, located inside the Sir Alex Ferguson Stand, is open to the public seven days a week – except matchdays – and offers varied breakfast and lunch menus, or why not include a dining experiences as part of your Museum & Stadium Tour visit",
    },
    {
      id: 3,
      Q: "WHAT SHOULD I DO IF I HAVE LOST OR LEFT AN ITEM AT OLD TRAFFORD?",
      A: "If you believe that you have lost an item in or around the Old Trafford stadium please contact lost property via email: lostproperty@manutd.co.uk or by telephone on +44 (0)161 676 7770. Lost property is open 9am to 5pm Monday to Friday.You should contact us as soon as you believe that you have lost an item in or around the stadium as we do not keep items that are found indefinitely.To claim an item you will need to provide identification and some evidence of ownership.",
    },
    {
      id: 4,
      Q: "CAN I ARRANGE A BIRTHDAY PARTY OR OTHER SPECIAL OCCASION CELEBRATION AT OLD TRAFFORD?",
      A: "For information on children’s parties in the Red Café, please call +44 161 676 7770 and a member of staff will be happy to assist you.",
    },
    {
      id: 5,
      Q: "CAN I BRING A LARGE GROUP OR SCHOOL BOOKING TO THE MUSEUM & TOUR CENTRE?",
      A: "Yes, you can bring a large group or school booking. For more information, visit Tour section or call +44 161 676 7770.",
    },
    {
      id: 6,
      Q: "IS THERE A MUSEUM AND STADIUM TOUR? IF SO, HOW MUCH DOES IT COST AND WHAT DOES IT CONSIST OF?",
      A: "Yes, Manchester United has award-winning Museum & Stadium Tour experiences. For more information on the various tour types, prices and our opening times, visit About section.",
    },
    {
      id: 7,
      Q: "WHAT ARE THE OPENING TIMES OF THE MUSEUM & TOUR CENTRE?",
      A: "For our most up-to-date opening times, visit the About section or call +44 161 676 7770.",
    },
  ];

  const clickHandler = (e) => {
    const id = +e.target.id;
    setClick(id);
  };

  return (
    <div id="FAQs" className={classes.section}>
      <p className={classes.text}>FAQs</p>

      <div className={classes.qSection}>
        <div className={classes.shirtSection}>
          <img src={shirt} alt="shirt" className={classes.shirt} />
          <p className={classes.qMark}>?</p>
        </div>
        <div className={classes.questionSection}>
          <ul className={classes.questionList}>
            {questionArray.map((question) => (
              <li
                key={question.id}
                id={question.id}
                onClick={clickHandler}
                className={classes.question}
              >
                {question.Q}
                <span className={classes.plus}>
                  {click === question.id ? "x" : "+"}
                </span>
                {click === question.id && (
                  <div className={classes.answer}>{question.A}</div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
