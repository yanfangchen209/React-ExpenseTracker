import './App.css'
import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMYDATA = [
  {id :"e1", date: new Date(2019, 8, 14), name: "shoes", cost: 65.00},//2019-9-14
  {id :"e2", date: new Date(2020, 8, 20), name: "new Tv", cost: 400.89},//2020-9-20
  {id :"e3", date: new Date(2020, 4, 6), name: "travel", cost: 2000.00},//2020-5-6
  {id :"e4", date: new Date(2022, 9, 6), name: "tuition", cost: 6000},//2022-10-6
  {id :"e5", date: new Date(2022, 8, 6), name: "perfume", cost: 100},//2022-9-6
];

function App() {
  const [expenseData, setExpenseData] = useState(DUMMYDATA);

  const addExpenseHandler = expenses => {
    //console.log("in app.js");
    //console.log(expenses);

    /*this line of code might not work correctly in all scenarios ,because React batches state updates 
    for performance reasons. The functional form ensures that you are working with the latest state,
     preventing issues that might arise from asynchronous state updates., so we have to use 
     functional form(or called functional update)*/
    //setExpenseData([expenses, ...expenseData]);

    /*below is functional form(or called functional update),it's generally safer to use the 
    functional form, especially when dealing with asynchronous updates or complex state 
    dependencies.*/
    setExpenseData(preExpenses => {return [expenses, ...preExpenses]});

  }

  /**using js builtin confirm() directly might not provide the best user experience, and it's often 
   * recommended to use more sophisticated modal components for better customization and 
   * control.React UI libraries like React-Bootstrap, Material-UI, or others. */

  function itemDeleteHandler(goalId){
    /*
    const deleteConfirm = window.confirm("Are you sure to delete this task?");
    if(deleteConfirm){
      setExpenseData(prevData => prevData.filter(expense => expense.id !== goalId));
    }
    //if cancel, do nothing.
    */
    
  }
  /**update only the properties that need to be changed while keeping the rest unchanged:
   * For each expense in the previous array, if the id matches the specified id, create a new 
   * object with the updated properties; otherwise, keep the original expense object unchanged."
   *  This ensures that only the specified expense with the matching id is updated while leaving 
   * the other expenses in the array unchanged. */
  const editHandler = (id, updatedExpense) => {
    setExpenseData((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === id ? { ...expense, ...updatedExpense } : expense
      )
    );
  };

  return (
    <div className="App">
      <h1 className='project-title'>Expense Tracker</h1>
      <div>
        <NewExpense onAddExpense={addExpenseHandler}/>

      </div>
      <div>
        <Expenses data={expenseData} onEdit={editHandler} onDelete={itemDeleteHandler}/>
      </div>
    </div>
  );
} 

export default App;
