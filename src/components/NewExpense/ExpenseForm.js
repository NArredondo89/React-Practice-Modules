import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  // const [enteredTitle, setEnteredTitle] = "";
  // const [enteredAmount, setEnteredAmount] = "";
  // const [enteredDate, setEnteredDate] = "";

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandles = (event) => {
    // setEnteredTitle(event.target.value);
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };
  const amountChangeHandles = (event) => {
    setEnteredAmount(event.target.value);
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };
  const dateChangeHandles = (event) => {
    // setEnteredDate(event.target.value);
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };

  return (
    <form>
      <div className="new-expense__controls"></div>
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" onChange={titleChangeHandles} value={userInput} />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          onChange={amountChangeHandles}
          value={userInput}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          onChange={dateChangeHandles}
          value={userInput}
        />
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
