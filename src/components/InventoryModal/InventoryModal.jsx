import React from "react";
import Modal from "react-modal";
import "./InventoryModal.scss"; // Update this to use the appropriate stylesheet for InventoryModal

Modal.setAppElement("#root");

function InventoryModal({ inventory, closeModal, deleteInventory }) {
  const handleDelete = () => {
    deleteInventory(inventory.id);
    closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={true}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <svg
          onClick={closeModal}
          className="modal-icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            fill="#13182C"
          />
        </svg>
        <div className="modal-text">
          <p className="modal-title">Delete {inventory.item_name}?</p>
        </div>
        <article className="modal-article">
          Please confirm that you'd like to delete the{" "}
          {inventory.item_name} from the list of inventories. This action cannot be undone.
        </article>

        <div className="modal-btn">
          <button className="modal-btn__cancel" onClick={closeModal}>
            Cancel
          </button>
          <button className="modal-btn__delete" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default InventoryModal;
