import "./AddInventory.scss";
import backArrow from "../../assets/icons/Arrow_Forest-Green.svg";
import { Link } from "react-router-dom";
import React from "react";

function AddInventory() {
  return (
    <div className="addInventory">
      <div className="addInventory__subheader-container">
        <Link to="/inventory">
          <img src={backArrow} alt="back arrow" className="back arrow" />
        </Link>
        <h2 className="addInventory__subheader-title">
          Add New Inventory Item
        </h2>
      </div>
      {/* =-=-=-=-=-=-FORM-=-=-=-==- */}
      <form>
        {/* -=-=-=-=-=-=-=-ITEMS DETAILS CONTAINER-=-=-==-=-= */}
        <div className="addInventory__details-container">
          <div className="addInventory__details-form">
            <h3 className="addInventory__detail-title">Item Details</h3>
            {/* =-=-=-=-=-ITEM NAME-=-==-=- */}
            <label htmlFor="name" className="addInventory__detail-label">
              Item Name
            </label>
            <input
              type="text"
              className="addInventory__detail-input"
              placeholder="Item Name"
              id="name"
              name="itemname"
            />

            {/* =-=-=-=-=-DESCRIPTION-=-==-=- */}
            <label htmlFor="description" className="addInventory__detail-label">
              Description
            </label>
            <input
              type="text"
              className="addInventory__detail-textarea"
              placeholder="Please enter a brief item description..."
              id="description"
              name="description"
            />

            {/* =-=-=-=-=-CATEGORY-=-==-=- */}
            <label htmlFor="category" className="addInventory__detail-label">
              Category
            </label>
            <div className="addInventory__category-select">
              <select
                name="category"
                id="category"
                className="category__select"
              >
                <option value="">Please Select</option>
                <option value="electronics">Electronics</option>
                <option value="gear">Gear</option>
                <option value="apparel">Apparel</option>
                <option value="accessories">Accessories</option>
                <option value="health">Health</option>
              </select>
            </div>
          </div>
        </div>

        {/* -=-=-=-=-=-=-=-ITEMS AVAILABILITY CONTAINER-=-=-==-=-= */}
        <div className="addInventory__availability-container">
          <div className="addInventory__availability-form">
            <h3 className="addInventory__availability-title">
              Item availability
            </h3>
            {/* =-=-=-=-=-RADIO BUTTONS-=-==-=- */}
            <label htmlFor="status" className="addInventory__detail-label">
              Status
            </label>
            <div>
              <input
                type="radio"
                id="instock"
                name="status"
                value="In Stock"
                defaultChecked
              />
              <label htmlFor="instock" className="radio__button">
                In stock
              </label>
            </div>

            <div>
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

            <label htmlFor="description" className="addInventory__detail-label">
              Description
            </label>
            <input
              type="text"
              className="addInventory__detail-textarea"
              placeholder="Please enter a brief item description..."
              id="description"
              name="description"
            />
          </div>
        </div>
      </form>
      {/* =-=-=-=-=-=-BUTTONS-=-=-=-==- */}
    </div>
  );
}

export default AddInventory;
