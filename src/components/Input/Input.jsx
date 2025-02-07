import "./Input.scss";

const Input = ({ label, id, value, isInputValid, changeInputHandle }) => {
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
        placeholder={value}
      />
      {!isInputValid && (
        <div className="form__error">
          <img
            className="form__error-icon"
            src="/src/assets/icons/error-24px.svg"
            alt="error icon"
          />
          <p className="form__error-text">This field is required</p>
        </div>
      )}
    </>
  );
};

export default Input;
