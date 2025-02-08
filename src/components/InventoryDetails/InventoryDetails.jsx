import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit-white-24px.svg";
import axios from "axios";
import "./InventoryDetails.scss";

const InventoryDetails = ({ fetchInventoryDetail, inventory }) => {
  const { id } = useParams();

  useEffect(() => {
    fetchInventoryDetail(id);
  }, [id]);

  if (!inventory) return <p>No Inventory Detail Found</p>;
  return (
    <section className="inventory-detail">
      <div className="main-heading">
        <div className="main-heading__container">
          <Link to="/inventory">
            <img
              src={backArrow}
              alt="Back Arrow Icon"
              className="main-heading__back-icon"
            />
          </Link>
          <h1 className="main-heading__name">{inventory.item_name}</h1>
        </div>
        <Link to={`/inventory/edit/${id}`}>
          <button className="main-heading__edit-button">
            <img src={edit} alt="Edit Icon" />
            <span className="main-heading__edit-text">Edit</span>
          </button>
        </Link>
      </div>
      <div className="inventory-details">
        <div className="inventory-details__container inventory-details__container--tablet">
          <div>
            <h4 className="inventory-details__heading">ITEM DESCRIPTION: </h4>
            <p className="inventory-details__text">{inventory.description}</p>
          </div>
          <div>
            <h4 className="inventory-details__heading">CATEGORY: </h4>
            <p className="inventory-details__text ">{inventory.category}</p>
          </div>
        </div>
        <div className="inventory-details__container inventory-details__container--divider">
          <div className="inventory-details__status-qty-container">
            <div className="inventory-details__sub-container">
              <h4 className="inventory-details__heading">STATUS: </h4>
              <p
                className={`inventory-details__text ${
                  inventory.status === "In Stock"
                    ? "status-green"
                    : "status-red"
                }`}
              >
                {inventory.status.toUpperCase()}
              </p>
            </div>
            <div className="inventory-details__sub-container">
              <h4 className="inventory-details__heading">QUANTITY: </h4>
              <p className="inventory-details__text ">{inventory.quantity}</p>
            </div>
          </div>
          <div>
            <h4 className="inventory-details__heading">WAREHOUSE: </h4>
            <p className="inventory-details__text ">
              {inventory.warehouse_name}
            </p>
          </div>
        </div>
        {/* <div className="inventory-details__container"></div> */}
      </div>
    </section>
  );
};

export default InventoryDetails;
