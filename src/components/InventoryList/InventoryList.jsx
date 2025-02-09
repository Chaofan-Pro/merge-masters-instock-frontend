import { Link } from "react-router-dom";
import editIcon from "../../assets/icons/edit-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import rightArrowIcon from "../../assets/icons/chevron_right-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import React from "react";
import "../../components/WarehouseInventory/WarehouseInventory.scss";

const InventoryList = ({ openModal, inventories }) => {
  return (
    <section className="warehouse-inventory-details">
      <div className="inventory-heading-container">
        <div className="inventory-heading">
          <h4 className="inventory-heading__text">INVENTORY ITEM</h4>
          <img
            className="inventory-heading__sort-icon"
            src={sortIcon}
            alt="Sort"
          />
        </div>
        <div className="inventory-heading">
          <h4 className="inventory-heading__text">CATEGORY</h4>
          <img
            className="inventory-heading__sort-icon"
            src={sortIcon}
            alt="Sort"
          />
        </div>
        <div className="inventory-heading">
          <h4 className="inventory-heading__text">STATUS</h4>
          <img
            className="inventory-heading__sort-icon"
            src={sortIcon}
            alt="Sort"
          />
        </div>
        <div className="inventory-heading">
          <h4 className="inventory-heading__text">QTY</h4>
          <img
            className="inventory-heading__sort-icon"
            src={sortIcon}
            alt="Sort"
          />
        </div>
        <div className="inventory-heading">
          <h4 className="inventory-heading__text">WAREHOUSE</h4>
          <img
            className="inventory-heading__sort-icon"
            src={sortIcon}
            alt="Sort"
          />
        </div>
        <h4 className="inventory-heading__text inventory-heading__text--tablet">
          ACTIONS
        </h4>
      </div>
      {inventories.map((item, index) => (
        <React.Fragment key={index}>
          {/* Inventory List for Mobile */}
          <div className="single-inventory-item">
            <div className="single-inventory-item--row">
              <div className="single-inventory-item__detail">
                <h4 className="inventory-heading__text">INVENTORY ITEM</h4>
                <Link to={`/inventory/${item.id}`}>
                  <h4 className="inventory-item__text inventory-item__text--indigo">
                    {item.item_name}
                    <img
                      src={rightArrowIcon}
                      alt="Go to inventory"
                      className="inventory-item__arrow-icon"
                    />
                  </h4>
                </Link>
              </div>
              <div className="single-inventory-item__detail">
                <h4 className="inventory-heading__text">STATUS</h4>
                <div className="inventory-item__status-tag">
                  <h4
                    className={`${
                      item.status === "In Stock" ? "status-green" : "status-red"
                    }`}
                  >
                    {item.status.toUpperCase()}
                  </h4>
                </div>
              </div>
            </div>
            <div className="single-inventory-item--row">
              <div className="single-inventory-item__detail">
                <h4 className="inventory-heading__text">CATEGORY</h4>
                <p className="inventory-item__text">{item.category}</p>
              </div>
              <div className="single-inventory-item__detail">
                <h4 className="inventory-heading__text">QTY</h4>
                <p className="inventory-item__text">{item.quantity}</p>
              </div>
            </div>
            <div className="single-inventory-item--row">
              <div className="single-inventory-item__detail"></div>
              <div className="single-inventory-item__detail">
                <h4 className="inventory-heading__text">WAREHOUSE</h4>
                <p className="inventory-item__text">{item.warehouse_name}</p>
              </div>
            </div>
            <div className="single-inventory-item--row">
              <button className="single-inventory-item__action-icon" onClick={() => openModal(item)}>
                <img src={deleteIcon} alt="Delete" />
              </button>
              <Link to={`/inventory/edit/${item.id}`}>
                <button className="single-inventory-item__action-icon">
                  <img src={editIcon} alt="Edit" />
                </button>
              </Link>
            </div>
          </div>
          {/* Inventory List for tablet and desktop */}
          <div className="inventory-item">
            <Link to={`/inventory/${item.id}`}>
              <h4 className="inventory-item__text inventory-item__text--indigo">
                {item.item_name}
                <img
                  src={rightArrowIcon}
                  alt="Go to inventory"
                  className="inventory-item__arrow-icon"
                />
              </h4>
            </Link>
            <p className="inventory-item__text">{item.category}</p>
            <div className="inventory-item__status-tag">
              <h4
                className={`${
                  item.status === "In Stock" ? "status-green" : "status-red"
                }`}
              >
                {item.status.toUpperCase()}
              </h4>
            </div>
            <p className="inventory-item__text">{item.quantity}</p>
            <p className="inventory-item__text">{item.warehouse_name}</p>
            <div className="inventory-item__actions">
              <button
                className="inventory__action inventory__action--delete"
                onClick={() => openModal(item)}
              >
                <img src={deleteIcon} alt="Delete" />
              </button>
              <Link to={`/inventory/edit/${item.id}`}>
                <button className="inventory-item__action-icon">
                  <img src={editIcon} alt="Edit" />
                </button>
              </Link>
            </div>
          </div>
        </React.Fragment>
      ))}
    </section>
  );
};

export default InventoryList;
