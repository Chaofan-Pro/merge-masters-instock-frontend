import "./BottomButtons.scss";
import { Link } from "react-router-dom";

const BottomButtons = ({ link, img, text, onSave }) => {
  return (
    <section className="button__container">
      <Link to={link} className="button__cancel">
        Cancel
      </Link>
      <button type="submit" className="button__save" onSave={onSave}>
        <img src={img} alt="" />
        {text}
      </button>
    </section>
  );
};
export default BottomButtons;
