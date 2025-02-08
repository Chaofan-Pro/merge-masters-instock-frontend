import "./AddWarehousePage.scss";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/Input/Input";
import BottomButtons from "../../components/BottomButtons/BottomButtons";
import backArrow from "../../assets/icons/arrow_back-24px.svg";

const AddWarehousePage = ({ baseUrl }) => {
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

  const changeNameHandle = (e) => {
    setName(e.target.value);
    setNameValid(true);
  };
  const changeAddressHandle = (e) => {
    setAddress(e.target.value);
    setAddressValid(true);
  };
  const changeCityHandle = (e) => {
    setCity(e.target.value);
    setCityValid(true);
  };
  const changeCountryHandle = (e) => {
    setCountry(e.target.value);
    setCountryValid(true);
  };
  const changeContactNameHandle = (e) => {
    setContactName(e.target.value);
    setContactNameValid(true);
  };
  const changeContactPositionHandle = (e) => {
    setContactPosition(e.target.value);
    setContactPositionValid(true);
  };
  const changePhoneHandle = (e) => {
    setPhone(e.target.value);
    setPhoneValid(true);
  };
  const changeEmailHandle = (e) => {
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
        await axios.post(baseUrl + `/api/warehouses`, {
          warehouse_name: name,
          address,
          city,
          country,
          contact_name: contactName,
          contact_position: contactPosition,
          contact_phone: phone,
          contact_email: email,
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  const warehouseDetails = [
    {
      label: "Warehouse Name",
      id: "warehouse_name",
      value: name,
      isInputValid: isNameValid,
      changeInputHandle: changeNameHandle,
    },
    {
      label: "Street Address",
      id: "address",
      value: address,
      isInputValid: isAddressValid,
      changeInputHandle: changeAddressHandle,
    },
    {
      label: "City",
      id: "city",
      value: city,
      isInputValid: isCityValid,
      changeInputHandle: changeCityHandle,
    },
    {
      label: "Country",
      id: "country",
      value: country,
      isInputValid: isCountryValid,
      changeInputHandle: changeCountryHandle,
    },
  ];
  const contactDetails = [
    {
      label: "Contact Name",
      id: "contact_name",
      value: contactName,
      isInputValid: isContactNameValid,
      changeInputHandle: changeContactNameHandle,
    },
    {
      label: "Position",
      id: "contact_position",
      value: contactPosition,
      isInputValid: isContactPositionValid,
      changeInputHandle: changeContactPositionHandle,
    },
    {
      label: "Phone Number",
      id: "contact_phone",
      value: phone,
      isInputValid: isPhoneValid,
      changeInputHandle: changePhoneHandle,
    },
    {
      label: "Email",
      id: "contact_email",
      value: email,
      isInputValid: isEmailValid,
      changeInputHandle: changeEmailHandle,
    },
  ];

  return (
    <>
      <section className="main-header">
        <Link className="link" to={`/warehouses`}>
          <img
            className="main-heading__back-icon"
            src={backArrow}
            alt="back arrow"
          />
        </Link>
        <h3 className="main-heading__name">Edit Warehouse</h3>
      </section>
      <form onSubmit={submitHandle}>
        <section className="form">
          <article className="form__left">
            <h3 className="form__title">Warehouse Details</h3>
            {warehouseDetails.map((warehouseDetail) => (
              <Input
                key={warehouseDetail.id}
                label={warehouseDetail.label}
                id={warehouseDetail.id}
                value={warehouseDetail.value}
                isInputValid={warehouseDetail.isInputValid}
                changeInputHandle={warehouseDetail.changeInputHandle}
              />
            ))}
          </article>
          <article className="form__right">
            <h3 className="form__title">Contact Details</h3>
            {contactDetails.map((contactDetail) => (
              <Input
                key={contactDetail.id}
                label={contactDetail.label}
                id={contactDetail.id}
                value={contactDetail.value}
                isInputValid={contactDetail.isInputValid}
                changeInputHandle={contactDetail.changeInputHandle}
              />
            ))}
          </article>
        </section>
        <BottomButtons link={`/warehouses`} text="Save" />
      </form>
    </>
  );
};

export default AddWarehousePage;
