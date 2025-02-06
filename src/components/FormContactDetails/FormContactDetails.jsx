import "./FormContactDetails.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FormContactDetails = () => {
  // const [name, setName] = useState("");
  // const [position, setPosition] = useState("");
  // const [city, setCity] = useState("");
  // const [country, setCountry] = useState("");
  const baseUrl = import.meta.env.VITE_API_URL;

  const { id } = useParams(); // Get warehouse ID from URL
  const [warehouse, setWarehouse] = useState(null);

  const fetchWarehouseDetail = async () => {
    try {
      const singleWarehouseRes = await axios.get(
        baseUrl + `/api/warehouses/${id}`
      );
      setWarehouse(singleWarehouseRes.data);
      console.log(warehouse);
    } catch (error) {
      console.error("ERROR: " + error);
    }
  };
  useEffect(() => {
    fetchWarehouseDetail();
  }, [id]);

  if (!warehouse) return <p>No Warehouse Detail Found</p>;

  const {
    warehouse_name,
    address,
    city,
    country,
    contact_name,
    contact_position,
    contact_phone,
    contact_email,
  } = warehouse;

  return (
    <form className="form">
      <h3 className="form__title">Contact Details</h3>
      <label className="form__lable" htmlFor="name">
        Contact Name
      </label>
      <input
        className="form__input"
        type="text"
        id="name"
        value={contact_name}
        // placeholder={contact_name}
      />
      <label className="form__lable" htmlFor="position">
        Position
      </label>
      <input
        className="form__input"
        type="text"
        id="position"
        placeholder={contact_position}
        // value={contact_position}
      />
      <label className="form__lable" htmlFor="phoneNumber">
        Phone Number
      </label>
      <input
        className="form__input"
        type="tel"
        id="phoneNumber"
        placeholder={contact_phone}
        // value={contact_phone}
      />
      <label className="form__lable" htmlFor="email">
        Email
      </label>
      <input
        className="form__input"
        type="email"
        id="email"
        placeholder={contact_email}
        // value={contact_email}
      />
    </form>
  );
};

export default FormContactDetails;
