import React, {useState} from "react";

import "./Expenses.css";

import Card from "../UI/Card";
import "../UI/Card";

import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'


function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState("2020")

  const updatedFilteredYear = selectedYear => {
    setFilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })


  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          onUpdatedFilteredYear={updatedFilteredYear}
          selected={filteredYear} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
        
    </Card>
    </li>
  );
}

export default Expenses;
