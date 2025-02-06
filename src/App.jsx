import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AddInventoryPage from "./pages/AddInventoryPage/AddInventoryPage";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage";
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
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
            <Route path="/warehouses/:id" element={<WarehouseDetailsPage />} />
            <Route
              path="/warehouses/edit/:id"
              element={<EditWarehousePage />}
            />
            <Route path="/warehouses/add" element={<AddWarehousePage />} />

            {/* =-=-=-=-=-INVENTORY PAGES-=-=-=-=-= */}
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/inventory/:id" element={<InventoryDetailsPage />} />
            <Route path="/inventory/edit/:id" element={<EditInventoryPage />} />
            <Route path="/inventory/add" element={<AddInventoryPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
