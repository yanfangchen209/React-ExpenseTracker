import React from 'react'
import {useState} from 'react';
import { ExpenseDate } from './ExpenseDate';
import './ExpenseItem.css';
import EditItem from './EditItem';
import DeleteConfirmModal from './DeleteConfirmModal';

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

//parent component: ExpenseList
function ExpenseItem ({cost, date, name, id, onDelete, onEdit}){

  const [isEditing, setIsEditing] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditSave = (updatedExpense) => {
    onEdit(id, updatedExpense);
    setIsEditing(false);
  };

  const handleEditCancel = () => {
    setIsEditing(false);
  };


  function itemDeleteHandler(){
    setModalIsOpen(true);
  }

  function onDeleteCancel(){
    setModalIsOpen(false);
  }

  function itemDelete(){
    onDelete(id);
    //close modal overlay after delete item
    setModalIsOpen(false);
  }




  return (
    <div className='expense-item'>
   
      {isEditing ? (
        <EditItem key={id} cost={cost} date={date} name={name} id={id} onSave={handleEditSave} onCancel={handleEditCancel} />
      ) : (
        <>
          <ExpenseDate date={date} />
          <div className='expense-item__description'>
            <h2>{name}</h2>
            <div className='expense-item__price'>${cost}</div>
          </div>
          <div className='edit-delete-buttons'>
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={itemDeleteHandler}>Delete</button>
          </div>

        </>
      )}
      {
        modalIsOpen && <DeleteConfirmModal onDeletion={itemDelete} onDeleteCancel={onDeleteCancel}/>
      }
   
    </div>
  );
};

export default ExpenseItem;
