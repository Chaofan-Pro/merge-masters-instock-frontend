import "./EditInventoryPage.scss";
import React from "react";
import InventoryForm from "../../components/InventoryForm/InventoryForm";

function EditInventory() {
  return (
    <div className="editInventory">
      <div className="editInventory__subheader-container">
        <Link to="/inventory">
          <img src={backArrow} alt="back arrow" className="back-arrow" />
        </Link>
        <h2 className="editInventory__title">Add New Inventory Item</h2>
      </div>

      <InventoryForm />

      {/* =-=-=-=-=-=-BUTTONS-=-=-=-==- */}
      <div className="buttons">
        <Link to="/inventory" className="cancel__button">
          Cancel
        </Link>
        <button
          type="submit"
          form="form"
          className="save__button editInventory__button"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditInventory;
