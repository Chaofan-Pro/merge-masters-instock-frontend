import "./EditWarehousePage.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import BottomButtons from "../../components/BottomButtons/BottomButtons";

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
  const changeInputHandle = (e) => {
    e.preventDefault();
    setInputValid(true);
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
      !!name &&
      !!address &&
      !!city &&
      !!country &&
      !!contactName &&
      !!contactPosition &&
      !!phone &&
      !!email
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
    <>
      <section className="main-header">
        <Link className="link" to={`${baseUrl}/warehouses/${id}`}>
          <img
            className="main-heading__back-icon"
            src="/src/assets/icons/arrow_back-24px.svg"
            alt="back arrow"
          />
        </Link>
        <h3 className="main-heading__name">Edit Warehouse</h3>
      </section>
      <form className="form__container" onSubmit={submitHandle}>
        <article className="form">
          <h3 className="form__title">Warehouse Details</h3>
          <Input
            label="Warehouse Name"
            id="warehouse_name"
            value={name}
            isInputValid={isNameValid}
            changeInputHandle={changeNameHandle}
          />
          <Input
            label="Street Address"
            id="address"
            value={address}
            isInputValid={isAddressValid}
            changeInputHandle={changeAddressHandle}
          />
          <Input
            label="City"
            id="city"
            value={city}
            isInputValid={isCityValid}
            changeInputHandle={changeCityHandle}
          />
          <Input
            label="Country"
            id="country"
            value={country}
            isInputValid={isCountryValid}
            changeInputHandle={changeCountryHandle}
          />
        </article>
        <article className="form__low">
          <h3 className="form__title">Contact Details</h3>
          <Input
            label="Contact Name"
            id="contact_name"
            value={contactName}
            isInputValid={isContactNameValid}
            changeInputHandle={changeContactNameHandle}
          />
          <Input
            label="Position"
            id="contact_position"
            value={contactPosition}
            isInputValid={isContactPositionValid}
            changeInputHandle={changeContactPositionHandle}
          />
          <Input
            label="Phone Number"
            id="contact_phone"
            value={phone}
            isInputValid={isPhoneValid}
            changeInputHandle={changePhoneHandle}
          />
          <Input
            label="Email"
            id="contact_email"
            value={email}
            isInputValid={isEmailValid}
            changeInputHandle={changeEmailHandle}
          />
        </article>
      </form>
      <BottomButtons link={`${baseUrl}/warehouses/${id}`} text="Save" />
    </>
  );
};

export default FormWarehouseDetails;
