import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import editIcon from "../../assets/icons/edit-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import rightArrowIcon from "../../assets/icons/chevron_right-24px.svg";
import CustomModal from "../CustomModal/CustomModal";
import axios from "axios";
import "./WarehouseInventory.scss";

const baseUrl = import.meta.env.VITE_API_URL;

const WarehouseInventory = () => {
  const { id } = useParams();
  const [warehouseInventory, setWarehouseInventory] = useState(null);

  const fetchWarehouseInventoryDetail = async (id) => {
    try {
      const warehouseInventoryRes = await axios.get(
        baseUrl + `/api/warehouses/${id}/inventories`
      );
      setWarehouseInventory(warehouseInventoryRes.data);
    } catch (error) {
      console.error("ERROR: " + error);
    }
  };
  useEffect(() => {
    fetchWarehouseInventoryDetail(id);
  }, [id]);

  if (!warehouseInventory) return <p>No Warehouse Inventory Details Found</p>;
  return (
    <section className="inventory-details">
      <div className="inventory-heading-container">
        <h4 className="inventory-heading__text">INVENTORY ITEM</h4>
        <h4 className="inventory-heading__text">CATEGORY</h4>
        <h4 className="inventory-heading__text">STATUS</h4>
        <h4 className="inventory-heading__text">QUANTITY</h4>
        <h4 className="inventory-heading__text inventory-heading__text--tablet">
          ACTIONS
        </h4>
      </div>
      {warehouseInventory.map((item, index) => (
        <div key={index} className="inventory-item">
          <Link to={`/inventory/${id}`}>
            <h4 className="inventory-item__text inventory-item__text--indigo">
              {item.item_name}
              <img
                src={rightArrowIcon}
                alt="Go to inventory"
                className="inventory-item__arrow-icon"
              />
            </h4>
          </Link>
          <p className="inventory-item__text">{item.category}</p>
          <div className="inventory-item__status-tag">
            <h4
              className={`${
                item.status === "In Stock" ? "status-green" : "status-red"
              }`}
            >
              {item.status.toUpperCase()}
            </h4>
          </div>
          <p className="inventory-item__text">{item.quantity}</p>
          <div className="inventory-item__actions">
            {/* Link to Modal */}
            <button className="inventory-item__action-icon">
              <img src={deleteIcon} alt="Delete" />
            </button>
            <Link to={`/inventory/edit/${id}`}>
              <button className="inventory-item__action-icon">
                <img src={editIcon} alt="Edit" />
              </button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WarehouseInventory;
