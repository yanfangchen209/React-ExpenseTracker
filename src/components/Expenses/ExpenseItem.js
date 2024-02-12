import React from 'react'
import {useState} from 'react';
import { ExpenseDate } from './ExpenseDate';

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


  return (
    <div>    
        <div><ExpenseDate date={props.date}/></div>
        <div>{name}</div>
        <div>${props.cost}</div>
        <button onClick={clickHandler}>Edit name</button>
    </div>

  )
}

export default ExpenseItem;
