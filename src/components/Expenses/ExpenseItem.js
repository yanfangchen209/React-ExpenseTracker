import React from 'react'
import {useState} from 'react';
import { ExpenseDate } from './ExpenseDate';
import './ExpenseItem.css';

//lift the state up

/**alternative way to pass props using js object destructuring:
 * function ExpenseItem ({date, name, cost}){

  const [name, setName] = useState(name);

  function clickHandler(){
    setName("updated");
  }


  return (
    <div>    
        <div><ExpenseDate date={date}/></div>
        <div>{name}</div>
        <div>${cost}</div>
        <button onClick={clickHandler}>Edit name</button>
    </div>

  )
}
 */
function ExpenseItem (props){

  const [name, setName] = useState(props.name);

  function clickHandler(){
    setName("updated");
  }
  function itemDeleteHandler(){
    props.onDelete(props.id)
  }


  return (
    <div className='expense-item'>    
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
          <h2>{name}</h2>
          <div className='expense-item__price'>${props.cost}</div>
        </div>
        <button onClick={clickHandler}>Edit</button>
        <button onClick={itemDeleteHandler}>Delete</button>
    </div>
  )
}

export default ExpenseItem;
