import "./EditInventoryPage.scss";
import React from "react";
import { Link } from "react-router-dom";
import backArrow from "../../assets/icons/arrow_back-24px.svg";

import FormInventoryDetails from "../../components/FormInventoryDetails/FormInventoryDetails";

function EditInventory() {
  return (
    <div className="editInventory">
      <div className="editInventory__subheader-container">
        <Link to="/inventory">
          <img src={backArrow} alt="back arrow" className="back-arrow" />
        </Link>
        <h2 className="editInventory__title">Edit Inventory Item</h2>
      </div>
      <FormInventoryDetails />
      <div className="buttons">
        <Link to="/inventory" className="cancel__button">
          Cancel
        </Link>
        <button type="submit" className="save__button editInventory__button">
          Save
        </button>
      </div>
    </div>
  );
}

export default EditInventory;
