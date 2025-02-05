import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AddInventory from "./components/AddInventory/AddInventory";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import EditInventory from "./components/EditInventory/EditInventory";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import InventoryDetails from "./components/InventoryDetails/InventoryDetails";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            {/* =-=-=-=-=-HOME PAGE-=-=-=-=-= */}
            <Route path="/" element={<Warehouses />} />

            {/* =-=-=-=-=-WAREHOUSE PAGES-=-=-=-=-= */}
            <Route path="/warehouses" element={<Warehouses />} />
            <Route path="/warehouses/:id" element={<WarehouseDetails />} />
            <Route path="/warehouses/edit/:id" element={<EditWarehouse />} />
            <Route path="/warehouses/add" element={<AddWarehouse />} />

            {/* =-=-=-=-=-INVENTORY PAGES-=-=-=-=-= */}
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/inventory/:id" element={<InventoryDetails />} />
            <Route path="/inventory/edit/:id" element={<EditInventory />} />
            <Route path="/inventory/add" element={<AddInventory />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
