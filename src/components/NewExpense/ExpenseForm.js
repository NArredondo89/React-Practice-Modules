import React, { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props) {

 
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    // const [userInput, setUserInput] = useState({
    //   enteredTitle: "",
    //   enteredAmount: "",
    //   enteredDate: "",
    // });
  
  
  const titleChangeHandles = (event) => {
      setEnteredTitle(event.target.value)
      
        // setUserInput((prevState) => {
        //   return { ...prevState, enteredTitle: event.target.value };
        // });
    }
    const amountChangeHandles = (event) => {
        setEnteredAmount(event.target.value)
        // setUserInput((prevState) => {
        //   return { ...prevState, enteredAmount: event.target.value };
        // });
    }
    const dateChangeHandles = (event) => {
        setEnteredDate(event.target.value)
        // setUserInput((prevState) => {
        //   return { ...prevState, enteredDate: event.target.value };
        // });
        //added
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
          };
      props.onSaveExpenseData(expenseData)

      setEnteredTitle('')
      setEnteredAmount('')
      setEnteredDate('')
    }

    return (
    
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input
                    type="text"
                    value={enteredTitle}
                    onChange={titleChangeHandles}
                />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={enteredAmount}
                    onChange={amountChangeHandles}
                />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input
                    type="date"
                    min="2019-01-01"
                    max="2022-12-31"
                    value={enteredDate}
                    onChange={dateChangeHandles}
                />
            </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.cancelButtonSubmit}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
