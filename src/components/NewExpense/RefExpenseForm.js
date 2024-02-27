import React, {useRef}from 'react'
import './RefExpenseForm.css'

//this is a practice of use ref in form instead of state
//dataInputRef is an object {current: }
//with ref, we only get input value when click submit, not every key stroke, code is cleaner, no need for onchangehandler, no need for useState
const RefExpenseForm = ({onSaveExpenseData}) => {
    const dataInputRef = useRef();
    const nameInputRef = useRef();
    const costInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        const enteredDate = dataInputRef.current.value;
        const enteredName = nameInputRef.current.value;
        const enteredCost = costInputRef.current.value;
        const expenseData = {
            date: new Date(enteredDate), name: enteredName, cost: enteredCost
        }

        onSaveExpenseData(expenseData);
        
        //clear input after form submission
        //not good to use opereate dom without react , but it is ok only for input
        dataInputRef.current.value = "";
        nameInputRef.current.value = "";
        costInputRef.current.value = "";

    }

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="dateinput">Expense Date: </label>
            <input type="date" id="dateinput" ref={dataInputRef}/>
            <label htmlFor="nameinput">Expense Item: </label>
            <input type="text" id="nameinput" ref={nameInputRef}/>
            <label htmlFor="costinput">Expenese Cost: </label>
            <input type="number" id="costinput" ref={costInputRef}/>
            <button>Submit</button>
        </form>
    )
}

export default RefExpenseForm;
