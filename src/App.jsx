import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AddInventory from "./pages/AddInventory/AddInventory";
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";
import EditInventory from "./pages/EditInventory/EditInventory";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
import InventoryDetails from "./pages/InventoryDetails/InventoryDetails";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
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
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
