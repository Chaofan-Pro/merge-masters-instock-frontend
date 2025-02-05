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