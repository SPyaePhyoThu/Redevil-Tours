import React, { useState } from "react";
import classes from "./css/FAQ.module.css";
import shirt from "../assets/image/shirt.png";

const FAQ = () => {
  const [click, setClick] = useState(false);

  const questionArray = [
    {
      id: 1,
      Q: "Can i take photographs and videos while on my stadium tour?",
      A: "Yes, it's the best football club stadium in the world so you will have a number of photo opportunities while on your stadium tour – including the dressing room and dugouts. You are not able to take videos, but you can take as many photos as you wish!",
    },
    {
      id: 2,
      Q: "Is there a restaurant or cafe at old trafford?",
      A: "Yes, the Red Café, located inside the Sir Alex Ferguson Stand, is open to the public seven days a week – except matchdays – and offers varied breakfast and lunch menus, or why not include a dining experiences as part of your Museum & Stadium Tour visit",
    },
    {
      id: 3,
      Q: "What should i do if i have lost or left an item at old trafford?",
      A: "If you believe that you have lost an item in or around the Old Trafford stadium please contact lost property via email: lostproperty@manutd.co.uk or by telephone on +44 (0)161 676 7770. Lost property is open 9am to 5pm Monday to Friday.You should contact us as soon as you believe that you have lost an item in or around the stadium as we do not keep items that are found indefinitely.To claim an item you will need to provide identification and some evidence of ownership.",
    },
    {
      id: 4,
      Q: "Can i arrange a birthday party or other special occasion celebration at old trafford?",
      A: "For information on children’s parties in the Red Café, please call +44 161 676 7770 and a member of staff will be happy to assist you.",
    },
    {
      id: 5,
      Q: "Can i bring a large group or school booking to the museum & tour centre?",
      A: "Yes, you can bring a large group or school booking. For more information, visit Tour section or call +44 161 676 7770.",
    },
    {
      id: 6,
      Q: "Is there a museum and stadium tour? if so, how much does it cost and what does it consist of?",
      A: "Yes, Manchester United has award-winning Museum & Stadium Tour experiences. For more information on the various tour types, prices and our opening times, visit About section.",
    },
    {
      id: 7,
      Q: "What are the opening times of the museum & tour centre?",
      A: "For our most up-to-date opening times, visit the About section or call +44 161 676 7770.",
    },
  ];

  const clickHandler = (e) => {
    const id = +e.target.id;
    setClick(id);
  };

  return (
    <div id="FAQs" className={classes.section}>
      <p className={classes.heading}>FAQs</p>

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
                  {click === question.id ? "✖" : "+"}
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
