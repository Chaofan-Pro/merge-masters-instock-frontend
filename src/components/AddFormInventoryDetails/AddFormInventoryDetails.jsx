import "./AddFormInventoryDetails.scss";
import { useState, useEffect } from "react";
import axios from "axios";
// import Error from "../../components/Error/Error";

const AddFormInventoryDetails = ({ formData, setFormData }) => {
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
        setError("Failed to load warehouses.");
      }
    };
    fetchWarehouses();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form className="editInventory__form" id="form">
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
            name="itemName"
            value={formData.itemName}
            onChange={handleChange}
          />

          {/* -=-=-=-DESCRIPTION-=-=-=-= */}
          <label htmlFor="description" className="editInventory__detail-label">
            Description
          </label>
          <textarea
            className="editInventory__detail-textarea"
            placeholder="Please enter a brief item description..."
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>

          {/* -=-=-=-CATEGORY-=-=-=-= */}
          <label htmlFor="category" className="editInventory__detail-label">
            Category
          </label>
          <div className="editInventory__select-container">
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
              <label htmlFor="quantity" className="editInventory__detail-label">
                Quantity
              </label>
              <input
                type="number"
                className="editInventory__quantity"
                placeholder="0"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
              />
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
      </div>
    </form>
  );
};

export default AddFormInventoryDetails;
