import "./FormHeader.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/icons/arrow_back-24px.svg";

const FormHeader = ({ backLink, title }) => {
  return (
    <section className="main-header">
      <Link className="link" to={backLink}>
        <img
          className="main-heading__back-icon"
          src={backArrow}
          alt="back arrow"
        />
      </Link>
      <h3 className="main-heading__name">{title}</h3>
    </section>
  );
};

export default FormHeader;
