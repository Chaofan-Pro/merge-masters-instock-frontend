import "./WarehouseDetailsPage.scss";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import WarehouseInventory from "../../components/WarehouseInventory/WarehouseInventory";
import React from "react";

function WarehouseDetailsPage({ warehouse, fetchWarehouseDetail }) {
  return (
    <>
      <WarehouseDetails
        warehouse={warehouse}
        fetchWarehouseDetail={fetchWarehouseDetail}
      />
      <WarehouseInventory />
    </>
  );
}

export default WarehouseDetailsPage;
