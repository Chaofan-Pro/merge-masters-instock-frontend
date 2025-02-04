import backArrow from "../../assets/icons/arrow_back-24px.svg";
import edit from "../../assets/icons/edit-white-24px.svg";
import "./WarehouseDetails.scss";
import axios from "axios";
const baseUrl = import.meta.env.VITE_APP_URL;

const WarehouseDetails = () => {
  return (
    <section className="warehouse-detail">
      <div className="warehouse-detail__heading-container">
        <img
          src={backArrow}
          alt="Back Arrow Icon"
          className="warehouse-detail__back-icon"
        />
        <h2 className="warehouse-detail__name">WAREHOUSE NAME</h2>
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
