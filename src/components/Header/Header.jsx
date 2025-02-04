import "./Header.scss";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation().pathname;
  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="/src/assets/logos/InStock-Logo.svg"
          alt="instock logo"
        />
      </Link>
      <nav className="header__nav-bar">
        <Link
          to="/warehouses"
          className={
            location === "/warehouses"
              ? "header__nav-item--active"
              : "header__nav-item"
          }
        >
          Warehouses
        </Link>
        <Link
          to="/inventory"
          className={
            location === "/inventory"
              ? "header__nav-item--active"
              : "header__nav-item"
          }
        >
          Inventory
        </Link>
      </nav>
    </header>
  );
};

export default Header;
