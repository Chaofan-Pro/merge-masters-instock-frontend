import "./Input.scss";
import Error from "../Error/Error";

const Input = ({ label, id, value, placeholder, isInputValid, changeInputHandle }) => {
  return (
    <>
      <label className="form__label" htmlFor={id}>
        {label}
      </label>
      <input
        className={`form__input ${isInputValid ? "" : "form__input--error"} `}
        type="text"
        id={id}
        value={value}
        onChange={changeInputHandle}
        placeholder={placeholder}
      />
      {!isInputValid && <Error />}
    </>
  );
};

export default Input;
