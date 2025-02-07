import "./BottomButtons.scss";
import { Link } from "react-router-dom";

const BottomButtons = ({ link, img, text }) => {
  return (
    <div className="button__container">
      <Link to={link} className="button__cancel">
        Cancel
      </Link>
      <button type="submit" form="form" className="button__save">
        <img src={img} alt="" />
        {text}
      </button>
    </div>
  );
};
export default BottomButtons;
