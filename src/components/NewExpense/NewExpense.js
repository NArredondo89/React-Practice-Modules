import React, {useState} from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {

  const [form, setForm] = useState(false)



  const saveExpenseDataHandler = (enteredExpenseData) => {
    console.log(enteredExpenseData, "New Expense.js");
    
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random.toString()
    }
    props.onAddExpense(expenseData)
    setForm(false)



  }

  const addNewExpenseHandleChange = () => {
    setForm(true)
  }

  const stopNewExpenseHandleChange = () => {
    setForm(false)
  }

  return (
    <div className="new-expense">
      {!form && <button onClick={addNewExpenseHandleChange}>Add New Expense</button> }
      {form && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelButtonSubmit={stopNewExpenseHandleChange} />}
    </div>
  );
}

export default NewExpense;
