import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'

//parent component: Expenses
export const ExpenseList = ({filteredData, onEdit, onDelete}) => {
    

    if(filteredData.length === 0){
        return <h2 className='no-expenses-list'>Found no expenses.</h2>
    }
  return (
    <ul className='expenses-list'>
        {filteredData.map(expense => 
            <ExpenseItem key={expense.id} cost={expense.cost} date={expense.date} name={expense.name} id={expense.id} onDelete={onDelete} onEdit={onEdit} />
        )}
    </ul>
  )
}


export default ExpenseList;