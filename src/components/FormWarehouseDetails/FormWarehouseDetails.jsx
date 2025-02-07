import "./FormWarehouseDetails.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const FormWarehouseDetails = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const { id } = useParams(); // Get warehouse ID from URL
  const [warehouse, setWarehouse] = useState(null);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPosition, setContactPosition] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [isNameValid, setNameValid] = useState(true);
  const [isAddressValid, setAddressValid] = useState(true);
  const [isCityValid, setCityValid] = useState(true);
  const [isCountryValid, setCountryValid] = useState(true);
  const [isContactNameValid, setContactNameValid] = useState(true);
  const [isContactPositionValid, setContactPositionValid] = useState(true);
  const [isPhoneValid, setPhoneValid] = useState(true);
  const [isEmailValid, setEmailValid] = useState(true);

  const fetchWarehouseDetail = async () => {
    try {
      const { data } = await axios.get(baseUrl + `/api/warehouses/${id}`);
      console.log(data);
      setWarehouse(data);
      setAddress(data.address);
      setName(data.warehouse_name);
      setCity(data.city);
      setCountry(data.country);
      setContactName(data.contact_name);
      setContactPosition(data.contact_position);
      setPhone(data.contact_phone);
      setEmail(data.contact_email);
    } catch (error) {
      console.error("ERROR: " + error);
    }
  };
  useEffect(() => {
    fetchWarehouseDetail();
  }, [id]);

  // if (!warehouse) return <p>No Warehouse Detail Found</p>;

  const changeNameHandle = (e) => {
    e.preventDefault();
    setName(e.target.value);
    setNameValid(true);
  };
  const changeAddressHandle = (e) => {
    e.preventDefault();
    setAddress(e.target.value);
    setAddressValid(true);
  };
  const changeCityHandle = (e) => {
    e.preventDefault();
    setCity(e.target.value);
    setCityValid(true);
  };
  const changeCountryHandle = (e) => {
    e.preventDefault();
    setCountry(e.target.value);
  };
  const changeContactNameHandle = (e) => {
    e.preventDefault();
    setContactName(e.target.value);
    setContactNameValid(true);
  };
  const changeContactPositionHandle = (e) => {
    e.preventDefault();
    setContactPosition(e.target.value);
    setContactPositionValid(true);
  };
  const changePhoneHandle = (e) => {
    e.preventDefault();
    setPhone(e.target.value);
    setPhoneValid(true);
  };
  const changeEmailHandle = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    setEmailValid(true);
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    setNameValid(!!name);
    setAddressValid(!!address);
    setCityValid(!!city);
    setCountryValid(!!country);
    setContactNameValid(!!contactName);
    setContactPositionValid(!!contactPosition);
    setPhoneValid(!!phone);
    setEmailValid(!!email);

    if (
      name &&
      address &&
      city &&
      country &&
      contactName &&
      contactPosition &&
      phone &&
      email
    ) {
      try {
        await axios.put(baseUrl + `/api/warehouses/${id}`, {
          warehouse_name: name,
          address,
          city,
          country,
          contact_name: contactName,
          contact_position: contactPosition,
          contact_phone: phone,
          contact_email: email,
        });
        fetchWarehouseDetail();
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <form onSubmit={submitHandle}>
      <article className="form">
        <h3 className="form__title">Warehouse Details</h3>
        <label className="form__lable" htmlFor="warehouse_name">
          Warehouse Name
        </label>
        <input
          className={`form__input ${isNameValid ? "" : "form__input--error"} `}
          type="text"
          id="warehouse_name"
          value={name}
          onChange={changeNameHandle}
          placeholder={name}
        />
        <div className={`${isNameValid ? "hide" : "form__error"} `}>
          <img
            className="form__error-icon"
            src="/src/assets/icons/error-24px.svg"
            alt="error icon"
          />
          <p className="form__error-text">This field is required</p>
        </div>
        <label className="form__lable" htmlFor="address">
          Street Address
        </label>
        <input
          className="form__input"
          type="text"
          id="address"
          value={address}
          onChange={changeAddressHandle}
          placeholder={address}
        />
        <div className={`${isAddressValid ? "hide" : "form__error"} `}>
          <img
            className="form__error-icon"
            src="/src/assets/icons/error-24px.svg"
            alt="error icon"
          />
          <p className="form__error-text">This field is required</p>
        </div>
        <label className="form__lable" htmlFor="city">
          City
        </label>
        <input
          className="form__input"
          type="text"
          id="city"
          value={city}
          onChange={changeCityHandle}
          placeholder={city}
        />
        <div className={`${isCityValid ? "hide" : "form__error"} `}>
          <img
            className="form__error-icon"
            src="/src/assets/icons/error-24px.svg"
            alt="error icon"
          />
          <p className="form__error-text">This field is required</p>
        </div>
        <label className="form__lable" htmlFor="country">
          Country
        </label>
        <input
          className="form__input"
          type="text"
          id="country"
          value={country}
          onChange={changeCountryHandle}
          placeholder={country}
        />
        <div className={`${isCountryValid ? "hide" : "form__error"} `}>
          <img
            className="form__error-icon"
            src="/src/assets/icons/error-24px.svg"
            alt="error icon"
          />
          <p className="form__error-text">This field is required</p>
        </div>
      </article>
      <article className="form">
        <h3 className="form__title">Contact Details</h3>
        <label className="form__lable" htmlFor="contact_name">
          Contact Name
        </label>
        <input
          className="form__input"
          type="text"
          id="contact_name"
          value={contactName}
          onChange={changeContactNameHandle}
          placeholder={contactName}
        />
        <label className="form__lable" htmlFor="contact_position">
          Position
        </label>
        <input
          className="form__input"
          type="text"
          id="contact_position"
          placeholder={contactPosition}
          onChange={changeContactPositionHandle}
          value={contactPosition}
        />
        <label className="form__lable" htmlFor="contact_phone">
          Phone Number
        </label>
        <input
          className="form__input"
          type="tel"
          id="contact_phone"
          placeholder={phone}
          onChange={changePhoneHandle}
          value={phone}
        />
        <label className="form__lable" htmlFor="contact_email">
          Email
        </label>
        <input
          className="form__input"
          type="email"
          id="contact_email"
          placeholder={email}
          onChange={changeEmailHandle}
          value={email}
        />
      </article>
      <button>Save</button>
    </form>
  );
};

export default FormWarehouseDetails;
