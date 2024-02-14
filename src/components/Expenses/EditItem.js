import React, { useState } from 'react';

const EditItem = ({ expense, onSave, onCancel }) => {
  const [editedExpense, setEditedExpense] = useState({ ...expense });

  const handleInputChange = (e) => {
    setEditedExpense({ ...editedExpense, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onSave(editedExpense);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        value={editedExpense.name}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="cost"
        value={editedExpense.cost}
        onChange={handleInputChange}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default EditItem;
