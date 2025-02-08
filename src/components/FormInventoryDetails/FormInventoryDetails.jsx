import React, {
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react";
import "./FormInventoryDetails.scss";
import axios from "axios";
import { useParams } from "react-router-dom";

const FormInventoryDetails = forwardRef((props, ref) => {
  const baseUrl = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const [inventory, setInventory] = useState(null);
  const [warehouses, setWarehouses] = useState([]);

  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Select");
  const [status, setStatus] = useState("In Stock");
  const [quantity, setQuantity] = useState("");
  const [warehouse, setWarehouse] = useState("Select");

  const [isItemNameValid, setItemNameValid] = useState(true);
  const [isDescriptionValid, setDescriptionValid] = useState(true);
  const [isCategoryValid, setCategoryValid] = useState(true);
  const [isQuantityValid, setQuantityValid] = useState(true);
  const [isWarehouseValid, setWarehouseValid] = useState(true);

  // Fetch inventory details
  const fetchInventoryDetail = async () => {
    try {
      const { data } = await axios.get(baseUrl + `/api/inventories/${id}`);
      setInventory(data);
      setItemName(data.item_name);
      setDescription(data.description);
      setCategory(data.category);
      setStatus(data.status);
      setQuantity(data.quantity);

      // Set the warehouse to the corresponding warehouse_id from inventory
      setWarehouse(data.warehouse_id); // Set warehouse_id here
    } catch (error) {
      console.error("ERROR: " + error);
    }
  };

  // Fetch warehouses
  const fetchWarehouses = async () => {
    try {
      const { data } = await axios.get(baseUrl + "/api/warehouses");
      setWarehouses(data);
    } catch (error) {
      console.error("ERROR fetching warehouses:", error);
    }
  };

  useEffect(() => {
    fetchWarehouses(); //USEEFFECT TO GET WAREHOUSE
  }, []);

  useEffect(() => {
    if (warehouses.length > 0 && id) {
      fetchInventoryDetail(); //FETCH INVENTORY DETAILS AFTER FETCHWAREHOUSES
    }
  }, [warehouses, id]);

  const changeItemNameHandle = (e) => {
    setItemName(e.target.value);
    setItemNameValid(true);
  };

  const changeDescriptionHandle = (e) => {
    setDescription(e.target.value);
    setDescriptionValid(true);
  };

  const changeCategoryHandle = (e) => {
    setCategory(e.target.value);
    setCategoryValid(true);
  };

  const changeStatusHandle = (e) => {
    setStatus(e.target.value);
  };

  const changeQuantityHandle = (e) => {
    setQuantity(e.target.value);
    setQuantityValid(true);
  };

  const changeWarehouseHandle = (e) => {
    setWarehouse(e.target.value);
    setWarehouseValid(true);
  };

  const submitHandle = async (e) => {
    if (e) e.preventDefault();

    setItemNameValid(!!itemName);
    setDescriptionValid(!!description);
    setCategoryValid(category !== "Select");
    setQuantityValid(!!quantity);
    setWarehouseValid(warehouse !== "Select");

    if (
      itemName &&
      description &&
      category !== "Select" &&
      quantity &&
      warehouse !== "Select"
    ) {
      try {
        //FIND WAREHOUSE FROM WAREHOUSE LIST USING WAREHOUSE_ID
        const selectedWarehouse = warehouses.find(
          (wh) => wh.id === parseInt(warehouse) //COMPARE WAREHOUS_ID
        );

        if (!selectedWarehouse) {
          console.error("Invalid warehouse id");
          alert("Invalid warehouse name");
          return false;
        }

        await axios.put(baseUrl + `/api/inventories/${id}`, {
          item_name: itemName,
          description,
          category,
          status,
          quantity,
          warehouse_id: selectedWarehouse.id,
        });

        fetchInventoryDetail();

        alert("Updated successfully!");

        return true;
      } catch (error) {
        console.error(error);
        alert("Update failed. Please try again.");
        return false;
      }
    }
    return false;
  };

  useImperativeHandle(ref, () => ({
    submitHandle,
  }));

  return (
    <form className="addInventory__form" onSubmit={submitHandle}>
      <div className="addInventory__details-container">
        <h3 className="addInventory__subheader-title">Item Details</h3>
        <div className="addInventory__detail-form">
          {/* -=-=-=-=-=-=-ITEM-NAME-=-=-=-==-=-=- */}
          <label htmlFor="name" className="addInventory__detail-label">
            Item Name
          </label>
          <input
            type="text"
            className="addInventory__detail-input"
            placeholder="Item Name"
            id="name"
            name="itemname"
            value={itemName}
            onChange={changeItemNameHandle}
          />
          {!isItemNameValid && (
            <div className="form__error">
              <p className="form__error-text">This field is required</p>
            </div>
          )}

          {/* -=-=-=-=-=-=-DESCRIPTION  -=-=-=-==-=-=- */}
          <label htmlFor="description" className="addInventory__detail-label">
            Description
          </label>
          <textarea
            type="text"
            className="addInventory__detail-textarea"
            placeholder="Please enter a brief item description..."
            id="description"
            name="description"
            value={description}
            onChange={changeDescriptionHandle}
          ></textarea>
          {!isDescriptionValid && (
            <div className="form__error">
              <p className="form__error-text">This field is required</p>
            </div>
          )}

          {/* -=-=-=-=-=-=-CATEGORY-=-=-=-==-=-=- */}
          <label htmlFor="category" className="addInventory__detail-label">
            Category
          </label>
          <div className="addInventory__select-container">
            <select
              name="category"
              id="category"
              className="category__select"
              value={category}
              onChange={changeCategoryHandle}
            >
              <option value="Select">Please select</option>
              <option value="Electronics">Electronics</option>
              <option value="Gear">Gear</option>
              <option value="Apparel">Apparel</option>
              <option value="Accessories">Accessories</option>
              <option value="Health">Health</option>
            </select>
          </div>
          {!isCategoryValid && (
            <div className="form__error">
              <p className="form__error-text">This field is required</p>
            </div>
          )}
        </div>
      </div>

      <div className="addInventory__availability-container">
        <div className="addInventory__availability-form">
          <h3 className="addInventory__subheader-title">Item Availability</h3>
          {/* -=-=-=-=-=-=-STATUS-=-=-=-==-=-=- */}
          <label htmlFor="status" className="addInventory__detail-label">
            Status
          </label>
          <div className="stock__status">
            <input
              type="radio"
              id="instock"
              name="status"
              value="In Stock"
              checked={status === "In Stock"}
              onChange={changeStatusHandle}
            />
            <label htmlFor="instock" className="radio__button">
              In Stock
            </label>

            <input
              type="radio"
              id="outofstock"
              name="status"
              value="Out of Stock"
              checked={status === "Out of Stock"}
              onChange={changeStatusHandle}
            />
            <label htmlFor="outofstock" className="radio__button">
              Out of Stock
            </label>
          </div>

          {/* -=-=-=-=-=-=-QUANTITY-=-=-=-==-=-=- */}
          <label htmlFor="quantity" className="addInventory__detail-label">
            Quantity
          </label>
          <input
            type="text"
            className="addInventory__quantity"
            placeholder="0"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={changeQuantityHandle}
          />
          {!isQuantityValid && (
            <div className="form__error">
              <p className="form__error-text">This field is required</p>
            </div>
          )}
        </div>

        {/* -=-=-=-=-=-=-WAREHOUSE-=-=-=-==-=-=- */}
        <label htmlFor="warehouse" className="addInventory__detail-label">
          Warehouse
        </label>
        <div className="addInventory__select-container">
          <select
            name="warehouse"
            id="warehouse"
            className="warehouse__select"
            value={warehouse}
            onChange={changeWarehouseHandle}
          >
            <option value="Select">Please select</option>
            {warehouses.map((wh) => (
              <option key={wh.id} value={wh.id}>
                {wh.warehouse_name}
              </option>
            ))}
          </select>
        </div>
        {!isWarehouseValid && (
          <div className="form__error">
            <p className="form__error-text">This field is required</p>
          </div>
        )}
      </div>
    </form>
  );
});

export default FormInventoryDetails;
