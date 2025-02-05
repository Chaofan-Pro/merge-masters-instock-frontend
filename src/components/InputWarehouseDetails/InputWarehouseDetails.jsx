import "./InputWarehouseDetails.scss";
import axios from "axios";
import { useState } from "react";

const InputWarehouseDetails = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div>
      <h3>Warehouse Details</h3>
      <label className="lable" htmlFor="name">
        Warehouse Name
      </label>
      <input className="input" type="text" id="name" value={name} />
      <label className="lable" htmlFor="Address">
        Street Address
      </label>
      <input className="input" type="text" id="name" value={address} />
      <label className="lable" htmlFor="city">
        City
      </label>
      <input className="input" type="text" id="name" value={city} />
      <label className="lable" htmlFor="country">
        Country
      </label>
      <input className="input" type="text" id="name" value={country} />
    </div>
  );
};

export default InputWarehouseDetails;
