import { Link } from "react-router-dom";
import searchIcon from "../../assets/icons/search-24px.svg";
import "./InventoryHeader.scss";

const InventoryHeader = () => {
  return (
    <section className="inventory-header">
      <h1 className="inventory-header__heading">Inventory</h1>
      <div className="search-button-container">
        <div className="inventory-header__search-container">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            className="inventory-header__search"
          />
          <img
            className="inventory-header__search-icon"
            src={searchIcon}
            alt="Search"
          />
        </div>
        <Link to="/inventory/add">
          <button className="inventory-header__add-button">
            + Add New Inventory
          </button>
        </Link>
      </div>
    </section>
  );
};

export default InventoryHeader;
