import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
//import RefExpenseForm from './RefExpenseForm';

//parent component: App
function NewExpense({onAddExpense}){
  const [isEditting, setIsEditting] = useState(false);
  
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id:Math.random().toString()
    };
    //console.log(expenseData);
    onAddExpense(expenseData);
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

    <div className='new-expense'>
        {/**<RefExpenseForm onSaveExpenseData={saveExpenseDataHandler} />*/}
        {!isEditting && <button onClick={clickHandler}>Add New Expense</button>}
        {isEditting && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
    </div>
  )
} 

export default NewExpense;
