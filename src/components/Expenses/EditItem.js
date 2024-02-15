import React, { useState } from 'react';
import './EditItem.css';

//parent component: ExpenseItem
const EditItem = ({cost, date, name, id, onSave, onCancel}) => {

  const [editedDate, setEditedDate] = useState(date.toString());
  const [editedName, setEditedName] = useState(name);
  const [editedCost, setEditedCost] = useState(cost.toString());
//
  const [dateIsValid, setDateIsValid] = useState(true);
  const [nameIsValid, setNameIsValid] = useState(true);
  const [costIsValid, setCostIsValid] = useState(true);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Updating the state based on the input name
    if (name === 'date') {
      setEditedDate(value);
    } else if (name === 'name') {
      setEditedName(value);
    } else if (name === 'cost') {
      setEditedCost(value); //parse to number??
    }

  };

  const handleSave = (e) => {
    e.preventDefault();
    if(editedDate.trim().length === 0){
        setDateIsValid(false);
        if(editedName.trim().length === 0){
            setNameIsValid(false);
        }
        if(editedCost.trim().length === 0){
            setCostIsValid(false);
        }

        return;
    }
    if(editedName.trim().length === 0){
        setNameIsValid(false);
        if(editedCost.trim().length === 0){
            setCostIsValid(false);
        }
        return;
    }
    if(editedCost.trim().length === 0){
        setCostIsValid(false);
        return;
    }
    const editExpense = {
        date: new Date(editedDate),
        name: editedName,
        cost: editedCost
    }
    onSave(editExpense);
  };

  const handleCancel = () => {
    onCancel();
  };


  return (
    <form className='edit-expense__controls'>
        <div className={`edit-expense__control ${!dateIsValid ? 'edit-invalid': ''}`}>
            <input type="date" name="date" value={editedDate} onChange={handleInputChange} />
        </div>
        <div className={`edit-expense__control ${!nameIsValid ? 'edit-invalid': ''}`}>
            <input type="text" name="name" value={editedName} onChange={handleInputChange} />
        </div>
        <div className={`edit-expense__control ${!costIsValid ? 'edit-invalid': ''}`}>
            <input type="number" name="cost" value={editedCost} onChange={handleInputChange}/>
        </div>
        <div className='edit-expense__actions'>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    </form>
  );
};

export default EditItem;
