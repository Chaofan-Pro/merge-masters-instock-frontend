import "./EditInventoryPage.scss";
import React from "react";

function EditInventory() {
  return (
    <div className="editInventory">
      <div className="editInventory__subheader-container">
        <Link to="/inventory">
          <img src={backArrow} alt="back arrow" className="back-arrow" />
        </Link>
        <h2 className="editInventory__title">Add New Inventory Item</h2>
      </div>

      {/* =-=-=-=-=-=-FORM-=-=-=-==- */}
      <form className="addInventory__form">
        {/* -=-=-=-=-=-=-=-ITEMS DETAILS CONTAINER-=-=-==-=-= */}
        <div className="addInventory__details-container">
          <h3 className="addInventory__subheader-title">Item Details</h3>
          {/* =-=-=-=-=-ITEM NAME-=-==-=- */}
          <div className="addInventory__detail-form">
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
            <textarea
              type="text"
              className="addInventory__detail-textarea"
              placeholder="Please enter a brief item description..."
              id="description"
              name="description"
            ></textarea>
            {/* =-=-=-=-=-CATEGORY-=-==-=- */}
            <label htmlFor="category" className="addInventory__detail-label">
              Category
            </label>
            <div className="addInventory__select-container">
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
        <div className="addInventory__availability-container">
          <div className="addInventory__availability-form">
            <h3 className="addInventory__subheader-title">Item availability</h3>
            {/* =-=-=-=-=-RADIO BUTTONS-=-==-=- */}
            <label htmlFor="status" className="addInventory__detail-label">
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
                In stock
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
            {/* =-=-=-=-=-QUANTIY-=-==-=- */}
            <label htmlFor="quantity" className="addInventory__detail-label">
              Quantity
            </label>
            <input
              type="text"
              className="addInventory__quantity"
              placeholder="0"
              id="name"
              name="quantity"
            />
          </div>

          {/* =-=-=-=-=-WAREHOUSE-=-==-=- */}
          <label htmlFor="category" className="addInventory__detail-label">
            Warehouse
          </label>
          <div className="addInventory__select-container">
            <select
              name="warehouse"
              id="warehouse"
              className="warehouse__select"
            >
              <option value="Select">Please select</option>
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
          className="save__button editInventory__button"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditInventory;
