import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import backArrow from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit-white-24px.svg";
import axios from "axios";
import "./WarehouseDetails.scss";

const baseUrl = import.meta.env.VITE_APP_URL;

const WarehouseDetails = () => {
  const { id } = useParams(); // Get warehouse ID from URL
  const navigate = useNavigate();
  const [warehouse, setWarehouse] = useState(null);

  useEffect(() => {
    const fetchWarehouseDetail = async () => {
      try {
        const singleWarehouseRes = await axios.get(
          baseUrl + `api/warehouses/${id}`
        );
        setWarehouse(singleWarehouseRes.data);
      } catch (error) {
        console.error("ERROR: " + error);
      }
    };
    fetchWarehouseDetail();
  }, [id]);

  if (!warehouse) return <p>No Warehouse Detail Found</p>;

  return (
    <section className="warehouse-detail">
      <div className="warehouse-heading">
        <div className="warehouse-heading__container">
          <img
            src={backArrow}
            alt="Back Arrow Icon"
            className="warehouse-heading__back-icon"
          />
          <h1 className="warehouse-heading__name">
            {warehouse.warehouse_name}
          </h1>
        </div>
        <button className="warehouse-heading__edit-button">
          <img src={edit} alt="Edit Icon" />
          <span className="warehouse-heading__edit-text">Edit</span>
        </button>
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
