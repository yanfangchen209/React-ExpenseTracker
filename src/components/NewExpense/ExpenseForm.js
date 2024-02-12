import React, { useState } from 'react'


const ExpenseForm = (props) => {
    /* method 1(the best) and 3 is prefered because it is more commonly used and in method2, 
    state update depends on previous state, but as React schedules to update, we might got
    outdated previous state. while method 3 use functional form, always ensure get the lastest state snapshot
    */
    //method 1: use multiple states

    const [enteredDate, setEnteredDate] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredCost, setEnteredCost] = useState('');
    
    //method1： individula change handler
    
    function dateChangeHandler(event){
        setEnteredDate(event.target.value);
    }

    function nameChangeHandler(event){
        setEnteredName(event.target.value);

    }

    function costChangeHandler(event){
        setEnteredCost(event.target.value);
    }

    //method 2: shared changehandler
/*
    function inputChangeHandler(identifier, value){
        if(identifier === "date"){
            setEnteredDate(value);
        }else if(identifier === "name"){
            setEnteredName(value);
        }else if(identifier === "cost"){
            setEnteredCost(value);
        }

    }

    return (
        <form>
            <div>
                <label htmlFor="date">Date:</label>
                <input id="date" type="date" onChange={(event) => inputChangeHandler("date", event.target.value)}/>
            </div>
            <div>
                <label htmlFor="name">Expense Name:</label>
                <input id="name" type="text" onChange={(event) => inputChangeHandler("name", event.target.value)}/>
            </div>
            <div>
                 <label htmlFor="cost">Cost:</label>
                <input id="cost" type="number" onChange={(event) => inputChangeHandler("cost", event.target.value)}/>
            </div>
            <div>
                <button>Add Expense</button>
            </div>
        </form>
      )
*/

    

    //method2 : use one state with object 
    /*
    const [userInput, setUserInput] = useState({
        enteredDate: "",
        enteredName: "",
        enteredCost: ""
    })

    function dateChangeHandler(event){
        setUserInput(
            {...userInput, enteredDate: event.target.value}
        );
    }

    function nameChangeHandler(event){
        setUserInput(
            {...userInput, enteredName: event.target.value}
        );
    }

    function costChangeHandler(event){
        setUserInput(
            {...userInput, enteredCost: event.target.value}
        );
    }
    */

    //method3 : use functional form
    /*
    const [userInput, setUserInput] = useState({
        enteredDate: "",
        enteredName: "",
        enteredCost: ""
    })
    function dateChangeHandler(event){
        setUserInput((prevState) => {
            return {...prevState, enteredDate: event.target.value}
        });
    }

    function nameChangeHandler(event){
        setUserInput((prevState) => {
            return {...prevState, enteredName: event.target.value}
        })
    }

    function costChangeHandler(event){
        setUserInput((prevState) => {
            return {...prevState, enteredCost: event.target.value}
        })
    }
    */

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            date: new Date(enteredDate),
            name: enteredName,
            cost: enteredCost
        }

        //communicate up
        props.onSaveExpenseData(expenseData);
        
        //set it blank after form submission
        setEnteredDate("");
        setEnteredName("");
        setEnteredCost("");
    }

//two way binding: value={enteredDate}, value={enteredName}, value={enteredCost}
  return (
    <form onSubmit={submitHandler}>
        <div>
            <label htmlFor="date">Date:</label>
            <input id="date" type="date" value={enteredDate} onChange={dateChangeHandler}/>
        </div>
        <div>
            <label htmlFor="name">Expense Name:</label>
            <input id="name" type="text" value={enteredName} onChange={nameChangeHandler}/>
        </div>
        <div>
             <label htmlFor="cost">Cost:</label>
            <input id="cost" type="number" value={enteredCost} onChange={costChangeHandler}/>
        </div>
        <div>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>{/**button default type is submit, can be overmi */}
        </div>
    </form>
  )
}

export default ExpenseForm;