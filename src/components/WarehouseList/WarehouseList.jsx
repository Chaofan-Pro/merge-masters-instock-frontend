// import { useState} from "react";
import editIcon from "../../assets/icons/edit-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import searchIcon from "../../assets/icons/search-24px.svg";
import rightArrowIcon from "../../assets/icons/chevron_right-24px.svg";
import TableHeader from "../TableHeader/TableHeader";
import "./WarehouseList.scss";

const API_URL = import.meta.env.VITE_API_URL;

function WarehouseList({ openModal, warehouses }) {
  // const [searchTerm, setSearchTerm] = useState("");
  // const handleSearch = (e) => {
  //   setSearchTerm(e.target.value);
  // };
  // const filteredWarehouses = warehouses.filter((warehouse) =>
  //   warehouse.warehouse_name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div className="warehouse">
      <div className="warehouse__container">
        <div className="warehouse__title-container">
          <h1 className="warehouse__title">Warehouses</h1>
        </div>
        <div className="warehouse__search-container">
          <input
            type="text"
            placeholder="Search..."
            className="warehouse__search"
          />
          <img
            className="warehouse__search-icon"
            src={searchIcon}
            alt="Search"
          />
        </div>

        <button className="warehouse__add-button">+ Add New Warehouse</button>
      </div>
      <div className="warehouse__table-container">
        <TableHeader listClassName="warehouse__table-header" />
      </div>
      <div className="warehouse__list">
        {warehouses.map((warehouse) => (
          <div key={warehouse.id} className="warehouse__card">
            <div className="warehouse__main">
              {/* Warehouse Info */}
              <div className="warehouse__info">
                <p className="warehouse__heading">WAREHOUSE</p>
                <button className="warehouse__name-button">
                  <div className="warehouse__name">
                    {warehouse.warehouse_name}
                  </div>
                  <img
                    src={rightArrowIcon}
                    alt="Go to warehouse"
                    className="warehouse__arrow-icon"
                  />
                </button>
                <p className="warehouse__heading">ADDRESS</p>
                <p className="warehouse__address">
                  {warehouse.address}, {warehouse.city}, {warehouse.country}
                </p>
              </div>

              {/* Contact Info */}
              <div className="warehouse__contact">
                <p className="warehouse__heading">CONTACT NAME</p>
                <p className="warehouse__contact-name">
                  {warehouse.contact_name}
                </p>

                <p className="warehouse__heading">CONTACT INFORMATION</p>
                <div className="warehouse__details">
                  <p className="warehouse__contact-info">
                    {warehouse.contact_phone}
                  </p>
                  <p className="warehouse__contact-info">
                    {warehouse.contact_email}
                  </p>
                </div>
              </div>
            </div>
            {/* Actions */}
            <div className="warehouse__actions">
              <button
                className="warehouse__action warehouse__action--delete"
                onClick={() => openModal(warehouse)}
              >
                <img src={deleteIcon} alt="Delete" />
              </button>
              <button className="warehouse__action warehouse__action--edit">
                <img src={editIcon} alt="Edit" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default WarehouseList;
