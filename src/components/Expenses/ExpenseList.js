import React from 'react'
import ExpenseItem from './ExpenseItem'

export const ExpenseList = (props) => {

    if(props.filteredData.length === 0){
        return <h2 className='expenses-list_fallback'>Found no expenses.</h2>
    }
    
  return (
    <ul>
        
        {props.filteredData.map(expense => (
            <ExpenseItem key={expense.id} cost={expense.cost} date={expense.date} name={expense.name} />
        ))}
    </ul>
  )
}


export default ExpenseList;