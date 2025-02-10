import { useState, useEffect } from "react";
import InventoryHeader from "../../components/InventoryHeader/InventoryHeader";
import InventoryList from "../../components/InventoryList/InventoryList";
import InventoryModal from "../../components/InventoryModal/InventoryModal";
import "./InventoryPage.scss";

const baseUrl = import.meta.env.VITE_API_URL;

const InventoryPage = () => {
  const [inventories, setInventories] = useState([]);
  const [selectedInventory, setSelectedInventory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchInventories();
  }, []);

  const fetchInventories = () => {
    fetch(`${baseUrl}/api/inventories`)
      .then((response) => response.json())
      .then((data) => setInventories(data))
      .catch((error) => console.error("Error getting inventories:", error));
  };

  const openModal = (inventory) => {
    setSelectedInventory(inventory);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteInventory = (id) => {
    fetch(`${baseUrl}/api/inventories/${id}`, {
      method: "DELETE",
    })
      .then(() => fetchInventories())
      .catch((error) => console.error("Error deleting inventory:", error));
  };

  return (
    <>
      <InventoryHeader />
      <InventoryList inventories={inventories} openModal={openModal} />
      {selectedInventory && isModalOpen && (
        <InventoryModal
          inventory={selectedInventory}
          closeModal={closeModal}
          deleteInventory={deleteInventory}
        />
      )}
    </>
  );
};

export default InventoryPage;
