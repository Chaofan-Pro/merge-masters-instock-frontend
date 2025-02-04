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
          baseUrl + `warehouses/${id}`
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
      <div className="warehouse-detail__heading-container">
        <img
          src={backArrow}
          alt="Back Arrow Icon"
          className="warehouse-detail__back-icon"
        />
        <h2 className="warehouse-detail__name">{warehouse.warehouse_name}</h2>
        <img
          src={edit}
          alt="Edit Icon"
          className="warehouse-detail__edit-icon"
        />
      </div>
    </section>
  );
};

export default WarehouseDetails;
