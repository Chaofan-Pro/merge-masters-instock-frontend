import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div>
        <img
          className="header__logo"
          src="/src/assets/logos/InStock-Logo 2.svg"
          alt="instock logo"
        />
        <h1 className="header__title">INSTOCK</h1>
      </div>
      <nav className="header__nav-bar">
        <ul>
          <li className="header__nav-item">Warehouses</li>
          <li className="header__nav-item">Invertory</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
