
import './App.css';
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

  return (
    <div className="App">
      <div>
        <NewExpense onAddExpense={addExpenseHandler}/>

      </div>
      <div>
        <Expenses data={expenseData}/>
      </div>
    </div>
  );
}

export default App;
