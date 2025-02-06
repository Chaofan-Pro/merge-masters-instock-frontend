import "./WarehouseDetailsPage.scss";
import WarehouseDetailsComp from "../../components/WarehouseDetails/WarehouseDetails";
import React from "react";

function WarehouseDetails({ warehouse, fetchWarehouseDetail }) {
  return (
    <>
      <WarehouseDetailsComp
        warehouse={warehouse}
        fetchWarehouseDetail={fetchWarehouseDetail}
      />
    </>
  );
}

export default WarehouseDetails;
