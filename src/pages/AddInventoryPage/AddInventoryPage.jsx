import "./AddInventoryPage.scss";
import React, { useState } from "react";
import AddFormInventoryDetails from "../../components/AddFormInventoryDetails/AddFormInventoryDetails";
import FormHeader from "../../components/FormHeader/FormHeader";
import BottomButtons from "../../components/BottomButtons/BottomButtons";
import axios from "axios";

function AddInventory() {
  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    category: "Select",
    status: "",
    quantity: "",
    warehouse: "Select",
  });

  const handleAddItem = async () => {
    const { itemName, description, category, status, quantity, warehouse } =
      formData;

    try {
      const newInventory = {
        warehouse_id: parseInt(warehouse, 10),
        item_name: itemName,
        description,
        category,
        status,
        quantity: status === "Out of Stock" ? 0 : parseInt(quantity, 10),
      };

      const baseUrl = import.meta.env.VITE_API_URL;

      const response = await axios.post(
        `${baseUrl}/api/inventories`,
        newInventory
      );
      alert("Inventory item added successfully!");

      window.location.href = "/inventory";
    } catch (error) {
      console.error("Error adding inventory:", error);
      alert("Failed to add inventory item. Please try again.");
    }
  };

  return (
    <div className="addInventory">
      <FormHeader backLink={-1} title={"Add New Inventory"} />
      <AddFormInventoryDetails formData={formData} setFormData={setFormData} />
      <BottomButtons link={-1} text="Save" onClick={handleAddItem} />
    </div>
  );
}

export default AddInventory;
