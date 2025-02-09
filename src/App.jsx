import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AddInventoryPage from "./pages/AddInventoryPage/AddInventoryPage";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage";
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";

const baseUrl = import.meta.env.VITE_API_URL;

function App() {
  const [warehouse, setWarehouse] = useState(null);

  const fetchWarehouseDetail = async (id) => {
    try {
      const singleWarehouseRes = await axios.get(
        baseUrl + `/api/warehouses/${id}`
      );
      setWarehouse(singleWarehouseRes.data);
    } catch (error) {
      console.error("ERROR: " + error);
    }
  };

  const [inventory, setInventory] = useState(null);

  const fetchInventoryDetail = async (id) => {
    try {
      const singleInventoryRes = await axios.get(
        baseUrl + `/api/inventories/${id}`
      );
      setInventory(singleInventoryRes.data);
    } catch (error) {
      console.error("ERROR: " + error);
    }
  };

  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
          <main>
            <Routes>
              {/* =-=-=-=-=-HOME PAGE-=-=-=-=-= */}
              <Route path="/" element={<WarehousesPage />} />

              {/* =-=-=-=-=-WAREHOUSE PAGES-=-=-=-=-= */}
              <Route path="/warehouses" element={<WarehousesPage />} />
              <Route
                path="/warehouses/:id"
                element={
                  <WarehouseDetailsPage
                    warehouse={warehouse}
                    fetchWarehouseDetail={fetchWarehouseDetail}
                  />
                }
              />
              <Route
                path="/warehouses/edit/:id"
                element={
                  <EditWarehousePage
                    baseUrl={baseUrl}
                    warehouse={warehouse}
                    fetchWarehouseDetail={fetchWarehouseDetail}
                  />
                }
              />
              <Route
                path="/warehouses/add"
                element={<AddWarehousePage baseUrl={baseUrl} />}
              />

              {/* =-=-=-=-=-INVENTORY PAGES-=-=-=-=-= */}
              <Route path="/inventory" element={<InventoryPage />} />
              <Route
                path="/inventory/:id"
                element={
                  <InventoryDetailsPage
                    fetchInventoryDetail={fetchInventoryDetail}
                    inventory={inventory}
                  />
                }
              />
              <Route
                path="/inventory/edit/:id"
                element={
                  <EditInventoryPage
                    fetchInventoryDetail={fetchInventoryDetail}
                    inventory={inventory}
                  />
                }
              />
              <Route path="/inventory/add" element={<AddInventoryPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;