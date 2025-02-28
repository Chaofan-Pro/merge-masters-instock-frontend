import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import editIcon from "../../assets/icons/edit-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import rightArrowIcon from "../../assets/icons/chevron_right-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import axios from "axios";
import React from "react";
import InventoryModal from "../InventoryModal/InventoryModal";
import "./WarehouseInventory.scss";

const baseUrl = import.meta.env.VITE_API_URL;

const WarehouseInventory = () => {
  const { id } = useParams();
  const [warehouseInventory, setWarehouseInventory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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

  const closeModal = () => setIsModalOpen(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const deleteInventory = async () => {
    if (!selectedItem) {
      console.error("No item selected for deletion");
      return;
    }

    try {
      await axios.delete(baseUrl + `/api/inventories/${selectedItem.id}`);
      setWarehouseInventory(
        warehouseInventory.filter((item) => item.id !== selectedItem.id)
      );
      closeModal();
    } catch (error) {
      console.error("Failed to delete inventory item:", error);
    }
  };

  if (!warehouseInventory) return <p>No Warehouse Inventory Details Found</p>;
  return (
    <section className="warehouse-inventory-details">
      <div className="inventory-heading-container">
        <div className="inventory-heading">
          <h4 className="inventory-heading__text">INVENTORY ITEM</h4>
          <img
            className="inventory-heading__sort-icon"
            src={sortIcon}
            alt="Sort"
          />
        </div>
        <div className="inventory-heading">
          <h4 className="inventory-heading__text">CATEGORY</h4>
          <img
            className="inventory-heading__sort-icon"
            src={sortIcon}
            alt="Sort"
          />
        </div>
        <div className="inventory-heading">
          <h4 className="inventory-heading__text">STATUS</h4>
          <img
            className="inventory-heading__sort-icon"
            src={sortIcon}
            alt="Sort"
          />
        </div>
        <div className="inventory-heading">
          <h4 className="inventory-heading__text">QUANTITY</h4>
          <img
            className="inventory-heading__sort-icon"
            src={sortIcon}
            alt="Sort"
          />
        </div>
        <h4 className="inventory-heading__text inventory-heading__text--tablet">
          ACTIONS
        </h4>
      </div>
      {warehouseInventory.map((item, index) => (
        <React.Fragment key={index}>
          <div key={index} className="single-inventory-item">
            <div className="single-inventory-item--row">
              <div className="single-inventory-item__detail">
                <h4 className="inventory-heading__text">INVENTORY ITEM</h4>
                <Link to={`/inventory/${item.id}`}>
                  <h4 className="inventory-item__text inventory-item__text--indigo">
                    {item.item_name}
                    <img
                      src={rightArrowIcon}
                      alt="Go to inventory"
                      className="inventory-item__arrow-icon"
                    />
                  </h4>
                </Link>
              </div>
              <div className="single-inventory-item__detail">
                <h4 className="inventory-heading__text">STATUS</h4>
                <div className="inventory-item__status-tag">
                  <h4
                    className={`${
                      item.status === "In Stock" ? "status-green" : "status-red"
                    }`}
                  >
                    {item.status.toUpperCase()}
                  </h4>
                </div>
              </div>
            </div>
            <div className="single-inventory-item--row">
              <div className="single-inventory-item__detail">
                <h4 className="inventory-heading__text">CATEGORY</h4>
                <p className="inventory-item__text">{item.category}</p>
              </div>
              <div className="single-inventory-item__detail">
                <h4 className="inventory-heading__text">QTY</h4>
                <p className="inventory-item__text">{item.quantity}</p>
              </div>
            </div>
            <div className="single-inventory-item--row">
              <button className="single-inventory-item__action-icon">
                <img src={deleteIcon} alt="Delete" />
              </button>
              <Link to={`/inventory/edit/${item.id}`}>
                <button className="single-inventory-item__action-icon">
                  <img src={editIcon} alt="Edit" />
                </button>
              </Link>
            </div>
          </div>

          <div className="inventory-item">
            <Link to={`/inventory/${item.id}`}>
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
              <button
                className="single-inventory-item__action-icon"
                onClick={() => openModal(item)}
              >
                <img src={deleteIcon} alt="Delete" />
              </button>
              <Link to={`/inventory/edit/${item.id}`}>
                <button className="inventory-item__action-icon">
                  <img src={editIcon} alt="Edit" />
                </button>
              </Link>
            </div>
          </div>
        </React.Fragment>
      ))}
      {isModalOpen && selectedItem && (
        <InventoryModal
          inventory={selectedItem}
          closeModal={closeModal}
          deleteInventory={deleteInventory}
        />
      )}
    </section>
  );
};

export default WarehouseInventory;
