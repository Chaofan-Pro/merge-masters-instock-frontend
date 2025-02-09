import "./AddFormInventoryDetails.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Error from "../../components/Error/Error";

const AddFormInventoryDetails = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // State for form fields
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Select");
  const [status, setStatus] = useState("");
  const [quantity, setQuantity] = useState("");
  const [warehouse, setWarehouse] = useState("Select");

  // State for validation
  const [isItemNameValid, setIsItemNameValid] = useState(true);
  const [isDescriptionValid, setIsDescriptionValid] = useState(true);
  const [isCategoryValid, setIsCategoryValid] = useState(true);
  const [isStatusValid, setIsStatusValid] = useState(true);
  const [isQuantityValid, setIsQuantityValid] = useState(true);
  const [isWarehouseValid, setIsWarehouseValid] = useState(true);

  // State for warehouses (fetched from API)
  const [warehouses, setWarehouses] = useState([]);

  // Fetch warehouses on component mount
  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/warehouses"
        );
        console.log("API Response:", response.data); // Debug the response
        if (Array.isArray(response.data)) {
          setWarehouses(response.data);
        } else {
          console.error("API response is not an array:", response.data);
          setWarehouses([]); // Fallback to an empty array
        }
      } catch (error) {
        console.error("Error fetching warehouses:", error);
        setWarehouses([]); // Fallback to an empty array
      }
    };
    fetchWarehouses();
  }, []);

  // Event handlers for form fields
  const changeItemNameHandle = (e) => {
    setItemName(e.target.value);
    setIsItemNameValid(true);
  };
  const changeDescriptionHandle = (e) => {
    setDescription(e.target.value);
    setIsDescriptionValid(true);
  };
  const changeCategoryHandle = (e) => {
    setCategory(e.target.value);
    setIsCategoryValid(true);
  };
  const changeStatusHandle = (e) => {
    setStatus(e.target.value);
    setIsStatusValid(true);
  };
  const changeQuantityHandle = (e) => {
    setQuantity(e.target.value);
    setIsQuantityValid(true);
  };
  const changeWarehouseHandle = (e) => {
    setWarehouse(e.target.value);
    setIsWarehouseValid(true);
  };

  // Form submission handler
  const submitHandle = async (e) => {
    e.preventDefault();

    // Validate all fields
    setIsItemNameValid(!!itemName);
    setIsDescriptionValid(!!description);
    setIsCategoryValid(category !== "Select");
    setIsStatusValid(!!status);
    setIsQuantityValid(status === "Out of Stock" || !!quantity);
    setIsWarehouseValid(warehouse !== "Select");

    if (
      !!itemName &&
      !!description &&
      category !== "Select" &&
      !!status &&
      (status === "Out of Stock" || !!quantity) &&
      warehouse !== "Select"
    ) {
      try {
        const newInventory = {
          warehouse_id: parseInt(warehouse, 10),
          item_name: itemName,
          description,
          category,
          status,
          quantity: status === "Out of Stock" ? 0 : parseInt(quantity, 10),
        };

        // POST request
        const response = await axios.post(
          "http://localhost:8080/api/inventories",
          newInventory
        );
        console.log("Inventory added successfully:", response.data);
        alert("Inventory item added successfully!");

        // Redirect to /inventory
        navigate("/inventory");
      } catch (error) {
        console.error("Error adding inventory:", error);
        alert("Failed to add inventory item. Please try again.");
      }
    }
  };

  return (
    <form className="editInventory__form" onSubmit={submitHandle} id="form">
      <div className="editInventory__details-container">
        <h3 className="editInventory__subheader-title">Item Details</h3>
        <div className="editInventory__detail-form">
          {/* -=-=-=-ITEM NAME-=-=-=-= */}
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
          {!isItemNameValid && (
            <Error
              isInputValid={isItemNameValid}
              className="form__error-container"
            />
          )}

          {/* -=-=-=-DESCRIPTION-=-=-=-= */}
          <label htmlFor="description" className="editInventory__detail-label">
            Description
          </label>
          <textarea
            className="editInventory__detail-textarea"
            placeholder="Please enter a brief item description..."
            id="description"
            name="description"
            value={description}
            onChange={changeDescriptionHandle}
          ></textarea>
          {!isDescriptionValid && <Error isInputValid={isDescriptionValid} />}

          {/* -=-=-=-CATEGORY-=-=-=-= */}
          <label htmlFor="category" className="editInventory__detail-label">
            Category
          </label>
          <div className="editInventory__select-container">
            <select
              name="category"
              id="category"
              className="category__select"
              value={category}
              onChange={changeCategoryHandle}
            >
              <option value="Select">Please select</option>
              <option value="Electronics">Electronics</option>
              <option value="Gear">Gear</option>
              <option value="Apparel">Apparel</option>
              <option value="Accessories">Accessories</option>
              <option value="Health">Health</option>
            </select>
          </div>
          {!isCategoryValid && <Error isInputValid={isCategoryValid} />}
        </div>
      </div>

      <div className="editInventory__availability-container">
        <div className="editInventory__availability-form">
          <h3 className="editInventory__subheader-title">Item Availability</h3>

          {/* -=-=-=-STATUS-=-=-=-= */}
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

          {/* -=-=-=-QUANTITY-=-=-=-= */}
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

        {/* -=-=-=-WAREHOUSE-=-=-=-= */}
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
            {Array.isArray(warehouses) &&
              warehouses.map((wh) => (
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
};

export default AddFormInventoryDetails;
