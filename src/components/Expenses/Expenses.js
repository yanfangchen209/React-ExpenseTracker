import React, {useState} from 'react'
import ExpenseFilter from './ExpenseFilter'
import { ExpenseList } from './ExpenseList';
import ExpenseChart from './ExpenseChart';
import './Expenses.css';

//parent component:App
export const Expenses = ({data, onEdit, onDelete}) => {

    const [filteredYear, setFilteredYear] = useState('All');
    let filteredExpenseData = [];
    if(filteredYear === 'All'){
        filteredExpenseData = data;
    }else{
        filteredExpenseData = data.filter(item => {return item.date.getFullYear().toString() === filteredYear});
    }

    /*derived/computed state: when one state depends on another, we don't need to maintain another state,
    we can only decalre an ordinary variable, which is more elegant recommended */
/*
    let filterInfoText = '2019, 2020, 2021';
    if(filteredYear === '2019'){
        filterInfoText = '2020, 2021, 2022';
    }else if(filteredYear === '2020'){
        filterInfoText = '2019, 2021, 2022';
    }else if(filteredYear === '2021'){
        filterInfoText = '2019, 2020, 2022';
    }

*/
/*
    let expenseContent = <p>No expenses found.</p>;
    if(filteredExpenseData.length > 0){
        expenseContent = filteredExpenseData.map(item => <ExpenseItem key={item.id} date={item.date} name={item.name} cost={item.cost}/>)
    }
*/

    const addFilter = year => {
        setFilteredYear(year);
    }

    /*use of two way binding:selected={filteredYear}, show the useState('2022'),2022 as defaulted 
    value in filter.
    always adding a key prop when rendering lists of items in React. React efficiently updates and renders 
    lists, avoiding performance losses and potential bugs.
    */
  /**key={expense.id}: Assigns a unique key to each ExpenseItem based on the id property of 
 * the expense object. This helps React efficiently update the list. */
       /* convert each expenses array element into an ExpenseItem jsx element
        so finally we transfrom an array to an array of jsx element which can be rendered by react
        */
    return ( 
        <div className='expenses'>
            <ExpenseFilter selected={filteredYear} onAddFilter={addFilter}/>
            <ExpenseChart expenses={filteredExpenseData} />
          {/* <span>{filterInfoText} data hidden</span>*/}  
            {/**rendering content conditionally, if expression befor && is true, the content after
             && will be executed.
            {filteredExpenseData.length === 0 && <p>No expenses found.</p>}
            {
            filteredExpenseData.length > 0 && filteredExpenseData.map(item => <ExpenseItem key={item.id} date={item.date} name={item.name} cost={item.cost}/>)  
            }
            */}
            {/**{expenseContent}*/}
            <ExpenseList filteredData={filteredExpenseData} onEdit={onEdit} onDelete={onDelete}/>
        </div>

  )
}

export default Expenses

