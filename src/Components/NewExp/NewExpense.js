import React, { useState } from "react";
import "./NewExpense.css";

const NewExpense = (props) => {
  console.log(props);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEntered] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const handleTitle = (event) => {
    // console.log("Title Changed");

    setEnteredTitle(event.target.value);
  };

  const handleAmount = (event) => {
    setEntered(event.target.value);
  };
  const handleDate = (event) => {
    setEnteredDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };

    // console.log(expenseDate);
    props.onSaveExpenseData(expenseDate);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action="
        "
      >
        <div className="new-expense__controls">
          <div className="new-expense_control">
            <label htmlFor="">Title</label>
            <input onChange={handleTitle} type="text" name="" id="" />
          </div>
          <div className="new-expense__controls">
            <label htmlFor="">Amount</label>
            <input onChange={handleAmount} type="text" name="" id="" />
          </div>

          <div className="new-expense__controls">
            <label htmlFor="">Date</label>
            <input
              onChange={handleDate}
              type="date"
              min="2019-01-01"
              max="2022-12-01"
              name=""
              id=""
            />
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewExpense;
