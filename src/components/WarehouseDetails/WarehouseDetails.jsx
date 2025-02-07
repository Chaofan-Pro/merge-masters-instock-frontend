import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit-white-24px.svg";
import "./WarehouseDetails.scss";

const baseUrl = import.meta.env.VITE_API_URL;

const WarehouseDetails = ({ warehouse, fetchWarehouseDetail }) => {
  const { id } = useParams(); // Get warehouse ID from URL

  useEffect(() => {
    fetchWarehouseDetail(id);
  }, [id]);

  if (!warehouse) return <p>No Warehouse Detail Found</p>;

  return (
    <section className="warehouse-detail">
      <div className="main-heading">
        <div className="main-heading__container">
          <Link to="/warehouses">
            <img
              src={backArrow}
              alt="Back Arrow Icon"
              className="main-heading__back-icon"
            />
          </Link>
          <h1 className="main-heading__name">{warehouse.warehouse_name}</h1>
        </div>
        <Link to="/warehouses/edit/:id">
          <button className="main-heading__edit-button">
            <img src={edit} alt="Edit Icon" />
            <span className="main-heading__edit-text">Edit</span>
          </button>
        </Link>
      </div>
      <div className="warehouse-details">
        <div className="warehouse-details__address-container">
          <h4 className="warehouse-details__heading">WAREHOUSE ADDRESS: </h4>
          <p className="warehouse-details__text warehouse-details__text--mobile">{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</p>
          <p className="warehouse-details__text warehouse-details__text--tablet">{`${warehouse.address},`}</p>
          <p className="warehouse-details__text warehouse-details__text--tablet">{`${warehouse.city}, ${warehouse.country}`}</p>
        </div>
        <div className="warehouse-details__contact-container">
          <div className="warehouse-details__contact-details">
            <h4 className="warehouse-details__heading">CONTACT NAME: </h4>
            <p className="warehouse-details__text">{warehouse.contact_name}</p>
            <p className="warehouse-details__text">
              {warehouse.contact_position}
            </p>
          </div>
          <div className="warehouse-details__contact-details">
            <h4 className="warehouse-details__heading">
              CONTACT INFORMATION:{" "}
            </h4>
            <p className="warehouse-details__text">{warehouse.contact_phone}</p>
            <p className="warehouse-details__text">{warehouse.contact_email}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WarehouseDetails;
