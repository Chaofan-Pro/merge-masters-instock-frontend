import React, { useRef } from "react";
import "./EditInventoryPage.scss";
import { useParams, useNavigate } from "react-router-dom";
import FormInventoryDetails from "../../components/FormInventoryDetails/FormInventoryDetails";
import FormHeader from "../../components/FormHeader/FormHeader";
import BottomButtons from "../../components/BottomButtons/BottomButtons";

function EditInventoryPage() {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const { id } = useParams();

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
      <FormHeader backLink={-1} title={"Edit Inventory Item"} />
      <FormInventoryDetails ref={formRef} />
      <BottomButtons link={-1} text="Save" onClick={handleSave} />
    </div>
  );
}

export default EditInventoryPage;
