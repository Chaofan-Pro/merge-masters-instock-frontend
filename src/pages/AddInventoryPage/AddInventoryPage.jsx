import "./AddInventoryPage.scss";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import { Link } from "react-router-dom";
import React from "react";

function AddInventory() {
  return (
    <div className="addInventory">
      <div className="addInventory__subheader-container">
        <Link to="/inventory">
          <img src={backArrow} alt="back arrow" className="back-arrow" />
        </Link>
        <h2 className="addInventory__title">Add New Inventory Item</h2>
      </div>

      <form className="inventory__form">
        {/* -=-=-=-=-=-=-=-ITEMS DETAILS CONTAINER-=-=-==-=-= */}
        <div className="inventory__details-container">
          <h3 className="inventory__subheader-title">Item Details</h3>
          {/* =-=-=-=-=-ITEM NAME-=-==-=- */}
          <div className="inventory__detail-form">
            <label htmlFor="name" className="inventory__detail-label">
              Item Name
            </label>
            <input
              type="text"
              className="inventory__detail-input"
              placeholder="Item Name"
              id="name"
              name="itemname"
            />
            {/* =-=-=-=-=-DESCRIPTION-=-==-=- */}
            <label htmlFor="description" className="inventory__detail-label">
              Description
            </label>
            <textarea
              type="text"
              className="inventory__detail-textarea"
              placeholder="Please enter a brief item description..."
              id="description"
              name="description"
            ></textarea>
            {/* =-=-=-=-=-CATEGORY-=-==-=- */}
            <label htmlFor="category" className="inventory__detail-label">
              Category
            </label>
            <div className="inventory__select-container">
              <select
                name="category"
                id="category"
                className="category__select"
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

        {/* -=-=-=-=-=-=-=-ITEMS AVAILABILITY CONTAINER-=-=-==-=-= */}
        <div className="inventory__availability-container">
          <div className="inventory__availability-form">
            <h3 className="inventory__subheader-title">Item availability</h3>
            {/* =-=-=-=-=-RADIO BUTTONS-=-==-=- */}
            <label htmlFor="status" className="inventory__detail-label">
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
            <label htmlFor="quantity" className="inventory__detail-label">
              Quantity
            </label>
            <input
              type="text"
              className="inventory__quantity"
              placeholder="0"
              id="quantity"
              name="quantity"
            />
          </div>

          {/* =-=-=-=-=-WAREHOUSE-=-==-=- */}
          <label htmlFor="category" className="inventory__detail-label">
            Warehouse
          </label>
          <div className="inventory__select-container">
            <select
              name="warehouse"
              id="warehouse"
              className="warehouse__select"
            >
              <option value="Select">Please select</option>
              <option value="Manhattan">Manhattan</option>
              <option value="Washington">Washington</option>
              <option value="Jersey">Jersey</option>
              <option value="SF">SF</option>
              <option value="Santa Monica">Santa Monica</option>
              <option value="Seattle">Seattle</option>
              <option value="Miami">Miami</option>
              <option value="Boston">Boston</option>
            </select>
          </div>
        </div>
      </form>

      {/* =-=-=-=-=-=-BUTTONS-=-=-=-==- */}
      <div className="buttons">
        <Link to="/inventory" className="cancel__button">
          Cancel
        </Link>
        <button
          type="submit"
          form="form"
          className="add__button addInventory__button"
        >
          + Add Item
        </button>
      </div>
    </div>
  );
}

export default AddInventory;
