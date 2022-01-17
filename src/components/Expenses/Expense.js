import React, {useState} from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

import Card from "../UI/Card";
import "../UI/Card";

import ExpensesFilter from './ExpensesFilter'


function Expenses(props) {

  const [selectedYear, setSelectedYear] = useState('2020')

  const updatedFilteredYear = selectedYear => {
    setSelectedYear(selectedYear, "Expense.js")
  }


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onUpdatedFilteredYear={updatedFilteredYear} selected={selectedYear} />
        {props.items.map((expense) => (
          <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />
  ))};
    </Card>
    </div>
  );
}
      

export default Expenses;
