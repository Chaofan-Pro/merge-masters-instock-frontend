import "./InventoryDetailsPage.scss";
import React from "react";
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";

function InventoryDetailsPage({ fetchInventoryDetail, inventory }) {
  return (
    <>
      <InventoryDetails
        fetchInventoryDetail={fetchInventoryDetail}
        inventory={inventory}
      />
    </>
  );
}

export default InventoryDetailsPage;
