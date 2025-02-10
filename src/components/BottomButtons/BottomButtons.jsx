import "./BottomButtons.scss";
import { Link } from "react-router-dom";

const BottomButtons = ({ link, text, onClick }) => {
  return (
    <section className="button__container">
      <Link to={link} className="button__cancel">
        Cancel
      </Link>
      <button type="submit" className="button__save" onClick={onClick}>
        {text}
      </button>
    </section>
  );
};
export default BottomButtons;
