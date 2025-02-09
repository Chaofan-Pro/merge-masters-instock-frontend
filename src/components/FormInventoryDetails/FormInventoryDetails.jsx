import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import "./FormInventoryDetails.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import Error from "../../components/Error/Error";

const FormInventoryDetails = forwardRef((props, ref) => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const [inventory, setInventory] = useState(null);
  const [warehouses, setWarehouses] = useState([]);

  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Select");
  const [status, setStatus] = useState("In Stock");
  const [quantity, setQuantity] = useState("");
  const [warehouse, setWarehouse] = useState("Select");

  const [isItemNameValid, setItemNameValid] = useState(true);
  const [isDescriptionValid, setDescriptionValid] = useState(true);
  const [isCategoryValid, setCategoryValid] = useState(true);
  const [isQuantityValid, setQuantityValid] = useState(true);
  const [isWarehouseValid, setWarehouseValid] = useState(true);

  // Fetch inventory details
  const fetchInventoryDetail = async () => {
    try {
      const { data } = await axios.get(baseUrl + `/api/inventories/${id}`);
      setInventory(data);
      setItemName(data.item_name);
      setDescription(data.description);
      setCategory(data.category);
      setStatus(data.status);
      setQuantity(data.quantity);
      setWarehouse(data.warehouse_id);
    } catch (error) {
      console.error("ERROR: " + error);
    }
  };

  // Fetch warehouses
  const fetchWarehouses = async () => {
    try {
      const { data } = await axios.get(baseUrl + "/api/warehouses");
      setWarehouses(data);
    } catch (error) {
      console.error("ERROR fetching warehouses:", error);
    }
  };

  useEffect(() => {
    fetchWarehouses();
  }, []);

  useEffect(() => {
    if (warehouses.length > 0 && id) {
      fetchInventoryDetail();
    }
  }, [warehouses, id]);

  const changeItemNameHandle = (e) => {
    setItemName(e.target.value);
    setItemNameValid(true);
  };

  const changeDescriptionHandle = (e) => {
    setDescription(e.target.value);
    setDescriptionValid(true);
  };

  const changeCategoryHandle = (e) => {
    setCategory(e.target.value);
    setCategoryValid(true);
  };

  const changeStatusHandle = (e) => {
    setStatus(e.target.value);
    if (e.target.value === "Out of Stock") {
      setQuantity(""); // Clear quantity if status is Out of Stock
    }
  };

  const changeQuantityHandle = (e) => {
    setQuantity(e.target.value);
    setQuantityValid(true);
  };

  const changeWarehouseHandle = (e) => {
    setWarehouse(e.target.value);
    setWarehouseValid(true);
  };

  const submitHandle = async (e) => {
    if (e) e.preventDefault();

    setItemNameValid(!!itemName);
    setDescriptionValid(!!description);
    setCategoryValid(category !== "Select");
    setQuantityValid(!!quantity);
    setWarehouseValid(warehouse !== "Select");

    if (
      itemName &&
      description &&
      category !== "Select" &&
      warehouse !== "Select"
    ) {
      try {
        const selectedWarehouse = warehouses.find(
          (wh) => wh.id === parseInt(warehouse)
        );

        if (!selectedWarehouse) {
          console.error("Invalid warehouse id");
          alert("Invalid warehouse name");
          return false;
        }

        const inventoryData = {
          item_name: itemName,
          description,
          category,
          status,
          warehouse_id: selectedWarehouse.id,
          quantity: status === "In Stock" ? quantity : 0,
        };

        // Update the inventory item
        await axios.put(baseUrl + `/api/inventories/${id}`, inventoryData);

        fetchInventoryDetail();
        alert("Updated successfully!");
        return true;
      } catch (error) {
        console.error("Error in submit:", error);
        alert("Update failed. Please try again.");
        return false;
      }
    }
    return false;
  };

  useImperativeHandle(ref, () => ({
    submitHandle,
  }));

  return (
    <form className="editInventory__form" onSubmit={submitHandle}>
      <div className="editInventory__details-container">
        <h3 className="editInventory__subheader-title">Item Details</h3>
        <div className="editInventory__detail-form">
          <label htmlFor="name" className="editInventory__detail-label">
            Item Name
          </label>
          <input
            type="text"
            className="editInventory__detail-input"
            placeholder="Item Name"
            id="name"
            name="itemname"
            value={itemName}
            onChange={changeItemNameHandle}
          />
          {!isItemNameValid && <Error isInputValid={isItemNameValid} />}

          <label htmlFor="description" className="editInventory__detail-label">
            Description
          </label>
          <textarea
            className="editInventory__detail-textarea"
            placeholder="Item description"
            id="description"
            name="description"
            value={description}
            onChange={changeDescriptionHandle}
          ></textarea>
          {!isDescriptionValid && <Error isInputValid={isDescriptionValid} />}
        </div>
      </div>

      <div className="editInventory__availability-container">
        <div className="editInventory__availability-form">
          <h3 className="editInventory__subheader-title">Item Availability</h3>

          <label htmlFor="status" className="editInventory__detail-label">
            Status
          </label>
          <div className="stock__status">
            <input
              type="radio"
              id="instock"
              name="status"
              value="In Stock"
              checked={status === "In Stock"}
              onChange={changeStatusHandle}
            />
            <label htmlFor="instock" className="radio__button">
              In Stock
            </label>

            <input
              type="radio"
              id="outofstock"
              name="status"
              value="Out of Stock"
              checked={status === "Out of Stock"}
              onChange={changeStatusHandle}
            />
            <label htmlFor="outofstock" className="radio__button">
              Out of Stock
            </label>
          </div>

          {status === "In Stock" && (
            <>
              <label htmlFor="quantity" className="editInventory__detail-label">
                Quantity
              </label>
              <input
                type="number"
                className="editInventory__quantity"
                placeholder="0"
                id="quantity"
                name="quantity"
                value={quantity}
                onChange={changeQuantityHandle}
              />
              {!isQuantityValid && <Error isInputValid={isQuantityValid} />}
            </>
          )}
        </div>

        <label htmlFor="warehouse" className="editInventory__detail-label">
          Warehouse
        </label>
        <div className="editInventory__select-container">
          <select
            name="warehouse"
            id="warehouse"
            className="warehouse__select"
            value={warehouse}
            onChange={changeWarehouseHandle}
          >
            <option value="Select">Please select</option>
            {warehouses.map((wh) => (
              <option key={wh.id} value={wh.id}>
                {wh.warehouse_name}
              </option>
            ))}
          </select>
        </div>
        {!isWarehouseValid && <Error isInputValid={isWarehouseValid} />}
      </div>
    </form>
  );
});

export default FormInventoryDetails;
