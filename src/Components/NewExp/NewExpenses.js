import React from "react";
import NewExpense from "./NewExpense";

const NewExpenses = () => {
  const saveExpenseDataHandler = (data) => {
    const enteredExpenseData = {
      ...data,
      id: Math.random().toString(),
    };

    console.log(enteredExpenseData);
  };
  return (
    <div className="new-expenses">
      <NewExpense onSaveExpenseData={saveExpenseDataHandler}></NewExpense>
    </div>
  );
};

export default NewExpenses;
