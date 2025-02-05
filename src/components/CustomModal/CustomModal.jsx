import React, { useState } from 'react';
import Modal from 'react-modal'; 
import "./CustomModal.scss";

Modal.setAppElement('#root');

function CustomModal() {
    const [isOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() { 
      setIsOpen(false);
    }

  return (

      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal 
          isOpen={isOpen} 
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay"     
        >
          <svg onClick={closeModal} className='modal-icon' 
            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#13182C"/>
          </svg>
          <p className='modal-text'>
            <p className='modal-title'>Delete Washington Warehouse?</p>
          </p>
          <article className='modal-article'>Please confirm that you’d like to delete the Washington from 
            the list of warehouses. You won’t be 
            able to undo this action.</article>
          
          <div className='modal-btn'>
            <button className='modal-btn__cancel' onClick={closeModal}>Cancel</button>
            <button className='modal-btn__delete' onClick={closeModal}>Delete</button> 
          </div>
        </Modal>
      </div>
    );
}

export default CustomModal; 