import "./AddInventoryPage.scss";
import React, { useState } from "react";
import AddFormInventoryDetails from "../../components/AddFormInventoryDetails/AddFormInventoryDetails";
import FormHeader from "../../components/FormHeader/FormHeader";
import BottomButtons from "../../components/BottomButtons/BottomButtons";
import axios from "axios";

function AddInventory() {
  // State for form fields
  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    category: "Select",
    status: "",
    quantity: "",
    warehouse: "Select",
  });

  // Function to handle form submission
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

      // POST request to save the inventory item
      const response = await axios.post(
        "http://localhost:8080/api/inventories",
        newInventory
      );
      console.log("Inventory added successfully:", response.data);
      alert("Inventory item added successfully!");

      // Redirect to /inventory
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
      {/* Pass the handleAddItem function to BottomButtons */}
      <BottomButtons link={-1} text="+ Add Item" onClick={handleAddItem} />
    </div>
  );
}

export default AddInventory;
