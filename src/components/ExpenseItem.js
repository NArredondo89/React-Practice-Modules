import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const id = props.id;
  const title = props.title;
  const amount = props.amount;
  const date = props.date;

  return (
    <div key={id} className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description"></div>
      <h2>{title}</h2>
      <div className="expense-item__price">{amount}</div>
    </div>
  );
}

export default ExpenseItem;
