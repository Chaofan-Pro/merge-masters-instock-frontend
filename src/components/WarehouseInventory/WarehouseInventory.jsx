import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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
      console.log(warehouseInventoryRes.data); //delete later
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
      <div class="inventory-heading">
        <h4 class="inventory-heading__text">INVENTORY ITEM</h4>
        <h4 class="inventory-heading__text">CATEGORY</h4>
        <h4 class="inventory-heading__text">STATUS</h4>
        <h4 class="inventory-heading__text">QUANTITY</h4>
        <h4 class="inventory-heading__text">ACTIONS</h4>
      </div>
    </section>
  );
};

export default WarehouseInventory;
