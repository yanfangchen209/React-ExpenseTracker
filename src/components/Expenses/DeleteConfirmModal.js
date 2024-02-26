import React from 'react'
import ReactDOM from 'react-dom';

//we can also write backdrop and modaloveraly as seperate components
const Backdrop = ({backdropClick}) => {
  return <div className='backdrop' onClick={backdropClick}></div>
}

const ModalOverlay = () => {
  return (  
  <div className='modal-content'>
    <p>Are you sure you want to delete this item?</p>
    <button>Cancel</button>
    <button>Delete</button>
  </div>
  )

}



export const DeleteConfirmModal = ({onConfirm}) => {
  //click the modal to cancel delete request if the backdrop is clicked.
  const backdropClickHandler = () => {

  }
  return ReactDOM.createPortal(
    <div className='backdrop' onClick={backdropClickHandler}>
      <div className='modal-content'>
        <ModalOverlay />
      </div>
    </div>, document.getElementById("deleteconfirmmodal-root")
  )
}
export default DeleteConfirmModal;