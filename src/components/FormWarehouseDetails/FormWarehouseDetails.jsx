import "./FormWarehouseDetails.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FormWarehouseDetails = () => {
  // const [name, setName] = useState("");
  // const [address, setAddress] = useState("");
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
      <h3 className="form__title">Warehouse Details</h3>
      <label className="form__lable" htmlFor="name">
        Warehouse Name
      </label>
      <input
        className="form__input"
        type="text"
        id="name"
        value={name}
        placeholder={warehouse_name}
      />
      <label className="form__lable" htmlFor="address">
        Street Address
      </label>
      <input
        className="form__input"
        type="text"
        id="address"
        placeholder="warehouse.address"
        value={address}
      />
      <label className="form__lable" htmlFor="city">
        City
      </label>
      <input
        className="form__input"
        type="text"
        id="city"
        placeholder="warehouse.city"
        value={city}
      />
      <label className="form__lable" htmlFor="country">
        Country
      </label>
      <input
        className="form__input"
        type="text"
        id="country"
        placeholder="warehouse.country"
        value={country}
      />
    </form>
  );
};

export default FormWarehouseDetails;
