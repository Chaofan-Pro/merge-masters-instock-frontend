import { useState, useEffect } from "react";
import InventoryHeader from "../../components/InventoryHeader/InventoryHeader";
import InventoryList from "../../components/InventoryList/InventoryList";
import InventoryModal from "../../components/InventoryModal/InventoryModal";  
import "./InventoryPage.scss";

// Fix: Use correct baseUrl from environment variable
const baseUrl = import.meta.env.VITE_API_URL;

const InventoryPage = () => {
  const [inventories, setInventories] = useState([]);
  const [selectedInventory, setSelectedInventory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchInventories();
  }, []);

  const fetchInventories = () => {
    fetch(`${baseUrl}/api/inventories`)  // Fix: Replace API_URL with baseUrl
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
    fetch(`${baseUrl}/api/inventories/${id}`, {  // Fix: Replace API_URL with baseUrl
      method: "DELETE",
    })
      .then(() => fetchInventories())
      .catch((error) => console.error("Error deleting inventory:", error));
  };

  return (
    <>
      <InventoryList
        inventories={inventories}
        openModal={openModal}
      />
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
