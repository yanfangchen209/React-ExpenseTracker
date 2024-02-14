import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'


export const ExpenseList = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    if(props.filteredData.length === 0){
        return <h2 className='expenses-list_fallback'>Found no expenses.</h2>
    }
  return (
    <ul className='expenses-list'>
        {props.filteredData.map(expense => 
            <ExpenseItem key={expense.id} cost={expense.cost} date={expense.date} name={expense.name} id={expense.id} onDelete={props.onDelete} onEdit={props.onEdit} />
        )}
    </ul>
  )
}


export default ExpenseList;