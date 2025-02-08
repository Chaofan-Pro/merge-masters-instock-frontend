import React, { useRef } from "react";
import "./EditInventoryPage.scss";
import { Link, useNavigate } from "react-router-dom";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import FormInventoryDetails from "../../components/FormInventoryDetails/FormInventoryDetails";

function EditInventoryPage() {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleSave = async () => {
    if (formRef.current) {
      const success = await formRef.current.submitHandle();
      if (success) {
        navigate("/inventory");
      } else {
        console.error("Failed to save changes.");
      }
    }
  };

  return (
    <div className="editInventory">
      <div className="editInventory__subheader-container">
        <Link to="/inventory">
          <img src={backArrow} alt="back arrow" className="back-arrow" />
        </Link>
        <h2 className="editInventory__title">Edit Inventory Item</h2>
      </div>
      <FormInventoryDetails ref={formRef} />
      <div className="buttons">
        <Link to="/inventory" className="cancel__button">
          Cancel
        </Link>
        <button
          type="button"
          className="save__button editInventory__button"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditInventoryPage;
