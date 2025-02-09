import "./WarehousesPage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import CustomModal from "../../components/CustomModal/CustomModal";
import { useState, useEffect } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const WarehousePage = () => {
  const [warehouses, setWarehouses] = useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchWarehouses();
  }, []);

  const fetchWarehouses = () => {
    fetch(`${API_URL}/api/warehouses`)
      .then((response) => response.json())
      .then((data) => setWarehouses(data))
      .catch((error) => console.error("Error getting warehouses:", error));
  };

  const openModal = (warehouse) => {
    setSelectedWarehouse(warehouse);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteWarehouse = (id) => {
    fetch(`${API_URL}/api/warehouses/${id}`, {
      method: "DELETE",
    })
      .then(() => fetchWarehouses())
      .catch((error) => console.error("Error deleting warehouse:", error));
  };

  return (
    <>
      <WarehouseList
        page={"warehouses"}
        openModal={openModal}
        warehouses={warehouses}
      />
      {selectedWarehouse && isModalOpen && (
        <CustomModal
          warehouse={selectedWarehouse}
          closeModal={closeModal}
          deleteWarehouse={deleteWarehouse}
        />
      )}
    </>
  );
};

export default WarehousePage;
