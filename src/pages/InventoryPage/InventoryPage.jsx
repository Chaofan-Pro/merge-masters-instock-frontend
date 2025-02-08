import { useState, useEffect } from "react";
import axios from "axios";
import InventoryList from "../../components/InventoryList/InventoryList";
import CustomModal from "../../components/CustomModal/CustomModal";
import "./InventoryPage.scss";

const baseUrl = import.meta.env.VITE_API_URL;

const InventoryPage = () => {
  const [inventory, setInventory] = useState(null);
  const fetchInventory = async () => {
    try {
      const inventoryRes = await axios.get(baseUrl + `/api/inventories`);
      setInventory(inventoryRes.data);
    } catch (error) {
      console.error("ERROR: " + error);
    }
  };
  useEffect(() => {
    fetchInventory();
  }, []);

  if (!inventory) return <p>Loading Inventories... </p>;
  return (
    <>
      <InventoryList page={"inventory"} inventory={inventory} />
    </>
  );
};

export default InventoryPage;
