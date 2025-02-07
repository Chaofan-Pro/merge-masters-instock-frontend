import "./InventoryForm.scss";
import React from "react";

function InventoryForm() {
  return (
    <form className="Inventory__form">
      {/* -=-=-=-=-=-=-=-ITEMS DETAILS CONTAINER-=-=-==-=-= */}
      <div className="Inventory__details-container">
        <h3 className="Inventory__subheader-title">Item Details</h3>
        {/* =-=-=-=-=-ITEM NAME-=-==-=- */}
        <div className="Inventory__detail-form">
          <label htmlFor="name" className="Inventory__detail-label">
            Item Name
          </label>
          <input
            type="text"
            className="Inventory__detail-input"
            placeholder="Item Name"
            id="name"
            name="itemname"
          />
          {/* =-=-=-=-=-DESCRIPTION-=-==-=- */}
          <label htmlFor="description" className="Inventory__detail-label">
            Description
          </label>
          <textarea
            type="text"
            className="Inventory__detail-textarea"
            placeholder="Please enter a brief item description..."
            id="description"
            name="description"
          ></textarea>
          {/* =-=-=-=-=-CATEGORY-=-==-=- */}
          <label htmlFor="category" className="Inventory__detail-label">
            Category
          </label>
          <div className="Inventory__select-container">
            <select name="category" id="category" className="category__select">
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

      {/* -=-=-=-=-=-=-=-ITEMS AVAILABILITY CONTAINER-=-=-==-=-= */}
      <div className="Inventory__availability-container">
        <div className="Inventory__availability-form">
          <h3 className="Inventory__subheader-title">Item availability</h3>
          {/* =-=-=-=-=-RADIO BUTTONS-=-==-=- */}
          <label htmlFor="status" className="Inventory__detail-label">
            Status
          </label>
          <div className="stock__status">
            <input
              type="radio"
              id="instock"
              name="status"
              value="In Stock"
              defaultChecked
            />
            <label htmlFor="instock" className="radio__button">
              In Stock
            </label>

            <input
              type="radio"
              id="outofstock"
              name="status"
              value="Out of Stock"
            />
            <label htmlFor="outofstock" className="radio__button">
              Out of Stock
            </label>
          </div>
          {/* =-=-=-=-=-QUANTITY-=-==-=- */}
          <label htmlFor="quantity" className="Inventory__detail-label">
            Quantity
          </label>
          <input
            type="text"
            className="Inventory__quantity"
            placeholder="0"
            id="quantity"
            name="quantity"
          />
        </div>

        {/* =-=-=-=-=-WAREHOUSE-=-==-=- */}
        <label htmlFor="category" className="Inventory__detail-label">
          Warehouse
        </label>
        <div className="Inventory__select-container">
          <select name="warehouse" id="warehouse" className="warehouse__select">
            <option value="Select">Please select</option>
          </select>
        </div>
      </div>
    </form>
  );
}

export default InventoryForm;
