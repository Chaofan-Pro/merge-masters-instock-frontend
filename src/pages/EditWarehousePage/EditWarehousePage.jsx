import "./EditWarehousePage.scss";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import FormWarehouseDetails from "../../components/FormWarehouseDetails/FormWarehouseDetails";
import FormContactDetails from "../../components/FormContactDetails/FormContactDetails";
import Input from "../../components/Input/Input";

const EditWarehouse = () => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const { id } = useParams(); // Get warehouse ID from URL

  return (
    <>
      <div className="main-heading">
        <Link className="link" to={`${baseUrl}/warehouses/${id}`}>
          <img
            className="main-heading__back-icon"
            src="/src/assets/icons/arrow_back-24px.svg"
            alt="back arrow"
          />
        </Link>
        <h3 className="main-heading__name">Edit Warehouse</h3>
      </div>
      <FormWarehouseDetails />
      {/* <Input/> */}
      {/* <FormContactDetails /> */}
    </>
  );
};

export default EditWarehouse;
