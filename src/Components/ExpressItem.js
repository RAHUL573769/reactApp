import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpressItem.css";

const ExpressItem = (props) => {
  // console.log(props);\
  // const month = props.date.toLocaleString("en-US", {
  //   month: "long",
  // });
  // const day = props.date.toLocaleString("en-US", {
  //   day: "2-digit",
  // });
  // const year = props.date.getFullYear();
  const [title, setTitle] = useState(props.title);

  const handleButton = () => {
    setTitle("Updated");
    console.log(title);
  };
  return (
    <div className="expense-item">
      {/* <div>
        <div>{month}</div>

        <div>{day}</div>

        <div>{year}</div>
      </div> */}

      <ExpenseDate date={props.date}></ExpenseDate>
      <div>
        {props.date.toLocaleString("en-US", {
          month: "long",
        })}
      </div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <h2>{title}</h2>{" "}
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={handleButton}>Change Tile</button>
    </div>
  );
};

export default ExpressItem;
