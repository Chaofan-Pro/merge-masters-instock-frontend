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

  const [isNameValid, setNameValid] = useState("true");
  const [isAddressValid, setAddressValid] = useState("true");
  const [isCityValid, setCityValid] = useState("true");
  const [isCountryValid, setCountryValid] = useState("true");
  const [isContactNameValid, setContactNameValid] = useState("true");
  const [isContactPositionValid, setContactPositionValid] = useState("true");
  const [isPhoneValid, setPhoneValid] = useState("true");
  const [isEmailValid, setEmailValid] = useState("true");

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
      console.log(warehouse);
    } catch (error) {
      console.error("ERROR: " + error);
    }
  };
  useEffect(() => {
    fetchWarehouseDetail();
  }, []);

  // if (!warehouse) return <p>No Warehouse Detail Found</p>;

  const changeNameHandle = (e) => {
    e.PreventDeault;
    setName(e.target.value);
    setNameValid(true);
  };
  const changeAddressHandle = (e) => {
    e.PreventDeault;
    setAddress(e.target.value);
    setAddressValid(true);
  };
  const changeCityHandle = (e) => {
    e.PreventDeault;
    setCity(e.target.value);
    setCityValid(true);
  };
  const changeCountryHandle = (e) => {
    e.PreventDeault;
    setCountry(e.target.value);
  };
  const changeContactNameHandle = (e) => {
    e.PreventDeault;
    setContactName(e.target.value);
    setContactNameValid(true);
  };
  const changeContactPositionHandle = (e) => {
    e.PreventDeault;
    setContactPosition(e.target.value);
    setContactPositionValid(true);
  };
  const changePhoneHandle = (e) => {
    e.PreventDeault;
    setPhone(e.target.value);
    setPhoneValid(true);
  };
  const changeEmailHandle = (e) => {
    e.PreventDeault;
    setEmailPosition(e.target.value);
    setEmailValid(true);
  };
  const submitHandle = async (e) => {
    e.PreventDeault;
    setNameValid(!!name);
    setAddressValid(!!address);
    setCityValid(!!city);
    setCountryValid(!!country);
    setContactNameValid(!!contactName);
    setContactPositionValid(!!contactPosition);
    setPhoneValid(!!phone);
    setEmailValid(!!email);

    if (
      isNameValid &&
      isAddressValid &&
      isCityValid &&
      isCountryValid &&
      isContactNameValid &&
      isContactPositionValid &&
      isPhoneValid &&
      isEmailValid
    ) {
      try {
        await axios.put(baseUrl + `/api/warehouses/${id}`, {
          name,
          address,
          city,
          country,
          contactName,
          contactPosition,
          phone,
          email,
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
        <label className="form__lable" htmlFor="name">
          Warehouse Name
        </label>
        <input
          className="form__input"
          type="text"
          id="name"
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
        <label className="form__lable" htmlFor="name">
          Contact Name
        </label>
        <input
          className="form__input"
          type="text"
          id="name"
          value={contactName}
          onChange={changeContactNameHandle}
          placeholder={contactName}
        />
        <label className="form__lable" htmlFor="position">
          Position
        </label>
        <input
          className="form__input"
          type="text"
          id="position"
          placeholder={contactPosition}
          onChange={changeContactPositionHandle}
          value={contactPosition}
        />
        <label className="form__lable" htmlFor="phoneNumber">
          Phone Number
        </label>
        <input
          className="form__input"
          type="tel"
          id="phoneNumber"
          placeholder={phone}
          onChange={changePhoneHandle}
          value={phone}
        />
        <label className="form__lable" htmlFor="email">
          Email
        </label>
        <input
          className="form__input"
          type="email"
          id="email"
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
