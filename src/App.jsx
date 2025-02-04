import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Warehouses from "./pages/Warehouses/Warehouses";
import Inventory from "./pages/Inventory/Inventory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <p>This is MM's instock project</p>
        <main>
          <Routes>
            <Route path="/" element={<Warehouses />} />

            <Route path="/inventory" element={<Inventory />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
