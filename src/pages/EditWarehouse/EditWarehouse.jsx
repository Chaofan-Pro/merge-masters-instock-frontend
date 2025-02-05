import "./EditWarehouse.scss";

import InputWarehouseDetails from "../../components/InputWarehouseDetails/InputWarehouseDetails";
import InputContactDetails from "../../components/InputContactDetails/InputContactDetails";

const EditWarehouse = () => {
  return (
    <>
      <div className="editWarehouse__title">
        <img src="/src/assets/icons/arrow_back-24px.svg" alt="back arrow" />
        <h3>Edit Warehouse</h3>
      </div>
      <InputWarehouseDetails />
      <InputContactDetails />
    </>
  );
};

export default EditWarehouse;
