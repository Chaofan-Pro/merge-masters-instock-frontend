import "./EditWarehouse.scss";

import InputWarehouseDetails from "../../components/InputWarehouseDetails/InputWarehouseDetails";
import InputContactDetails from "../../components/InputContactDetails/InputContactDetails";

const EditWarehouse = () => {
  return (
    <>
      <div className="main-heading">
        <img className="main-heading__back-icon" src="/src/assets/icons/arrow_back-24px.svg" alt="back arrow" />
        <h3 className="main-heading__name" >Edit Warehouse</h3>
      </div>
      <InputWarehouseDetails />
      <InputContactDetails />
    </>
  );
};

export default EditWarehouse;
