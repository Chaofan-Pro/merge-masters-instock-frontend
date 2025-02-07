import "./WarehousesPage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import { useState } from "react";
import CustomModal from "../../components/CustomModal/CustomModal";

const WarehousePage = () => {
const[warehouses, setWarehouses] = useState([]);
const[selectedWarehouse, setSelectedWarehouse] = useState(null);
const[isModalOpen, setIsModalOpen] = useState(false);

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
