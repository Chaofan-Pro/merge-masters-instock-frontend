import "./InputContactDetails.scss";
import axios from "axios";
import { useState } from "react";

const InputContactDetails = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

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
        value={name}
        placeholder="contact.name"
      />
      <label className="form__lable" htmlFor="position">
        Position
      </label>
      <input
        className="form__input"
        type="text"
        id="position"
        placeholder="contact.position"
        value={position}
      />
      <label className="form__lable" htmlFor="phoneNumber">
        Phone Number
      </label>
      <input
        className="form__input"
        type="tel"
        id="phoneNumber"
        placeholder="contact.phoneNumber"
        value={city}
      />
      <label className="form__lable" htmlFor="email">
        Email
      </label>
      <input
        className="form__input"
        type="email"
        id="email"
        placeholder="contact.email"
        value={email}
      />
    </form>
  );
};

export default InputContactDetails;
