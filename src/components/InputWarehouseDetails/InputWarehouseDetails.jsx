import "./InputWarehouseDetails.scss";
import axios from "axios";
import { useState } from "react";

const InputWarehouseDetails = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

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
        placeholder="warehouse.name"
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

export default InputWarehouseDetails;
