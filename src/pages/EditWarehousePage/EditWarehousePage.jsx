import "./EditWarehousePage.scss";
import axios from "axios";
import { useState } from "react";

import FormWarehouseDetails from "../../components/FormWarehouseDetails/FormWarehouseDetails";
import FormContactDetails from "../../components/FormContactDetails/FormContactDetails";

const EditWarehouse = () => {
  return (
    <>
      <div className="main-heading">
        <img
          className="main-heading__back-icon"
          src="/src/assets/icons/arrow_back-24px.svg"
          alt="back arrow"
        />
        <h3 className="main-heading__name">Edit Warehouse</h3>
      </div>
      <FormWarehouseDetails />
      {/* <FormContactDetails /> */}
    </>
  );
};

export default EditWarehouse;
