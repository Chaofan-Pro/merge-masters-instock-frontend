import "../TableHeader/TableHeader.scss";
import sortIcon from "../../assets/icons/sort-24px.svg";

const warehouseHeaders = [
  {
    key: "warehouse_name",
    label: "WAREHOUSE",
    className: "list-table__sort-name",
  },
  { key: "address", label: "ADDRESS", className: "list-table__sort-add" },
  {
    key: "contact_name",
    label: "CONTACT NAME",
    className: "list-table__sort-contact-name",
  },
  {
    key: "contact_phone",
    label: "CONTACT INFORMATION",
    className: "list-table__sort-contact-info",
  },
];

const TableHeader = ({ listClassName }) => {
  return (
    <li className={`${listClassName} table-header`}>
      {warehouseHeaders.map((header) => (
        <div
          key={header.key}
          className={`table-header__column ${header.className}`}
        >
          <div>{header.label}</div>
          <img className="table-header__sort-icon" src={sortIcon} alt="Sort" />
        </div>
      ))}
      <div className="table-header__column table-header__actions">ACTIONS</div>
    </li>
  );
};

export default TableHeader;
