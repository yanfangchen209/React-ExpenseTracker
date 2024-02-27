import React from 'react'
import ReactDOM from 'react-dom';
import './DeleteConfirmModal.css';

//we can also write backdrop and modaloveraly as seperate components
const Backdrop = ({onClickBackground}) => {
  //click the modal to cancel delete request if the backdrop is clicked.
  return <div className='backdrop' onClick={onClickBackground}></div>
}

const DeleteModalOverlay = ({onDeletion,onDeleteCancel}) => {
  return (  
  <div className='delete-confirm-modal'>
    <div className='message'>
      <p>Are you sure you want to delete this item?</p>
    </div>
    <div className='actions'>
      <button onClick={onDeleteCancel}>Cancel</button>
      <button onClick={onDeletion}>Delete</button>
    </div>
  </div>
  )
}


const DeleteConfirmModal = ({onDeletion, onDeleteCancel}) => {

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClickBackground={onDeleteCancel} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <DeleteModalOverlay onDeletion={onDeletion} onDeleteCancel={onDeleteCancel}/>,
        document.getElementById("deleteconfirmmodal-root")
      )    
      }
    </React.Fragment>
  )
}
  

export default DeleteConfirmModal;