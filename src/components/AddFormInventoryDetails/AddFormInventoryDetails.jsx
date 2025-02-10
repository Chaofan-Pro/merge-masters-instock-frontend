import "./AddFormInventoryDetails.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const AddFormInventoryDetails = ({
  formData,
  setFormData,
  isItemNameValid,
  setItemNameValid,
  isDescriptionValid,
  setDescriptionValid,
  isQuantityValid,
  setQuantityValid,
  isCategoryValid,
  setCategoryValid,
  isWarehouseValid,
  setWarehouseValid,
}) => {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/warehouses`
        );
        if (Array.isArray(response.data)) {
          setWarehouses(response.data);
        } else {
          throw new Error("API response is not an array.");
        }
      } catch (error) {
        console.error("Error fetching warehouses:", error);
      }
    };
    fetchWarehouses();
  }, []);

  // Handle form input change and validate item name
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));


    // setItemNameValid(formData.itemName);
    // setDescriptionValid(formData.description);
    // setQuantityValid(formData.quantity);
    // setCategoryValid(formData.category);
    // setWarehouseValid(formData.warehouse);
    if (name === "itemName") {
      setItemNameValid(value);
    }
    if (name === "description") {
      setDescriptionValid(value);
    }
    if (name === "quantity") {
      setQuantityValid(value);
    }
    if (name === "category") {
      setCategoryValid(value);
    }
    if (name === "warehouse") {
      setWarehouseValid(value);
    }
  };


  return (
    <form className="addInventory__form" id="form">
      <div className="addInventory__details-container">
        <h3 className="addInventory__subheader-title">Item Details</h3>
        <div className="addInventory__detail-form">
          {/* -=-=-=-ITEM NAME-=-=-=-= */}
          <label htmlFor="name" className="addInventory__detail-label">
            Item Name
          </label>
          <input
            type="text"
            className={`addInventory__detail-input ${
              !isItemNameValid ? "invalid" : ""
            }`}
            placeholder="Item Name"
            id="name"
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
          />
          {!isItemNameValid && (
            <div className="form__error">
              <img
                className="form__error-icon"
                src="/src/assets/icons/error-24px.svg"
                alt="error icon"
              />
              <p className="form__error-text">This field is required</p>
            </div>
          )}

          {/* -=-=-=-DESCRIPTION-=-=-=-= */}
          <label htmlFor="description" className="addInventory__detail-label">
            Description
          </label>
          <textarea
            className={`addInventory__detail-textarea ${
              !isDescriptionValid ? "invalid" : ""
            }`}
            placeholder="Please enter a brief item description..."
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
          {!isDescriptionValid && (
            <div className="form__error">
              <img
                className="form__error-icon"
                src="/src/assets/icons/error-24px.svg"
                alt="error icon"
              />
              <p className="form__error-text">This field is required</p>
            </div>
          )}

          {/* -=-=-=-CATEGORY-=-=-=-= */}
          <label htmlFor="category" className="addInventory__detail-label">
            Category
          </label>
          <div className="addInventory__select-container">
            <select
              name="category"
              id="category"
              className="category__select"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="Select">Please select</option>
              <option value="Electronics">Electronics</option>
              <option value="Gear">Gear</option>
              <option value="Apparel">Apparel</option>
              <option value="Accessories">Accessories</option>
              <option value="Health">Health</option>
            </select>
          </div>
          {isCategoryValid === "Select" && (
            <div className="form__error">
              <img
                className="form__error-icon"
                src="/src/assets/icons/error-24px.svg"
                alt="error icon"
              />
              <p className="form__error-text">This field is required</p>
            </div>
          )}
        </div>
      </div>

      <div className="addInventory__availability-container">
        <div className="addInventory__availability-form">
          <h3 className="addInventory__subheader-title">Item Availability</h3>

          {/* -=-=-=-STATUS-=-=-=-= */}
          <label htmlFor="status" className="addInventory__detail-label">
            Status
          </label>
          <div className="stock__status">
            <input
              type="radio"
              id="instock"
              name="status"
              value="In Stock"
              checked={formData.status === "In Stock"}
              onChange={handleChange}
            />
            <label htmlFor="instock" className="radio__button">
              In Stock
            </label>

            <input
              type="radio"
              id="outofstock"
              name="status"
              value="Out of Stock"
              checked={formData.status === "Out of Stock"}
              onChange={handleChange}
            />
            <label htmlFor="outofstock" className="radio__button">
              Out of Stock
            </label>
          </div>

          {/* -=-=-=-QUANTITY-=-=-=-= */}
          {formData.status === "In Stock" && (
            <>
              <label htmlFor="quantity" className="addInventory__detail-label">
                Quantity
              </label>
              <input
                type="number"
                className={`addInventory__quantity ${
                  !isQuantityValid ? "invalid" : ""
                }`}
                placeholder="0"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
              {!isQuantityValid && (
                <div className="form__error">
                  <img
                    className="form__error-icon"
                    src="/src/assets/icons/error-24px.svg"
                    alt="error icon"
                  />
                  <p className="form__error-text">This field is required</p>
                </div>
              )}
            </>
          )}
        </div>

        {/* -=-=-=-WAREHOUSE-=-=-=-= */}
        <label htmlFor="warehouse" className="addInventory__detail-label">
          Warehouse
        </label>
        <div className="addInventory__select-container">
          <select
            name="warehouse"
            id="warehouse"
            className="warehouse__select"
            value={formData.warehouse}
            onChange={handleChange}
          >
            <option value="Select">Please select</option>
            {warehouses.map((wh) => (
              <option key={wh.id} value={wh.id}>
                {wh.warehouse_name}
              </option>
            ))}
          </select>
        </div>
        {isWarehouseValid === "Select" && (
          <div className="form__error">
            <img
              className="form__error-icon"
              src="/src/assets/icons/error-24px.svg"
              alt="error icon"
            />
            <p className="form__error-text">This field is required</p>
          </div>
        )}
      </div>
    </form>
  );
};

export default AddFormInventoryDetails;
