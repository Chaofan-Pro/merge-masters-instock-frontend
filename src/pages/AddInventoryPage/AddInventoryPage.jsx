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

  const [isItemNameValid, setItemNameValid] = useState(true);
  const [isDescriptionValid, setDescriptionValid] = useState(true);
  const [isQuantityValid, setQuantityValid] = useState(true);
  const [isCategoryValid, setCategoryValid] = useState("");
  const [isWarehouseValid, setWarehouseValid] = useState("");

  const handleAddItem = async () => {
    const { itemName, description, category, status, quantity, warehouse } =
      formData;

    setItemNameValid(itemName);
    setDescriptionValid(description);
    setQuantityValid(quantity);
    setCategoryValid(category);
    setWarehouseValid(warehouse);

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
      <AddFormInventoryDetails
        formData={formData}
        setFormData={setFormData}
        isItemNameValid={isItemNameValid}
        setItemNameValid={setItemNameValid}
        isDescriptionValid={isDescriptionValid}
        setDescriptionValid={setDescriptionValid}
        isQuantityValid={isQuantityValid}
        setQuantityValid={setQuantityValid}
        isCategoryValid={isCategoryValid}
        setCategoryValid={setCategoryValid}
        isWarehouseValid={isWarehouseValid}
        setWarehouseValid={setWarehouseValid}
      />
      <BottomButtons link={-1} text="Save" onClick={handleAddItem} />
    </div>
  );
}

export default AddInventory;
