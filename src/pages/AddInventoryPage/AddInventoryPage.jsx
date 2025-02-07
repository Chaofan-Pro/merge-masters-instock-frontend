import "./AddInventoryPage.scss";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import React from "react";
import InventoryForm from "../../components/InventoryForm/InventoryForm";

function AddInventory() {
  return (
    <div className="addInventory">
      <div className="addInventory__subheader-container">
        <Link to="/inventory">
          <img src={backArrow} alt="back arrow" className="back-arrow" />
        </Link>
        <h2 className="addInventory__title">Add New Inventory Item</h2>
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
          className="add__button addInventory__button"
        >
          + Add Item
        </button>
      </div>
    </div>
  );
}

export default AddInventory;
