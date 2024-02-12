import React, {useState} from 'react';
//import './NewExpense.css';
import Form from './ExpenseForm';

function NewExpense(props){
  const [isEditting, setIsEditting] = useState(false);
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id:Math.random().toString()
    };
    //console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditting(false);

  }

  function clickHandler(){
    setIsEditting(true);
  }

  function stopEditingHandler(){
    setIsEditting(false);
  }


/*return conditional content */
  return (
    <div>
        {!isEditting && <button onClick={clickHandler}>Add New Expense</button>}
        {isEditting && <Form onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  )
}

export default NewExpense;
